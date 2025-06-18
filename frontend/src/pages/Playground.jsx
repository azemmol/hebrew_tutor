import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import StartVerb from "../components/StartVerb.jsx";
import Response from '../components/UserResponse.jsx'; 


const verbs = ["להשתפר","לעדכן","להצטרף","להתמודד","להעדיף"]
const tense = ["עבר", "הווה", "עתיד"]
const pronouns = [
  "אני",     
  "אתה",     
  "את",     
  "הוא",    
  "היא",     
  "אנחנו",   
  "אתם",     
  "אתן",     
  "הם",     
  "הן"       
];

function Playground() {
    const [combo, setCombo] = useState(null);

    return (

    <div>
        <h1 className='playground_header'> Welcome to Playground!</h1>
        <br></br> <br></br>
        <div className="playground_header_2">
            <p>Click "Start" to receive a sentence prompt. Your answer will be checked for accuracy.</p>

        </div>
        <h4 className='playground_header_2'> מוכן, press start</h4>
      
     
     <StartVerb combo={combo} setCombo={setCombo} />
     <Response combo={combo} />

       

     </div>
    
    
    )

}

export default Playground;