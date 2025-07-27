import React, { useEffect, useState } from 'react';

function ViewDictionary() {
  const [verbs, setVerbs] = useState([]);
  const [showDict, setShowDict] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!showDict) return;
    
    const fetchVerbs = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('http://localhost:8080/api/view-dictionary');
        const data = await res.json();
        setVerbs(data);
      } catch (error) {
        console.error('Error fetching verbs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchVerbs();
  }, [showDict]);

  return (
    <div>
      <h3 style={{ color: '#2d3748', marginBottom: '1.5rem', textAlign: 'center' }}>
        📖 Your Dictionary
      </h3>
      
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <button
          className="primary-button"
          onClick={() => setShowDict(!showDict)}
          style={{ 
            background: showDict ? '#e53e3e' : 'linear-gradient(135deg, #667eea, #764ba2)'
          }}
        >
          {showDict ? '🔒 Hide Dictionary' : '📚 View Dictionary'}
        </button>
      </div>

      {showDict && (
        <div className="fade-in">
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p style={{ color: '#4a5568' }}>⏳ Loading your dictionary...</p>
            </div>
          ) : verbs.length > 0 ? (
            <div>
              <h4 style={{ 
                color: '#2d3748', 
                marginBottom: '1rem',
                textAlign: 'center',
                fontSize: '1.1rem'
              }}>
                📝 Your Verbs ({verbs.length})
              </h4>
              <div style={{ 
                maxHeight: '300px', 
                overflowY: 'auto',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '1rem'
              }}>
                {verbs.map((verb) => (
                  <div 
                    key={verb.id} 
                    style={{
                      padding: '0.75rem',
                      margin: '0.5rem 0',
                      background: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ 
                      direction: 'rtl', 
                      fontWeight: '600',
                      color: '#2d3748',
                      fontSize: '1.1rem'
                    }}>
                      {verb.Hebrew}
                    </span>
                    <span style={{ color: '#4a5568' }}>
                      {verb.English}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem',
              color: '#4a5568'
            }}>
              <p>📭 Your dictionary is empty</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Add some verbs to get started!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ViewDictionary;
