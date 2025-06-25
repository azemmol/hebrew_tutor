import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
//r
function Response({ combo }) {
    const [response, setResponse] = useState("");
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        setResponse("");
        setFeedback("");
    }, [combo]);
       const handleSubmission = async (e) => {
        e.preventDefault();

        const sentence_data = {
            combo,
            sentence: response
        };
        const res = await fetch('http://localhost:8080/api/evaluate-sentence', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sentence_data)
        });
        console.log(sentence_data)
       

    const data = await res.json();
        console.log("OpenAI says:", data); 
        setFeedback(data.feedback);
       
       // setResponse("");
      
    }


    return (
        <div>
            {combo && (
                <form onSubmit={handleSubmission}>
                    <input
                        className='submit_answer'
                        type="text"
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        placeholder='Type your sentence'
                    />
                    <button type='submit'>Submit!</button>
                </form>
            )}

            {feedback && (
                <div style={{
                    border: '1px solid #ccc',
                    padding: '12px',
                    marginTop: '16px',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9'
                }}>
                    <strong>OpenAI Feedback:</strong>
                    <p>{feedback}</p>
                </div>
            )}
        </div>
    );
}


export default Response;