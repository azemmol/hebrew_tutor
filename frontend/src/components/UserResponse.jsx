import React, { useState, useEffect } from 'react';

function Response({ combo }) {
    const [response, setResponse] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setResponse("");
        setFeedback("");
    }, [combo]);
    
    const handleSubmission = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const sentence_data = {
            combo,
            sentence: response
        };
        
        try {
            const res = await fetch('http://localhost:8080/api/evaluate-sentence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sentence_data)
            });
            
            const data = await res.json();
            setFeedback(data.feedback);
        } catch (error) {
            setFeedback("Error: Unable to evaluate your sentence. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            {combo && (
                <form onSubmit={handleSubmission} style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="sentence-input" style={{ 
                            display: 'block', 
                            marginBottom: '0.5rem', 
                            color: '#2d3748',
                            fontWeight: '600'
                        }}>
                            📝 Write your sentence here:
                        </label>
                        <textarea
                            id="sentence-input"
                            className='submit_answer'
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            placeholder='כתוב את המשפט שלך כאן...'
                            rows={3}
                            style={{ direction: 'rtl', textAlign: 'right' }}
                        />
                    </div>
                    
                    <button 
                        className="primary-button" 
                        type='submit'
                        disabled={isLoading || !response.trim()}
                        style={{ 
                            opacity: isLoading || !response.trim() ? 0.6 : 1,
                            cursor: isLoading || !response.trim() ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {isLoading ? '⏳ Evaluating...' : '✅ Submit Answer'}
                    </button>
                </form>
            )}

            {feedback && (
                <div className="card fade-in" style={{ 
                    marginTop: '1.5rem',
                    background: 'rgba(102, 126, 234, 0.05)',
                    border: '2px solid rgba(102, 126, 234, 0.2)'
                }}>
                    <h3 style={{ 
                        color: '#2d3748', 
                        marginBottom: '1rem',
                        fontSize: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        💡 Feedback
                    </h3>
                    <div style={{
                        color: '#4a5568',
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'inherit'
                    }}>
                        {feedback}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Response;