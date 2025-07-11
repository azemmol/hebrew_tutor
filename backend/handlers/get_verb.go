package handlers

import (
    "encoding/json"
    "net/http"
    "github.com/azemmol/hebrew-tutor/backend/config"
    "github.com/azemmol/hebrew-tutor/backend/models"
)

func GetVerb(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodGet {
        http.Error(w, "Only GET allowed", http.StatusMethodNotAllowed)
        return
    }

    var verb models.Verb
    err := config.DB.Get(&verb, "SELECT * FROM verbs ORDER BY RANDOM() LIMIT 1")
    if err != nil {
        http.Error(w, "Failed to retrieve a verb", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(verb)
}
