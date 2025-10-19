// src/components/Header.jsx (Opción 1: Con Botones de Ventana)
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; 
import './Header.css';

const Header = () => {
  // El código se define como JSX para aplicar el resaltado de sintaxis
  const codeBlock = (
    <pre className="static-code">
      <span className="keyword">const</span> <span className="variable">developer</span> = <span className="brace">{'{'}</span>
      {"\n"}  <span className="property">name</span>: <span className="string">'Juan Cueva'</span>,
      {"\n"}  <span className="property">role</span>: <span className="string">'Desarrollador Fullstack Dev 🚀'</span>,
      {"\n"}  <span className="property">level</span>: <span className="number">26</span>,
      {"\n"}  <span className="property">experienceYears</span>: <span className="number">4</span>,
      {"\n"}  <span className="property">techStack</span>: <span className="array-bracket">['React', 'Flutter', 'Node.js', 'Spring']</span>,
      {"\n"}  <span className="property">status</span>: <span className="string">'Grinding XP and open to new adventures 🎮'</span>,
      {"\n"}<span className="brace">{'}'}</span>;
      {"\n\n"}
      <span className="variable">developer</span>.<span className="function">sayHello</span><span className="parenthesis">()</span>; <span className="comment">// returns "Hello, I'm Juan!"</span>
    </pre>
  );

  return (
    <header className="header">
      <div className="left-section">
        <div className="profile">
          <img src="src/assets/perfil.JPG" alt="Juan Cueva" className="header-img" />
          <h1>Juan Cueva</h1>
          <p className="title">
            Desarrollador FrontEnd | React | Flutter | Backend | Node.js | Spring
          </p>
          <p className="description">
            Apasionado por el desarrollo de software, siempre aprendiendo nuevas tecnologías. ¡Listo para nuevos desafíos!
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/juanxcueva/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/juanxcueva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.instagram.com/juanxcueva/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="code-card">
          <div className="window-buttons">
            <div className="dot"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          {codeBlock}
        </div>
      </div>
    </header>
  );
};

export default Header;