import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import getRandomVerbCombo from './Randomizer.js';


function StartVerb({ combo, setCombo, }) {
    
    const handleClick = () => {
        const combo_chadash = getRandomVerbCombo();
        setCombo(combo_chadash);
    
    };
    return (
        <div>

            <button className="primary-button" onClick={handleClick}>Start</button>

               {combo && (
                <div className='building_blocks'>
                    <p>
                        Build a sentence with {combo.subject}, {combo.verb}, in the {combo.tense} tense
                    </p>
                </div>
            )}
        </div>

    )
    

}

export default StartVerb;