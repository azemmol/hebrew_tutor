import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function Response() {
    const [response, setResponse] = useState(""); 
    const handleSubmission = async (e) => {
        e.preventDefault();

        const sentence_data {
            combo : {

            },
            sentence : response

        };

    }

    return (
        <div>
            <form onSubmit={handleSubmission}>Submit!</form>
            
        </div>
    )


}

export default Response;