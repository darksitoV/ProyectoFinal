import React from 'react';
import { Link } from 'react-router-dom'; 
import './Menu.css';

export default function Menu() {
    return (
        <nav className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="menu-item">
                    <Link to="/contact">Login</Link>
                </li>
            </ul>
        </nav>
    );
}