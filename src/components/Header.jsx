// src/components/Header.jsx - CON ANALYTICS
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; 
import perfilImg from '../assets/perfil.JPG'; // ✅ Importa la imagen
import { logSocialClick } from '../utils/analytics'; // ✅ Analytics
import './Header.css';

const Header = () => {
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

  // ✅ Función para manejar clicks en redes sociales
  const handleSocialClick = (platform, url) => {
    logSocialClick(platform); // 📊 Registrar en Analytics
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="header">
      <div className="left-section">
        <div className="profile">
          <img src={perfilImg} alt="Juan Cueva" className="header-img" />
          <h1>Juan Cueva</h1>
          <p className="title">
            Desarrollador FrontEnd | React | Flutter | Backend | Node.js | Spring
          </p>
          <p className="description">
            Apasionado por el desarrollo de software, siempre aprendiendo nuevas tecnologías. ¡Listo para nuevos desafíos!
          </p>
          <div className="social-links">
            {/* ✅ Clicks rastreados */}
            <button
              onClick={() => handleSocialClick('LinkedIn', 'https://www.linkedin.com/in/juanxcueva/')}
              aria-label="LinkedIn"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <FaLinkedin size={24} />
            </button>
            <button
              onClick={() => handleSocialClick('GitHub', 'https://github.com/juanxcueva')}
              aria-label="GitHub"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <FaGithub size={24} />
            </button>
            <button
              onClick={() => handleSocialClick('Instagram', 'https://www.instagram.com/juanxcueva/')}
              aria-label="Instagram"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <FaInstagram size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="code-card">
          <div className="window-buttons">
            <div className="dot red"></div>
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