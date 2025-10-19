// src/components/Navbar.jsx - CON ANALYTICS
import React, { useState, useEffect } from 'react';
import { logNavClick } from '../utils/analytics'; // ✅ Analytics
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false);
        
        // ✅ Registrar click en navegación
        logNavClick(targetId);
        
        const element = document.getElementById(targetId);
        if (element) {
            const navbarHeight = 70;
            const elementPosition = element.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <div className="nav-logo" onClick={(e) => handleClick(e, 'header')}>
                        &lt;JC /&gt;
                    </div>

                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <li>
                            <a 
                                href="#header" 
                                onClick={(e) => handleClick(e, 'header')}
                                className={activeSection === 'header' ? 'active' : ''}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                onClick={(e) => handleClick(e, 'about')}
                                className={activeSection === 'about' ? 'active' : ''}
                            >
                                Sobre mí
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#skills" 
                                onClick={(e) => handleClick(e, 'skills')}
                                className={activeSection === 'skills' ? 'active' : ''}
                            >
                                Habilidades
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                onClick={(e) => handleClick(e, 'projects')}
                                className={activeSection === 'projects' ? 'active' : ''}
                            >
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                onClick={(e) => handleClick(e, 'contact')}
                                className={activeSection === 'contact' ? 'active' : ''}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>

                    <button 
                        className={`nav-hamburger ${isOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </nav>

            <div 
                className={`nav-overlay ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
            />
        </>
    );
};

export default Navbar;