import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../i18n/useLanguage';
import './Footer.css';

const socials = [
  { icon: FaGithub, href: 'https://github.com/juanxcueva', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/juanxcueva/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com/juanxcueva/', label: 'Instagram' },
];

const Footer = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">JC.</span>
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>
          <div className="footer-socials">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Juan Cueva. {t('footer.rights')}
          </p>
        </div>
      </div>
      <button className="scroll-to-top" onClick={scrollToTop} aria-label={t('footer.scrollTop')}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
