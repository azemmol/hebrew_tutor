package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	openai "github.com/sashabaranov/go-openai"
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
//     response := map[string]string{
//     "feedback": fmt.Sprintf("Sentence received! Looks good. You wrote: %s", req.Sentence),
// }
	// jsonData, err := json.Marshal(req) //Try to convert the req struct into JSON.
	if err != nil {
		log.Fatal(err)
	}
	client := openai.NewClient(os.Getenv("API_KEY"))
	systemPrompt := "You are a consice Hebrew tutor. Evaluate grammar and conjugation only.include nekudot when giving feedback on the verb - right or wrong; Also give a naturals sounding similar sentence"
	userPrompt := fmt.Sprintf("Evaluate this sentence: %s. Subject: %s, Verb: %s, Tense: %s",
	req.Sentence, req.Combo.Subject, req.Combo.Verb, req.Combo.Tense)

	resp, err := client.CreateChatCompletion(
	context.Background(),
	openai.ChatCompletionRequest{
		Model: openai.GPT4oMini,
		Messages: []openai.ChatCompletionMessage{
			{
				Role:    openai.ChatMessageRoleSystem,
				Content: systemPrompt,
			},
			{
				Role:    openai.ChatMessageRoleUser,
				Content: userPrompt,
			},
		},
	},
)

	
	if err != nil {
		log.Fatalf("OpenAI API error: %v\n", err)
	}
	fmt.Println("Feedback from OpenAI:", resp.Choices[0].Message.Content)

	user_feedback := map[string]string{
    "feedback": resp.Choices[0].Message.Content,
	}



    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(user_feedback)

}
