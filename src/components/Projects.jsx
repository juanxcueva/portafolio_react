// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

// 🚨 DEFINICIÓN DE TUS PROYECTOS
const projectData = [
  {
    title: 'NuxUI',
    description: 'Una aplicación con ejemplos de UX/UI modernas y minimalistas.',
    image: 'src/assets/nuxui-preview.png', // Reemplaza con la ruta de tu imagen de NuxUI
    link: '#',
    tags: ['Flutter', 'UI/UX'],
  },
  {
    title: 'ScanNcreateQR',
    description: 'Aplicación creada para leer, crear y visualizar QR\'s de cualquier tipo.',
    image: 'src/assets/scanncreateqr-preview.png', // Reemplaza con la ruta
    link: '#',
    tags: ['Flutter', 'Mobile', 'QR'],
  },
  {
    title: 'Tic Tac Toe - Online',
    description: '3 modos de juego: Solo vs Bot, con un amigo, y Online. Ejemplos de UX/UI modernas y minimalistas.',
    image: 'src/assets/tictactoe-preview.png', // Reemplaza con la ruta
    link: '#',
    tags: ['Flutter', 'Online', 'Firebase'],
  },
  {
    title: 'Vault Free',
    description: 'Una aplicación de seguridad y gestión de contraseñas con un diseño moderno.',
    image: 'src/assets/vaultfree-preview.png', // Reemplaza con la ruta
    link: '#',
    tags: ['Flutter', 'Security', 'LocalDB'],
  },
  {
    title: 'Material Color Palette',
    description: 'Herramienta para desarrolladores que muestra paletas de colores basadas en Material Design.',
    image: 'src/assets/materialcolor-preview.png', // Reemplaza con la ruta
    link: '#',
    tags: ['React', 'Web', 'UI'],
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Algunos de mis Proyectos</h2>
        <p className="section-subtitle">
          Estos son algunos de mis proyectos meticulosamente elaborados con amor y dedicación.
        </p>

        {/* 🚨 CUADRÍCULA DE PROYECTOS 🚨 */}
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card" 
              key={index}
            >
              {/* Contenedor de la Imagen (para control de tamaño) */}
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={`Previsualización de ${project.title}`} 
                  className="project-image"
                />
              </div>

              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;