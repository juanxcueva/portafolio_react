// src/components/Contact.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-main-title">Ponte en contacto, conmigo.</h2>
        
        <div className="contact-grid">
          {/* Columna 1: Información de Contacto */}
          <div className="contact-info-card card">
            
            <div className="info-item">
              <FaMapMarkerAlt size={24} className="info-icon" />
              <p className="info-label">Ubicación actual:</p>
              <p className="info-detail">Cuenca, Ecuador.</p>
            </div>

            <div className="info-separator"></div>

            <div className="info-item">
              <FaPhone size={24} className="info-icon" />
              <p className="info-label">Número de contacto:</p>
              <p className="info-detail">+593987392542</p>
            </div>

            <div className="info-separator"></div>
            
            <div className="info-item">
              <FaEnvelope size={24} className="info-icon" />
              <p className="info-label">Correo:</p>
              <p className="info-detail">juanxcueva1@gmail.com</p>
            </div>

          </div>

          {/* Columna 2: Formulario de Contacto */}
          <div className="contact-form-card card">
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Nombre" className="form-input" required />
                <input type="email" placeholder="Correo" className="form-input" required />
              </div>
              
              <input type="text" placeholder="Asunto:" className="form-input" required />

              <textarea 
                placeholder="¿En qué podemos ayudarte? ¡estoy ansioso de escuchar tus ideas!" 
                className="form-textarea" 
                rows="5" 
                required
              ></textarea>

              <button type="submit" className="submit-button">
                Enviar mensaje <FaPaperPlane size={16} style={{ marginLeft: '10px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;