// src/components/Skills.jsx (ACTUALIZADO)
import React from 'react';
import './Skills.css';

// 💡 Datos de tus habilidades. HECHOS: Swift, Winbox, Java, C#, JS añadidos. Laravel quitado.
const skillsData = [
  // Diseño y FrontEnd
  { name: 'Figma', iconUrl: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png" },
  { name: 'HTML 5', iconUrl: "https://img.icons8.com/?size=100&id=12239&format=png" },
  { name: 'JavaScript', iconUrl: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
  { name: 'React', iconUrl: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" },

  // Mobile/Multiplataforma
  { name: 'Flutter', iconUrl: "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png" },
  { name: 'Android', iconUrl: "https://img.icons8.com/?size=100&id=EgOU93v1DHjU&format=png" },
  { name: 'Swift', iconUrl: "https://img.icons8.com/?size=100&id=24465&format=png&color=000000" }, // 🚨 NUEVO
  { name: 'Xcode', iconUrl: "https://img.icons8.com/?size=100&id=63788&format=png" },
  { name: 'Playstore', iconUrl: "https://img.icons8.com/?size=100&id=22988&format=png" },
  { name: 'AppStore', iconUrl: "https://img.icons8.com/?size=100&id=fKXXelWgP1B6&format=png" },

  // Backend y Servidores
  { name: 'NodeJS', iconUrl: "https://img.icons8.com/?size=100&id=54087&format=png" },
  { name: 'Java', iconUrl: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000" }, // 🚨 NUEVO
  { name: 'C#', iconUrl: "https://img.icons8.com/?size=100&id=55251&format=png&color=000000" }, // 🚨 NUEVO
  { name: 'Python', iconUrl: "https://img.icons8.com/?size=100&id=13441&format=png" },
  { name: 'API REST', iconUrl: "https://img.icons8.com/?size=100&id=21896&format=png" },
  { name: 'Linux', iconUrl: "https://img.icons8.com/?size=100&id=17842&format=png" },
  { name: 'Winbox', iconUrl: "https://img.icons8.com/?size=100&id=vtLGHdmfoSt8&format=png&color=000000" }, // 🚨 NUEVO

  // Bases de Datos y Herramientas
  { name: 'MySQL', iconUrl: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png" },
  { name: 'MongoDB', iconUrl: "https://img.icons8.com/?size=100&id=74402&format=png" },
  { name: 'Firebase', iconUrl: "https://img.icons8.com/?size=100&id=62452&format=png" },
  { name: 'Github', iconUrl: "https://img.icons8.com/?size=100&id=63777&format=png" },
  { name: 'JSON', iconUrl: "https://img.icons8.com/?size=100&id=114474&format=png" },
  { name: 'Google Maps', iconUrl: "https://img.icons8.com/?size=100&id=32215&format=png" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skill-section"> {/* Añadido ID para el Navbar */}
      <div className="skills-container">
        <div className="skills-header-text">
          <h2 className="skills-title">
            Estas son algunas de mis <span className="highlight">skills</span>.
          </h2>
          <p className="skills-subtitle">
            A lo largo del tiempo he aprendido que nunca dejas de aprender. 👨‍💻
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img 
                src={skill.iconUrl} 
                alt={skill.name} 
                className="skill-icon"
              />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;