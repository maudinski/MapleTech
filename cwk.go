package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"sync"
	"time"
)

type Player struct {
	Name      string
	Placement int
}

type CwkBonusInstance struct {
	Players   []Player
	T         time.Time
	GroupName string
}

var bonusInstancesMutex sync.RWMutex
var bonusInstances []CwkBonusInstance

const INSTANCE_LIFESPAN_MINUTES = 200

func initCwk() {
	bonusInstances = []CwkBonusInstance{}

	var igns1 = []string{"fiji", "cursedkitty", "imessage"}
	var igns2 = []string{"twistedbow", "fiji", "kimmy", "blue301"}

	add_new_instance(igns1, "test group 1")

	go add_another_later(igns2)
}

func add_another_later(igns []string) {
	time.Sleep(5 * time.Second)
	add_new_instance(igns, "test group 2")
}

func cwk(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	log.Println("cwk")

	cwk_send_data(w, r)
}

// TODO being received as url parameters, check latest stack overflow post for insight
// TODO should check if groupname is unique, this would only cause front-end errors tho
//		plus front end should already check it tho
func cwk_post(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	log.Println("cwk_post")

	// TODO i am unhackable bb
	if len(bonusInstances) >= 300 {
		w.Write([]byte("max instances reached"))
		return
	}

	r.ParseForm()

	var igns []string
	var groupname string

	for key, value := range r.Form {
		if value[0] == "" {
			if key == "groupname" {
				w.Write([]byte("no group name entered"))
				return
			}
			continue
		}

		if key == "groupname" {
			groupname = value[0]
		} else {
			igns = append(igns, value[0])
		}
	}

	add_new_instance(igns, groupname)

	cwk_send_data(w, r)
}

func add_new_instance(igns []string, groupname string) {

	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(igns), func(i, j int) {
		igns[i], igns[j] = igns[j], igns[i]
	})

	var instance CwkBonusInstance
	instance.T = time.Now()

	for i, ign := range igns {
		p := Player{ign, i + 1}
		instance.Players = append(instance.Players, p)
	}

	instance.GroupName = groupname

	bonusInstancesMutex.Lock()
	bonusInstances = append([]CwkBonusInstance{instance}, bonusInstances...)
	bonusInstancesMutex.Unlock()

	go purge_thread(groupname)

}

func cwk_send_data(w http.ResponseWriter, r *http.Request) {
	bonusInstancesMutex.RLock()
	bin, err := json.Marshal(bonusInstances)
	bonusInstancesMutex.RUnlock()

	if err != nil {
		log.Println(err)
		bin = []byte("marshalling failed")
	}

	w.Write(bin)
}

func purge_thread(groupname string) {
	log.Printf("Life span is %d minutes", INSTANCE_LIFESPAN_MINUTES)
	time.Sleep(time.Minute * INSTANCE_LIFESPAN_MINUTES)

	index := 0

	bonusInstancesMutex.Lock()
	log.Println("del")

	if len(bonusInstances) == 1 {
		bonusInstances = []CwkBonusInstance{}
	} else {

		for i, instance := range bonusInstances {
			if instance.GroupName == groupname {
				index = i
				break
			}
		}
		if index == 0 {
			bonusInstances = bonusInstances[1:]
		} else { // if for some reason the threads are executing extremely outof order...
			bonusInstances = append(bonusInstances[:index], bonusInstances[index+1:]...)
		}
	}

	bonusInstancesMutex.Unlock()
}
