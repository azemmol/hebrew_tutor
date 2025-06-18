import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import getRandomVerbCombo from './Randomizer.js';


function StartVerb() {
    const [combo,setCombo] = useState(null);
    const handleClick = () => {
        const combo_chadash = getRandomVerbCombo();
        setCombo(combo_chadash);
        console.log(combo_chadash); 
    };
    return (
        <div>
            <button onClick={handleClick}>Start</button>

               {combo && (
                <div className='building_blocks'>
                    <p>
                        Build a sentence with {combo.subject}, {combo.verb} in {combo.tense} tense
                    </p>
                </div>
            )}
        </div>

    )
    

}

export default StartVerb;