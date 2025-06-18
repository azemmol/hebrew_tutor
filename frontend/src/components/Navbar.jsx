import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
             <ul style={{ display: 'flex', listStyle: 'none' }}>

       
            <li><NavLink to="/">Fluid</NavLink></li>
            </ul>

            <ul style={{ display: 'flex', listStyle: 'none',  }}>
                <li><NavLink to="/playground">Playground</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;


