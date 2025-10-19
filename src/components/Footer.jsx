// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    Hecho con <FaCode className="footer-icon" /> y <FaHeart className="footer-icon heart-icon" />
                </p>
                <p className="footer-copyright">
                    Copyright © {currentYear}. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;