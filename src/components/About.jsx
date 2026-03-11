import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const educationData = [
  { institution: 'UCUENCA - Universidad de Cuenca', degree: 'Ingeniería en Sistemas', period: '2016 - 2023' },
  { institution: 'Unidad Educativa Borja', degree: 'Bachiller en Ciencias', period: '2011 - 2016' },
];

const experienceData = [
  { company: 'GAD Municipal de Chunchi', role: 'Network & Infrastructure Support / System Administrator', period: '2025 - Actualidad' },
  { company: 'SystecnaSoft', role: 'Fullstack Developer Mobile', period: '2023 - 2025' },
  { company: 'ICreativa', role: 'Mobile Developer', period: '2021 - 2022' },
];

const stats = [
  { number: '3+', label: 'Años de experiencia' },
  { number: '10+', label: 'Proyectos completados' },
  { number: '15+', label: 'Tecnologías' },
];

const AnimatedNumber = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const num = parseInt(target);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = Math.ceil(num / 30);
          const timer = setInterval(() => {
            start += increment;
            if (start >= num) { setCount(num); clearInterval(timer); }
            else { setCount(start); }
          }, 40);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  return <span ref={ref}>{count}+</span>;
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SOBRE MÍ</span>
          <h2 className="section-title">
            Educación & <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="section-desc">
            Mi trayectoria en tecnología, desde las aulas hasta proyectos reales.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <span className="stat-number">
                <AnimatedNumber target={stat.number} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about-grid">
          <div className="about-card card">
            <div className="about-card-header">
              <span className="about-card-icon">{String.fromCodePoint(0x1F393)}</span>
              <h3>Educación</h3>
            </div>
            <div className="about-timeline">
              {educationData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4>{item.institution}</h4>
                    <p className="timeline-role">{item.degree}</p>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card card">
            <div className="about-card-header">
              <span className="about-card-icon">{String.fromCodePoint(0x1F4BC)}</span>
              <h3>Experiencia</h3>
            </div>
            <div className="about-timeline">
              {experienceData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4>{item.company}</h4>
                    <p className="timeline-role">{item.role}</p>
                    <span className="timeline-period">{item.period}</span>
                  </div>
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
