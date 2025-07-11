import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'
import AddToDict from './pages/AddToDictionary.jsx';
//when the path is /playground Playground.jsx renders


function App() {
    
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/playground' element={<Playground />} />
                 <Route path='/add-to-dictionary' element={<AddToDict />} />

            </Routes>
        </div>
    );
}

export default App;
