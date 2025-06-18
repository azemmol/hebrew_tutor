package handlers

import (
    "encoding/json"
    "log"
    "net/http"
)

// { what is being sent 
//   "combo": {
//     "subject": "אני",
//     "verb": "ללכת",
//     "tense": "עבר"
//   },
//   "sentence": "הלכתי אתמול לחנות"
// }

type Combo struct {
    Subject string `json:"subject"`
    Verb    string `json:"verb"`
    Tense   string `json:"tense"`

	
}
type SentenceRequest struct {
    Combo    Combo  `json:"combo"`
    Sentence string `json:"sentence"`
}
func EvaluateSentenceHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w,"Only post allowed",http.StatusMethodNotAllowed)
		return
	}
	//var of type struct
	var req SentenceRequest
	err := json.NewDecoder(r.Body).Decode(&req)

	  if err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }

    log.Printf("Received combo: %+v", req.Combo)
    log.Printf("Received sentence: %s", req.Sentence)

    // Dummy feedback response
    response := map[string]string{
        "feedback": "Sentence received! Looks good.",
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)

}
