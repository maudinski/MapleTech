package main

import (
	"fmt"
	"net/http"
)

func leech(w http.ResponseWriter, r *http.Request) {
	fmt.Println("leech")
	fmt.Fprintf(w, "leech")
}
