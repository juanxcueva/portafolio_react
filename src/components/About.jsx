import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import './About.css';

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
  const { t } = useLanguage();
  const education = t('about.education');
  const experience = t('about.experience');
  const aboutStats = t('about.stats');

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('about.tag')}</span>
          <h2 className="section-title">
            {t('about.titlePrefix')} <span className="gradient-text">{t('about.titleGradient')}</span>
          </h2>
          <p className="section-desc">
            {t('about.desc')}
          </p>
        </div>

        <div className="about-stats">
          {aboutStats.map((stat, index) => (
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
              <h3>{t('about.educationTitle')}</h3>
            </div>
            <div className="about-timeline">
              {education.map((item, index) => (
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
              <h3>{t('about.experienceTitle')}</h3>
            </div>
            <div className="about-timeline">
              {experience.map((item, index) => (
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
