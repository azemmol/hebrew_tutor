import React from 'react';
import { Routes, Route } from 'react-router-dom';

const verbs = ["ללכתל","לעדכן"]
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
    return (

    <div>
        <h1 className='playground_header'> Welcome to the playground!</h1>
        <h4 className='playground_header_2'> To begin, press start</h4>
         <button>Start</button>

     </div>
    
    
    )

}

export default Playground;