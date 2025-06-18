package main

import (
    "net/http"
    "fmt"
    "log"

    "github.com/azemmol/hebrew-tutor/backend/handlers"
)


func main() {
	http.HandleFunc("/api/evaluate-sentence", handlers.EvaluateSentenceHandler)
	log.Println("Server starting on http://localhost:8080...")
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Fatal("Server failed:", err)
    }

}
