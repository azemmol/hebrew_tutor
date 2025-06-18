import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function Response({ combo }) {
    const [response, setResponse] = useState(""); 
       const handleSubmission = async (e) => {
        e.preventDefault();

        const sentence_data = {
            combo,
            sentence: response
        };

        const res = await fetch('/api/evaluate-sentence', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sentence_data)
        });

        const data = await res.json();
        console.log("OpenAI says:", data); 
      
    }


    return (
        <div>
            <form onSubmit={handleSubmission}>
            <input
                type="text"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder='Type your sentence'/>
            <button type='submit'>Submit!</button>

            </form>
            
        </div>
    )


}

export default Response;