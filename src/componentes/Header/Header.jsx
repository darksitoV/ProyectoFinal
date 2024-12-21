import React from 'react';
import Menu from './Menu';
import './Header.css';
import './Container.css'; 

export default function Header() {
    return (
        <div className='container'>
            <header className='header'>
                <img src="src/componentes/Header/icon_NavMenu.webp" alt="Logo" />
                <Menu />
            </header>
        </div>
    );
}