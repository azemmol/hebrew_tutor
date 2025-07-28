import React from 'react';
import { NavLink } from 'react-router-dom';
//
function Navbar() {
    return (
        <nav> 
            <ul>
                <li>
                    <NavLink to="/" className="logo">
                        Fluid
                    </NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to="/playground">
                        Playground
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add-to-dictionary">
                        Add To Dictionary
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;


