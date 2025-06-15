import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
    console.log("App.js loaded");

    return (
        <div>
            <Navbar />
        </div>
    );
}

export default App;
