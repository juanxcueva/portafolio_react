// src/components/About.jsx
import React from 'react';
import './About.css';

// 🚨 DATOS DE EJEMPLO (Por favor, reemplázalos con tus datos reales)
const educationData = [
  {
    institution: 'UCUENCA - Universidad de Cuenca',
    degree: 'Ingeniería en Sistemas',
    period: '2016 - 2023',
  },
  {
    institution: 'Unidad Educativa Borja',
    degree: 'Bachiller en Ciencias',
    period: '2011 - 2016',
  },
];

const experienceData = [
  {
    company: 'GAD Municipal de Chunchi',
    role: 'Network and Infrastructure Support Technician and System Administrator',
    period: '2025 - Actualidad',
  },
  {
    company: 'SystecnaSoft',
    role: 'Fullstack Developer Mobile',
    period: '2023 - 2025',
  },
  {
    company: 'ICreativa',
    role: 'Mobile Developer',
    period: '2021-2022',
  },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-main-title">Educación & Experiencia</h2>
        
        <div className="content-grid">
          {/* Columna 1: Educación */}
          <div className="card education-card">
            <h3 className="card-title">Educación 🎓</h3>
            <div className="timeline">
              {educationData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <p className="timeline-institution">{item.institution}</p>
                  <p className="timeline-degree">{item.degree}</p>
                  <p className="timeline-period">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna 2: Experiencia */}
          <div className="card experience-card">
            <h3 className="card-title">Experiencia 💼</h3>
            <div className="timeline">
              {experienceData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <p className="timeline-institution">{item.company}</p>
                  <p className="timeline-role">{item.role}</p>
                  <p className="timeline-period">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;