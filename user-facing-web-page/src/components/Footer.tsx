import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <nav>
                    <ul>
                        <li><a href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service" aria-label="Terms of Service">Terms of Service</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;