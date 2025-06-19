package main

import (
    "net/http"
    "log"
	"github.com/azemmol/hebrew-tutor/backend/handlers"
	"github.com/joho/godotenv"

)
func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}


func withCORS(h http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

        // Handle preflight OPTIONS request
        if r.Method == http.MethodOptions {
            w.WriteHeader(http.StatusOK)
            return
        }

        h.ServeHTTP(w, r)
    }
}

func main() {
    http.HandleFunc("/api/evaluate-sentence", withCORS(handlers.EvaluateSentenceHandler))
	log.Println("Server starting on http://localhost:8080...")
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Fatal("Server failed:", err)
    }
	

}
