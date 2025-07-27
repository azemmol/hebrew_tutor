import React, { useState } from 'react';

function AddVerb() {
  const [verb, setVerb] = useState({ hebrew: "", english: "" });
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVerb((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const confirmSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:8080/api/add-verb', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(verb)
      });
      
      if (res.ok) {
        setVerb({ hebrew: "", english: "" });
        setShowConfirm(false);
      } else {
        throw new Error('Failed to add verb');
      }
    } catch (error) {
      console.error('Error adding verb:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  return (
    <div>
      <h3 style={{ color: '#2d3748', marginBottom: '1.5rem', textAlign: 'center' }}>
        📚 Add New Verb
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="verb-form" style={{ 
          maxWidth: '100%', 
          margin: '0',
          padding: '1.5rem',
          background: 'transparent',
          border: 'none',
          boxShadow: 'none'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="hebrew" style={{ color: '#4a5568', fontWeight: '600' }}>
              Hebrew Verb
            </label>
            <input
              type="text"
              name="hebrew"
              id="hebrew"
              value={verb.hebrew}
              placeholder="לכתוב"
              onChange={handleChange}
              style={{ direction: 'rtl', textAlign: 'right' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="english" style={{ color: '#4a5568', fontWeight: '600' }}>
              English Verb
            </label>
            <input
              type="text"
              name="english"
              id="english"
              value={verb.english}
              placeholder="to write"
              onChange={handleChange}
            />
          </div>

          <button 
            type="submit"
            disabled={!verb.english || !verb.hebrew}
            style={{ 
              opacity: (!verb.english || !verb.hebrew) ? 0.6 : 1,
              cursor: (!verb.english || !verb.hebrew) ? 'not-allowed' : 'pointer'
            }}
          >
            ➕ Add Verb
          </button>
        </div>
      </form>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>
              🤔 Confirm Addition
            </h3>
            <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
              Are you sure you want to add this verb to your dictionary?
            </p>
            <div style={{ 
              background: 'rgba(102, 126, 234, 0.1)', 
              padding: '1rem', 
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              <p style={{ margin: '0', fontWeight: '600', color: '#2d3748' }}>
                <span style={{ direction: 'rtl', display: 'inline-block' }}>{verb.hebrew}</span>
              </p>
              <p style={{ margin: '0.5rem 0 0 0', color: '#4a5568' }}>
                = {verb.english}
              </p>
            </div>

            <div className="modal-buttons">
              <button 
                className="yes-button" 
                onClick={confirmSubmit}
                disabled={isLoading}
              >
                {isLoading ? '⏳ Adding...' : '✅ Yes, Add It'}
              </button>
              <button 
                className="cancel-button" 
                onClick={() => setShowConfirm(false)}
                disabled={isLoading}
              >
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddVerb;
