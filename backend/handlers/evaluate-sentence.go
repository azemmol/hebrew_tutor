package handlers

import (
    "encoding/json"
    "net/http"
    "log"
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

func EvaluateSentenceHandler(w http.ResponseWriter, r *http.Request) {
    // 1. Check method is POST
    // 2. Decode JSON body into SentenceRequest struct
    // 3. Log or print sentence + combo
    // 4. Write dummy JSON back: {"feedback": "Cool sentence!"}
}