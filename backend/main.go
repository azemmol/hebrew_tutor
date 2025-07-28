package main

import (
	_ "embed"
	"log"
	"net/http"

	"github.com/azemmol/hebrew-tutor/backend/config"
	"github.com/azemmol/hebrew-tutor/backend/handlers"
	"github.com/azemmol/hebrew-tutor/backend/models"

	"fmt"
	"os"

	"github.com/joho/godotenv"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, relying on system environment variables")
	}
}

func withCORS(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Allow requests from any origin (for development)
		w.Header().Set("Access-Control-Allow-Origin", "*")

		// For production, uncomment and set your frontend URL:
		// w.Header().Set("Access-Control-Allow-Origin", "https://your-frontend-domain.com")

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
	// Check if DB_PW environment variable is set
	if os.Getenv("DB_PW") == "" {
		log.Fatal("DB_PW environment variable is not set. Please set it in your deployment environment.")
	}

	config.InitDB()

	var err error
	// 3. Fetch and print verbs
	var verbs []models.Verb
	err = config.DB.Select(&verbs, "SELECT * FROM verbs")
	if err != nil {
		log.Printf("Warning: Could not fetch verbs from database: %v", err)
		log.Println("Continuing without initial verb load...")
	} else {
		log.Printf("Successfully loaded %d verbs from database", len(verbs))
		for _, v := range verbs {
			fmt.Printf("%d: %s = %s\n", v.ID, v.Hebrew, v.English)
		}
	}

	// 4. Setup HTTP routes
	http.HandleFunc("/api/evaluate-sentence", withCORS(handlers.EvaluateSentenceHandler))
	http.HandleFunc("/api/add-verb", withCORS(handlers.AddVerbHandler))
	http.HandleFunc("/api/view-dictionary", withCORS(handlers.GetAllVerbsHandler))
	http.HandleFunc("/api/get-verb", withCORS(handlers.GetVerb))

	// Health check endpoint
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	})

	// 5. Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s...", port)
	err = http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatal("Server failed:", err)
	}
}
