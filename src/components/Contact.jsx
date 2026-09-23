import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { logEvent } from '../utils/analytics';
import { useLanguage } from '../i18n/useLanguage';
import './Contact.css';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const contactInfo = [
    { icon: FaMapMarkerAlt, label: t('contact.location'), value: 'Cuenca, Ecuador' },
    { icon: FaPhone, label: t('contact.phone'), value: '+593 987 392 542', href: 'tel:+593987392542' },
    { icon: FaEnvelope, label: t('contact.email'), value: 'juanxcueva1@gmail.com', href: 'mailto:juanxcueva1@gmail.com' },
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logEvent('Contact', 'form_submit', formData.email);
    const mailtoLink = `mailto:juanxcueva1@gmail.com?subject=${encodeURIComponent(t('contact.mailSubject') + formData.name)}&body=${encodeURIComponent(formData.message + '\n\n' + (language === 'es' ? 'De: ' : 'From: ') + formData.name + '\nEmail: ' + formData.email)}`;
    window.open(mailtoLink, '_blank');
    setStatus('sent');
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('contact.tag')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info-card">
            <h3 className="contact-info-heading">{t('contact.heading')}</h3>
            <p className="contact-info-text">
              {t('contact.text')}
            </p>
            <div className="contact-info-list">
              {contactInfo.map((item, i) => (
                <div className="contact-info-item" key={i}>
                  <div className="contact-info-icon">
                    <item.icon />
                  </div>
                  <div>
                    <span className="contact-info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value link">{item.value}</a>
                    ) : (
                      <span className="contact-info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.name')}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.emailPlaceholder')}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t('contact.message')}
                rows="5"
                className="form-input form-textarea"
              />
            </div>
            <button type="submit" className="form-submit">
              <FaPaperPlane />
              {status === 'sent' ? t('contact.sent') : t('contact.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
