// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Para el menú móvil
import Logo from '../assets/logo_juan.png'; // 🚨 TU LOGO IMPORTADO 🚨

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Lista de enlaces que coinciden con tus secciones
  const navLinks = [
    { title: 'Inicio', href: '#header' },
    { title: 'Skill', href: '#skill-section' },
    { title: 'Portafolio', href: '#projects-section' },
    { title: 'Acerca de Mí', href: '#about-section' },
    { title: 'Contacto', href: '#contact-section' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* 🚨 ESTRUCTURA DEL LOGO 🚨 */}
        <a href="#header" className="navbar-logo">
          <img src={Logo} alt="Juan Cueva Developer Logo" className="logo-image" />
          <span className="logo-text-complementary">juanxcueva</span>
        </a>
        
        {/* Botón de Menú para Móviles */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Enlaces de Navegación */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <a 
                href={link.href} 
                className="nav-link"
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en móvil
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;