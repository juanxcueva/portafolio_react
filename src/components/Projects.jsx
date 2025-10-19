// src/components/Projects.jsx (MEJORADO CON DATOS DE EJEMPLO)
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import TresEnRayaImg from '../assets/TresEnRaya.png';
import EcuScanQRImg from '../assets/EcuScanQr.png';
import EntregasImg from '../assets/entregas.png';
import PokedexImg from '../assets/pokedex.png';



const projectsData = [
    {
        id: 1,
        title: 'EcuaTresEnRaya',
        description: 'Aplicación móvil de Tres en Raya.',
        image: TresEnRayaImg,
        technologies: ['Flutter', 'Dart'],
        githubLink: 'https://github.com/juanxcueva/ecua_tres_en_raya',
        liveLink: 'https://play.google.com/store/apps/details?id=com.juanxcueva.tictacecuador',
        status: 'Completado'
    },
    {
        id: 2,
        title: 'EcuScanQR',
        description: 'Aplicación móvil para escanear y generar códigos QR.',
        image: EcuScanQRImg,
        technologies: ['Flutter', 'Hive', 'Dart'],
        githubLink: 'https://github.com/juanxcueva/ecuscanqr',
        liveLink: 'https://play.google.com/store/apps/details?id=com.juanxcueva.ecuscanqr',
        status: 'Completado'
    },
    {
        id: 3,
        title: 'Entregas',
        description: 'Aplicación móvil para la gestión de entregas de gasolina.',
        image: EntregasImg,
        technologies: ['Flutter', 'Node.js', 'Express', 'PostgreSQL'],
        githubLink: 'https://github.com/juanxcueva/entregas',
        liveLink: null,
        status: 'Completado'
    },
    {
        id: 4,
        title: 'Pokedex App',
        description: 'Aplicación móvil para explorar y conocer información sobre los Pokémon.',
        image: PokedexImg,
        technologies: ['Flutter', 'PokéAPI', 'Dart'],
        githubLink: 'https://github.com/juanxcueva/pokedex_app',
        liveLink: null,
        status: 'Completado'
    },
];

const Projects = () => {
    const handleLinkClick = (url) => {
        if (url) {
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
                                    <button 
                                        className="project-btn btn-secondary"
                                        onClick={() => handleLinkClick(project.githubLink)}
                                    >
                                        <FaGithub size={18} />
                                        Código
                                    </button>
                                    
                                    {project.liveLink && (
                                        <button 
                                            className="project-btn btn-primary"
                                            onClick={() => handleLinkClick(project.liveLink)}
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