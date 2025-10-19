// src/components/Projects.jsx - CON ANALYTICS
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { logProjectClick } from '../utils/analytics'; // ✅ Analytics
import './Projects.css';

// Importa tus imágenes
import pokedexImg from '../assets/pokedex.png';
import tresEnRayaImg from '../assets/TresEnRaya.png';
import entregasImg from '../assets/entregas.png';
import ecuScanImg from '../assets/EcuScanQr.png';

const projectsData = [
  {
    id: 1,
    title: 'Pokedex App',
    description: 'Aplicación de Pokédex con información detallada de todos los Pokémon, búsqueda avanzada y favoritos.',
    image: pokedexImg,
    technologies: ['React', 'PokeAPI', 'CSS3'],
    githubLink: 'https://github.com/juanxcueva/pokedex',
    liveLink: 'https://pokedex-juanxcueva.vercel.app',
    status: 'Completado'
  },
  {
    id: 2,
    title: 'EcuScan QR',
    description: 'Aplicación móvil para escanear códigos QR con historial y compartir funcionalidad.',
    image: ecuScanImg,
    technologies: ['Flutter', 'Dart', 'QR Scanner'],
    githubLink: 'https://github.com/juanxcueva/ecuscan',
    liveLink: null,
    status: 'Completado'
  },
  {
    id: 3,
    title: 'Tres en Raya',
    description: 'Juego clásico de Tres en Raya con modo multijugador local y contador de victorias.',
    image: tresEnRayaImg,
    technologies: ['React', 'JavaScript', 'CSS3'],
    githubLink: 'https://github.com/juanxcueva/tres-en-raya',
    liveLink: 'https://tres-en-raya-juanxcueva.vercel.app',
    status: 'Completado'
  },
  {
    id: 4,
    title: 'Sistema de Entregas',
    description: 'Sistema de gestión de entregas con tracking en tiempo real y notificaciones.',
    image: entregasImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubLink: 'https://github.com/juanxcueva/entregas',
    liveLink: null,
    status: 'En Desarrollo'
  }
];

const Projects = () => {
  // ✅ Función para manejar clicks en proyectos
  const handleProjectClick = (projectName, linkType, url) => {
    if (url) {
      logProjectClick(projectName, linkType); // 📊 Registrar en Analytics
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="projects-main-title">Proyectos Destacados</h2>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                {project.status && (
                  <div className="project-status">
                    {project.status}
                  </div>
                )}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {/* ✅ Click en GitHub rastreado */}
                  <button 
                    className="project-btn btn-secondary"
                    onClick={() => handleProjectClick(project.title, 'GitHub', project.githubLink)}
                  >
                    <FaGithub size={18} />
                    Código
                  </button>
                  
                  {/* ✅ Click en Demo rastreado */}
                  {project.liveLink && (
                    <button 
                      className="project-btn btn-primary"
                      onClick={() => handleProjectClick(project.title, 'Live Demo', project.liveLink)}
                    >
                      <FaExternalLinkAlt size={16} />
                      Ver Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;