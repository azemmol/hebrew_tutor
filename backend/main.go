package main

import (
	"net/http"
	"fmt"
	"fluid_hubrew/handlers"
	"log"
	
)


func main() {
	http.HandleFunc("/api/evaluate-sentence", handlers.EvaluateSentenceHandler)
	log.Println("Server starting on http://localhost:8080...")
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Fatal("Server failed:", err)
    }

}