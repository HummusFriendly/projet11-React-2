import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import copy from '../assets/Copy.png';
import nav from '../assets/nav.png';

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                <nav className="nav-links">
                <img src={logo}  className="logo" alt="Logo du projet"/>
                    <a href="#">Accueil</a>
                    <a href="#">Profil</a>
                    <a href="#">Réglage</a>
                    <a href="#">Communauté</a>
                </nav>
            </header>

            <div className="sidebar">
                <img src={nav} alt="Navigation" className="nav-image" />
                <img src={copy} alt="Copy" className="copy-image" />
            </div>
        </>
    );
};

export default Header;
