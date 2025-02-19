import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header" role="banner">
            <div className="branding">
                <h1 className="logo" aria-label="Website Logo">My Website</h1>
            </div>
            <nav className="navigation" role="navigation" aria-label="Main Navigation">
                <ul>
                    <li><a href="#home" aria-label="Home">Home</a></li>
                    <li><a href="#about" aria-label="About Us">About Us</a></li>
                    <li><a href="#services" aria-label="Our Services">Services</a></li>
                    <li><a href="#contact" aria-label="Contact Us">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;