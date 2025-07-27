import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    
    return (
        <div className="container fade-in">
            <h1 className='playground_header'>Welcome to Fluid!</h1>
            
            <div className="playground_header_2">
                <p>Master Hebrew verbs with interactive learning experiences designed to strengthen your language skills.</p>
            </div>

            <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
                <h2 style={{ color: '#2d3748', marginBottom: '1rem', fontSize: '1.5rem' }}>
                    🎯 Interactive Learning
                </h2>
                <p style={{ marginBottom: '1.5rem', color: '#4a5568' }}>
                    Visit the Playground to receive personalized sentence prompts. Your answers will be evaluated for accuracy, 
                    helping you develop fluid and precise Hebrew speech.
                </p>
                
                <Link to="/playground">
                    <button className="primary-button">
                        Start Learning
                    </button>
                </Link>
            </div>

            <div className="container-flex" style={{ marginTop: '2rem' }}>
                <Link to="/playground" style={{ textDecoration: 'none', flex: 1 }}>
                    <div className="card" style={{ 
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                    }}
                    >
                        <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>🎮 Playground</h3>
                        <p style={{ color: '#4a5568' }}>
                            Practice Hebrew verbs with interactive exercises and real-time feedback.
                        </p>
                        <div style={{ 
                            marginTop: 'auto', 
                            paddingTop: '1rem',
                            color: '#667eea',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                        }}>
                            Click to start →
                        </div>
                    </div>
                </Link>
                
                <Link to="/add-to-dictionary" style={{ textDecoration: 'none', flex: 1 }}>
                    <div className="card" style={{ 
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                    }}
                    >
                        <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>📚 Dictionary</h3>
                        <p style={{ color: '#4a5568' }}>
                            Add new verbs to your personal dictionary and track your progress.
                        </p>
                        <div style={{ 
                            marginTop: 'auto', 
                            paddingTop: '1rem',
                            color: '#667eea',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                        }}>
                            Click to manage →
                        </div>
                    </div>
                </Link>
                
                <div className="card" style={{ 
                    flex: 1,
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    opacity: 0.7
                }}>
                    <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>📈 Progress</h3>
                    <p style={{ color: '#4a5568' }}>
                        Monitor your learning journey with detailed analytics and insights.
                    </p>
                    <div style={{ 
                        marginTop: 'auto', 
                        paddingTop: '1rem',
                        color: '#a0aec0',
                        fontWeight: '600',
                        fontSize: '0.9rem'
                    }}>
                        Coming soon...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;