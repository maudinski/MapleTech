package main

import (
	"log"
	"net/http"
)

func roll(w http.ResponseWriter, r *http.Request) {
	log.Println("roll")
}
