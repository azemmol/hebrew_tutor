import React, { useState } from 'react';
import { getRandomVerbCombo } from './Randomizer.js';

function StartVerb({ combo, setCombo }) {
    
   const handleClick = async () => {
    const combo_chadash = await getRandomVerbCombo();
    setCombo(combo_chadash);
  };
    
    return (
        <div style={{ textAlign: 'center' }}>
            <button className="primary-button" onClick={handleClick}>
                🚀 Start Practice
            </button>

            {combo && (
                <div className='building_blocks fade-in' style={{ 
                    marginTop: '1.5rem',
                    padding: '1.5rem',
                    background: 'rgba(102, 126, 234, 0.1)',
                    borderRadius: '12px',
                    border: '2px solid rgba(102, 126, 234, 0.2)'
                }}>
                    <h3 style={{ color: '#2d3748', marginBottom: '1rem', fontSize: '1.2rem' }}>
                        📝 Your Challenge
                    </h3>
                    <p style={{ color: '#4a5568', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Build a sentence with <strong>{combo.subject}</strong>, <strong>{combo.verb}</strong>, 
                        in the <strong>{combo.tense}</strong> tense
                    </p>
                </div>
            )}
        </div>
    )
}

export default StartVerb;