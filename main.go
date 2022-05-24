package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

var frontend []byte

const frontendPath = "frontend_basic/index.html"

/********************************************************
Purpose:
Parameters:
Notes:
********************************************************/
func main() {

	initCwk()
	router := makeRouter()

	http.Handle("/", router)

	fmt.Println("Listening...")

	// certificates were generated:
	// https://golangcode.com/basic-https-server-with-certificate/
	// grabbed this from my github, loginserver
	//err := http.ListenAndServeTLS(":8080", "../https-server.crt", "../https-server.key", nil)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}

/********************************************************
Purpose:
Parameters:
Notes:
********************************************************/
func makeRouter() *mux.Router {

	getFrontend()

	router := mux.NewRouter()

	router.HandleFunc("/", index).Methods("GET")

	router.HandleFunc("/cwk", cwk).Methods("GET")
	router.HandleFunc("/cwk", cwk_post).Methods("POST")
	router.HandleFunc("/roll", roll).Methods("POST")

	router.HandleFunc("/leech", leech).Methods("GET")

	router.NotFoundHandler = new(Handler404)

	return router
}

func getFrontend() {

	data, err := ioutil.ReadFile(frontendPath)
	if err != nil {
		log.Fatal("Reading frontend failed")
	}

	frontend = data
}

func index(w http.ResponseWriter, r *http.Request) {
	fmt.Println("index")
	w.Write(frontend)
}

/********************************************************
Purpose: for handling 404's, used in the makeRouter function, just a weird gorilla kink
Parameters:
Notes:
********************************************************/
type Handler404 struct{}

func (h *Handler404) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Print("404 --- ")
	fmt.Println(r.URL.Path)
	fmt.Fprintf(w, "404")
}

// https://www.stackhawk.com/blog/golang-cors-guide-what-it-is-and-how-to-enable-it/
// required for react stuff
//
// you sometimes gotta be specific with what headers exist or not
// https://stackoverflow.com/questions/40985920/making-golang-gorilla-cors-handler-work
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}
