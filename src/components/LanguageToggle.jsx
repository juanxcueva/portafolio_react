import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../i18n/useLanguage';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
      title={language === 'en' ? 'Español' : 'English'}
    >
      <div className={`language-track ${language}`}>
        <FaGlobe className="language-globe" />
        <span className="language-slider" />
        <span className={`language-option ${language === 'es' ? 'active' : ''}`}>ES</span>
        <span className={`language-option ${language === 'en' ? 'active' : ''}`}>EN</span>
      </div>
    </button>
  );
};

export default LanguageToggle;