import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { translations } from './translations';
import { LanguageContext } from './languageContext';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-language');
      if (saved === 'es' || saved === 'en') return saved;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.setAttribute('lang', language);
    const metaTitle = document.querySelector('meta[name="description"]');
    if (metaTitle) {
      metaTitle.setAttribute(
        'content',
        language === 'es'
          ? 'Juan Cueva — Desarrollador Fullstack & Mobile. Proyectos, habilidades y experiencia.'
          : 'Juan Cueva — Fullstack & Mobile Developer. Projects, skills and experience.'
      );
    }
    document.title =
      language === 'es'
        ? 'Juan Cueva — Desarrollador Fullstack'
        : 'Juan Cueva — Fullstack Developer';
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  const setSpecificLanguage = useCallback((lang) => {
    if (lang === 'es' || lang === 'en') setLanguage(lang);
  }, []);

  const t = useCallback(
    (key) => {
      const value = translations[language];
      return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined), value);
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, toggleLanguage, setLanguage: setSpecificLanguage, t }),
    [language, toggleLanguage, setSpecificLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};