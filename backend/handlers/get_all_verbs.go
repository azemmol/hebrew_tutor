package handlers

import (
    "encoding/json"
    "net/http"
    "github.com/azemmol/hebrew-tutor/backend/config"
    "github.com/azemmol/hebrew-tutor/backend/models"
)

func GetAllVerbsHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodGet {
        http.Error(w, "Only GET allowed", http.StatusMethodNotAllowed)
        return
    }

    var verbs []models.Verb
    err := config.DB.Select(&verbs, "SELECT * FROM verbs")
    if err != nil {
        http.Error(w, "Failed to retrieve verbs", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(verbs)
}
