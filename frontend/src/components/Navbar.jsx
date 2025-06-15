import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-white shadow px-6 py-4">
            <a href="/" className="text-xl font-extrabold text-black-700 font-bold">Fluid</a>
            <ul className="flex space-x-6">
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive 
                                ? "text-black-700 font-bold" 
                                : "text-gray-700 hover:text-blue-800"
                        }
                    >
                        Playground
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            isActive 
                                ? "text-black-700 font-bold" 
                                : "text-gray-700 hover:text-blue-800"
                        }
                    >
                        About Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
