import React, { useState, useRef, useEffect } from 'react';
import { FaGooglePlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { logEvent } from '../utils/analytics';
import projectsData from '../data/projects.json';
import './Projects.css';

/* ---- dynamic image imports from asset folders ---- */
const screenshotModules = import.meta.glob('../assets/{sillonpos,ecuatresenraya,flappy593,scanqr}/*.jpeg', { eager: true });

const getScreenshot = (folder, filename) => {
  const key = `../assets/${folder}/${filename}`;
  return screenshotModules[key]?.default || '';
};

const folderMap = {
  'SillónPOS': 'sillonpos',
  'EcuaTresEnRaya': 'ecuatresenraya',
  'Flappy 593': 'flappy593',
  'EcuScanQR': 'scanqr',
};

/* ---- Phone Carousel Component ---- */
const PhoneCarousel = ({ screenshots, folder, color }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStart = useRef(0);
  const total = screenshots.length;

  const go = (dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + dir + total) % total);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1);
  };

  return (
    <div className="phone-carousel">
      <div className="phone-carousel-track">
        {screenshots.map((file, i) => {
          const offset = i - current;
          const isActive = offset === 0;
          const isNear = Math.abs(offset) === 1;
          const style = {
            transform: `translateX(${offset * 85}%) scale(${isActive ? 1 : 0.78}) rotateY(${offset * -12}deg)`,
            opacity: Math.abs(offset) > 2 ? 0 : isActive ? 1 : isNear ? 0.5 : 0.2,
            zIndex: 10 - Math.abs(offset),
            filter: isActive ? 'none' : 'brightness(0.5)',
          };
          return (
            <div
              className={`phone-mockup ${isActive ? 'active' : ''}`}
              key={i}
              style={style}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="phone-frame">
                <div className="phone-notch" />
                <img
                  src={getScreenshot(folder, file)}
                  alt={`Screenshot ${i + 1}`}
                  className="phone-screen"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="carousel-controls">
        <button className="carousel-btn" onClick={() => go(-1)} aria-label="Anterior">
          <FaChevronLeft />
        </button>
        <div className="carousel-dots">
          {screenshots.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? 'active' : ''}`}
              onClick={() => { if (!isAnimating) { setIsAnimating(true); setCurrent(i); setTimeout(() => setIsAnimating(false), 400); } }}
              style={i === current ? { background: color } : {}}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel-btn" onClick={() => go(1)} aria-label="Siguiente">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

/* ---- Feature tag ---- */
const FeatureTag = ({ text }) => (
  <span className="feature-tag">{text}</span>
);

/* ---- Main Projects Component ---- */
const Projects = () => {
  const handleStoreClick = (project) => {
    logEvent('Projects', 'store_click', project.title);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portafolio</span>
          <h2 className="section-title">Mis <span className="gradient-text">Proyectos</span></h2>
          <p className="section-desc">
            Aplicaciones publicadas en Google Play Store, diseñadas con pasión y enfoque en la experiencia del usuario.
          </p>
        </div>

        <div className="projects-showcase">
          {projectsData.map((project, index) => (
            <div
              className={`project-showcase-card ${index % 2 !== 0 ? 'reversed' : ''}`}
              key={project.id}
            >
              <div className="showcase-visual">
                <div
                  className="showcase-glow"
                  style={{ background: `radial-gradient(ellipse at center, ${project.color}20 0%, transparent 70%)` }}
                />
                <PhoneCarousel
                  screenshots={project.screenshots}
                  folder={folderMap[project.title]}
                  color={project.color}
                />
              </div>

              <div className="showcase-info">
                <div className="showcase-badges">
                  <span className="showcase-platform">
                    <FaGooglePlay /> Google Play
                  </span>
                  <span className="showcase-status" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}>
                    {project.status}
                  </span>
                </div>

                <h3 className="showcase-title">{project.title}</h3>
                <p className="showcase-subtitle">{project.subtitle}</p>
                <p className="showcase-description">{project.description}</p>

                <div className="showcase-features">
                  {project.features.map((feat, i) => (
                    <FeatureTag key={i} text={feat} />
                  ))}
                </div>

                <div className="showcase-techs">
                  {project.technologies.map((tech, i) => (
                    <span className="showcase-tech" key={i}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.storeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-store-btn"
                  onClick={() => handleStoreClick(project)}
                  style={{ background: project.color }}
                >
                  <FaGooglePlay />
                  <div>
                    <span className="store-btn-small">Disponible en</span>
                    <span className="store-btn-big">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
