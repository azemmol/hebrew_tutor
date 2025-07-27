import React, { useState } from 'react';
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
        <div className="container fade-in">
            <h1 className='playground_header'>Welcome to Playground!</h1>
            
            <div className="playground_header_2">
                <p>Ready to practice your Hebrew verbs? Click start to receive a personalized prompt.</p>
            </div>

            <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
                <h2 style={{ color: '#2d3748', marginBottom: '1rem', fontSize: '1.5rem' }}>
                    🎯 Practice Session
                </h2>
                <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
                    You'll receive a verb, tense, and pronoun combination to practice with.
                </p>
                
                <StartVerb combo={combo} setCombo={setCombo} />
            </div>

            {combo && (
                <div className="card fade-in" style={{ marginTop: '1rem' }}>
                    <Response combo={combo} />
                </div>
            )}
        </div>
    )
}

export default Playground;