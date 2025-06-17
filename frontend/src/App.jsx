import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'
//when the path is /playground Playground.jsx renders


function App() {
     console.log("App loaded");
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/playground' element={<Playground />} />
            </Routes>
        </div>
    );
}

export default App;
