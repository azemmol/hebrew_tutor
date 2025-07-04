package main

import (
    "net/http"
    "log"
	"github.com/azemmol/hebrew-tutor/backend/handlers"
    "github.com/azemmol/hebrew-tutor/backend/config"
    "github.com/azemmol/hebrew-tutor/backend/models"

    "fmt"

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
    config.InitDB("verbs.db")
    // 2. Insert test verb
   
   
    // newVerb := models.Verb{
    //     Hebrew:  "להצטרף",
    //     English: "to join",
    // }
    // _, err := config.DB.NamedExec(`
    //     INSERT INTO verbs (hebrew, english) 
    //     VALUES (:hebrew, :english)
    // `, newVerb)
    // if err != nil {
    //     log.Fatalln("Insert failed:", err)
    // }
    var err error
    // 3. Fetch and print verbs
    var verbs []models.Verb
    err = config.DB.Select(&verbs, "SELECT * FROM verbs")
    if err != nil {
        log.Fatalln("Select failed:", err)
    }

    for _, v := range verbs {
        fmt.Printf("%d: %s = %s\n", v.ID, v.Hebrew, v.English)
    }

    // 4. Setup HTTP routes
    http.HandleFunc("/api/evaluate-sentence", withCORS(handlers.EvaluateSentenceHandler))

    // 5. Start server (this blocks)
    log.Println("Server starting on http://0.0.0.0:8080...")
    err = http.ListenAndServe("0.0.0.0:8080", nil)
    if err != nil {
        log.Fatal("Server failed:", err)
    }
}

