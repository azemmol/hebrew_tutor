import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import StartVerb from "../components/StartVerb.jsx";
import Response from '../components/UserResponse.jsx'; 
import AddVerb from '../components/VerbForm.jsx';

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

    <div className="container">
        <h1 className='playground_header'> Welcome to Playground!</h1>
        <br></br> <br></br>
        <div className="playground_header_2">

        </div>
        <h4 className='playground_header_2'> מוכן? press start to receive a prompt</h4>
      
     
     <StartVerb combo={combo} setCombo={setCombo} />
     <Response combo={combo} />
    <br></br>
   


     </div>
    
    )

}

export default Playground;