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


	systemPrompt := `You are a native-level Hebrew tutor specializing in verb conjugation.
	Your task is to strictly evaluate whether the verb in the student's sentence is correctly conjugated for the given subject and tense.
	Always follow this 4-part format exactly. Each point must start on a new line and be clearly numbered:
	1. 🔍 **Conjugation Check**:  
	Evaluate whether the verb in the student's sentence is correctly conjugated for the intended subject and tense.  
	- Clearly state whether the verb is correct or incorrect.  
	- If incorrect, provide the correct conjugated form only — no full sentence needed.  
	- Be concise and specific.

	2. ✅ **Correction & Enhancement**:  
	Provide a fully corrected and idiomatic version of the sentence. Focus on fluency and natural usage.

	3. ✨ **Extra Examples*:  
	Give 2 fluent, slightly longer natural Hebrew sentence using the same verb in a different context. The first intermediate, the second advanced sounding fluent hebrew adding advanced common vocabulary

	4. 🏅 **Rating**:  
	Score the original sentence out of 10 based on fluency, natural phrasing, and conjugation accuracy. Use decimals only (e.g., 8.5). No explanation.

	All content should be written in Hebrew. Use English only for brief transliteration if absolutely necessary.`


	// systemPrompt := `You are an expert Hebrew tutor. Your task is to evaluate the grammar and verb conjugation in the given sentence. The only word that may appear in English is the transliteration of the correct verb (in its proper tense and form). Always determine if the verb used matches the subject and tense. Then:
	// 1. Correct any conjugation or grammatical mistakes.
	// 2. Briefly suggest how to make the sentence sound more natural to a native speaker.
	// 3. provide another natural sounding sentence with the verb.`

	// userPrompt := fmt.Sprintf("Evaluate this sentence: %s. Subject: %s, Verb: %s, Tense: %s",
	// req.Sentence, req.Combo.Subject, req.Combo.Verb, req.Combo.Tense)

	userPrompt := fmt.Sprintf(`
		Student's Sentence: "%s"
		- Subject: %s
		- Verb (infinitive): %s
		- Tense: %s
	`, req.Sentence, req.Combo.Subject, req.Combo.Verb, req.Combo.Tense)


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
