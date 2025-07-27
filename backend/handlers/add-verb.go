package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"github.com/azemmol/hebrew-tutor/backend/config"
	"github.com/azemmol/hebrew-tutor/backend/models"

)

func AddVerbHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w,"Only post allowed",http.StatusMethodNotAllowed)
		return
	}
	var verb_data models.Verb
	err := json.NewDecoder(r.Body).Decode(&verb_data)

	  if err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }
	// _, err = config.DB.NamedExec(`
	// 	INSERT INTO verbs (hebrew, english) 
	// 	VALUES (:hebrew, :english)
	// `, verb_data)

	_, err = config.DB.NamedExec(`
	INSERT INTO verbs (hebrew, english) 
	VALUES (:hebrew, :english)
	`, map[string]interface{}{
		"hebrew": verb_data.Hebrew,
		"english": verb_data.English,
	})


	if err != nil {
		log.Printf("Insert failed: %v", err)
		http.Error(w, "Failed to insert verb", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"status": "ok",
	})


}

