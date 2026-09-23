import React, { useState, useEffect, useMemo } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTypewriter } from '../hooks/useTypewriter';
import { useLanguage } from '../i18n/useLanguage';
import './Header.css';

const Header = () => {
  const { t, language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const roles = t('header.roles');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        duration: `${4 + Math.random() * 6}s`,
        delay: `${Math.random() * 5}s`,
        size: `${1.5 + Math.random() * 2.5}px`,
      })),
    []
  );

  return (
    <header className="hero" id="header">
      <div className="hero-bg">
        <div
          className="hero-gradient-1"
          style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
        />
        <div
          className="hero-gradient-2"
          style={{ transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)` }}
        />
        <div className="hero-grid-pattern" />
        <div className="hero-vignette" />
      </div>

      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              '--x': p.x,
              '--y': p.y,
              '--duration': p.duration,
              '--delay': p.delay,
              '--size': p.size,
            }}
          />
        ))}
      </div>

      <div
        className="hero-content"
        style={{
          transform: `translateY(${scrollY * 0.35}px)`,
          opacity: Math.max(0, 1 - scrollY / 700),
        }}
      >
        <span className="hero-badge">{t('header.available')}</span>

        <h1 className="hero-name">
          <span className="hero-name-line hero-name-fade-1">Juan</span>
          <span className="hero-name-line hero-name-gradient hero-name-fade-2">Cueva.</span>
        </h1>

        <div className="hero-role">
          <TypewriterRoles key={language} roles={roles} />
        </div>

        <p className="hero-desc">
          {t('header.descTop')}
          <br />
          <strong>{t('header.descStrong')}</strong>
        </p>

        <div className="hero-cta">
          <a href="#projects" className="hero-btn-primary">
            {t('header.cta')}
            <span className="btn-arrow">→</span>
          </a>
          <a
            href="https://github.com/juanxcueva"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juanxcueva/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div
        className="hero-scroll"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
      >
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">SCROLL</span>
      </div>
    </header>
  );
};

const TypewriterRoles = ({ roles }) => {
  const { displayText } = useTypewriter(roles, 80, 40, 2500);
  return (
    <>
      <span className="hero-role-text">{displayText}</span>
      <span className="hero-cursor">|</span>
    </>
  );
};

export default Header;
