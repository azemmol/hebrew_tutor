import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="logo">Fluid</div>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li><NavLink to="/">Playground</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
