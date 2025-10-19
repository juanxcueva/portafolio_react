// src/components/Footer.jsx (MEJORADO CON SCROLL TO TOP)
import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaHeart, FaCode, FaLinkedin, FaGithub, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-social">
                        <a 
                            href="https://www.linkedin.com/in/juanxcueva/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a 
                            href="https://github.com/juanxcueva" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a 
                            href="https://www.instagram.com/juanxcueva/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Instagram"
                        >
                            <FaInstagram size={24} />
                        </a>
                    </div>

                    <p className="footer-text">
                        Hecho con <FaCode className="footer-icon" /> y <FaHeart className="footer-icon heart-icon" />
                    </p>

                    <div className="footer-divider"></div>

                    <p className="footer-copyright">
                        Copyright © {currentYear} <span className="footer-name">Juan Cueva</span>. All Rights Reserved.
                    </p>
                </div>
            </footer>

            {/* Botón de Scroll to Top */}
            <button 
                className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </button>
        </>
    );
};

export default Footer;