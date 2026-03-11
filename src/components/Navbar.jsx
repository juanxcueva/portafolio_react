import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('header');

    useEffect(() => {
        const sections = ['header', 'about', 'skills', 'projects', 'contact'];
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const scrollPosition = window.scrollY + 100;
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.offsetTop - navbarHeight;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'header', label: 'Inicio' },
        { id: 'about', label: 'Sobre mí' },
        { id: 'skills', label: 'Habilidades' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'contact', label: 'Contacto' },
    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
                <div className="nav-inner">
                    <a href="#header" className="nav-logo" onClick={(e) => handleClick(e, 'header')}>
                        JC<span className="logo-dot">.</span>
                    </a>
                    <div className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`nav-link ${activeSection === item.id ? 'nav-active' : ''}`}
                                onClick={(e) => handleClick(e, item.id)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="nav-theme-mobile">
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="nav-actions">
                        <div className="nav-theme-desktop">
                            <ThemeToggle />
                        </div>
                        <button
                            className={`nav-menu-btn ${isOpen ? 'active' : ''}`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
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
