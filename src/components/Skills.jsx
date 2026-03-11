import React from 'react';
import skillsData from '../data/skills.json';
import './Skills.css';

const Skills = () => {
  const allSkills = skillsData.categories.flatMap(cat => cat.skills);
  const mid = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, mid);
  const row2 = allSkills.slice(mid);

  const MarqueeRow = ({ skills, direction = 'left' }) => {
    const doubled = [...skills, ...skills];
    return (
      <div className={`marquee-track marquee-${direction}`}>
        <div className="marquee-content">
          {doubled.map((skill, i) => (
            <div className="skill-chip" key={i}>
              <img src={skill.iconUrl} alt={skill.name} className="skill-icon" loading="lazy" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-tag">Habilidades</span>
        <h2 className="section-title">Tecnologías que Domino</h2>
      </div>
      <div className="marquee-container">
        <MarqueeRow skills={row1} direction="left" />
        <MarqueeRow skills={row2} direction="right" />
      </div>
    </section>
  );
};

export default Skills;
