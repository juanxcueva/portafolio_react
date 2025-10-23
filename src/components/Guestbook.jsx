// src/components/Guestbook.jsx - LIBRO DE VISITAS
import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment, FaHeart, FaTrash } from 'react-icons/fa';
import './Guestbook.css';

const Guestbook = () => {
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  // Cargar mensajes al montar el componente
  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      // Obtener lista de claves de mensajes
      const result = await window.storage.list('message:', true);
      
      if (result && result.keys) {
        // Cargar todos los mensajes
        const messagesPromises = result.keys.map(async (key) => {
          const data = await window.storage.get(key, true);
          return data ? JSON.parse(data.value) : null;
        });
        
        const loadedMessages = await Promise.all(messagesPromises);
        const validMessages = loadedMessages.filter(m => m !== null);
        
        // Ordenar por fecha (más recientes primero)
        validMessages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        setMessages(validMessages);
      }
    } catch (error) {
      console.error('Error cargando mensajes:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Crear objeto de mensaje
      const newMessage = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
        likes: 0
      };

      // Guardar en storage compartido
      await window.storage.set(
        `message:${newMessage.id}`,
        JSON.stringify(newMessage),
        true // shared = true para que todos puedan ver
      );

      // Recargar mensajes
      await loadMessages();

      // Limpiar formulario
      setFormData({ name: '', email: '', message: '' });
      
      // Mostrar mensaje de éxito
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

    } catch (error) {
      console.error('Error enviando mensaje:', error);
      alert('Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = async (messageId) => {
    try {
      const messageToUpdate = messages.find(m => m.id === messageId);
      if (messageToUpdate) {
        const updatedMessage = {
          ...messageToUpdate,
          likes: (messageToUpdate.likes || 0) + 1
        };

        await window.storage.set(
          `message:${messageId}`,
          JSON.stringify(updatedMessage),
          true
        );

        await loadMessages();
      }
    } catch (error) {
      console.error('Error dando like:', error);
    }
  };

  const handleDelete = async (messageId) => {
    if (window.confirm('¿Estás seguro de eliminar este mensaje?')) {
      try {
        await window.storage.delete(`message:${messageId}`, true);
        await loadMessages();
      } catch (error) {
        console.error('Error eliminando mensaje:', error);
      }
    }
  };

  const toggleAdminMode = () => {
    if (!adminMode) {
      const password = prompt('Ingresa la contraseña de administrador:');
      if (password === 'Admin@9898') { // Cambia esto por tu contraseña
        setAdminMode(true);
      } else {
        alert('Contraseña incorrecta');
      }
    } else {
      setAdminMode(false);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Hace un momento';
    if (diffMins < 60) return `Hace ${diffMins} min${diffMins > 1 ? 's' : ''}`;
    if (diffHours < 24) return `Hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
    if (diffDays < 7) return `Hace ${diffDays} día${diffDays > 1 ? 's' : ''}`;
    
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section className="guestbook-section">
      <div className="container">
        <h2 className="guestbook-main-title">Libro de Visitas 📖</h2>
        <p className="guestbook-subtitle">
          Déjame un mensaje, comentario o saludo. ¡Me encantaría saber de ti!
        </p>

        {/* Formulario */}
        <div className="guestbook-form-card card">
          <form onSubmit={handleSubmit} className="guestbook-form">
            <div className="form-row">
              <div className="form-group">
                <label>
                  <FaUser className="form-icon" />
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  className="form-input"
                  required
                  maxLength={50}
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                <FaComment className="form-icon" />
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Escribe tu mensaje aquí... 💬"
                className="form-textarea"
                rows="4"
                required
                maxLength={500}
              />
              <span className="char-count">
                {formData.message.length}/500
              </span>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Mensaje
                  <FaPaperPlane style={{ marginLeft: '10px' }} />
                </>
              )}
            </button>

            {showSuccess && (
              <div className="success-message">
                ✅ ¡Mensaje enviado con éxito! Gracias por escribir.
              </div>
            )}
          </form>
        </div>

        {/* Mensajes */}
        <div className="messages-container">
          <div className="messages-header">
            <h3 className="messages-title">
              Mensajes ({messages.length})
            </h3>
            {/* Botón Admin (oculto para usuarios normales) */}
            <button 
              onClick={toggleAdminMode}
              className="admin-toggle"
              style={{ 
                opacity: 0.1,
                fontSize: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {adminMode ? '🔒' : '🔓'}
            </button>
          </div>

          {messages.length === 0 ? (
            <div className="no-messages">
              <p>Aún no hay mensajes. ¡Sé el primero en escribir! ✨</p>
            </div>
          ) : (
            <div className="messages-grid">
              {messages.map((msg) => (
                <div key={msg.id} className="message-card">
                  <div className="message-header">
                    <div className="message-author">
                      <div className="author-avatar">
                        {msg.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="author-name">{msg.name}</h4>
                        <span className="message-date">
                          {formatDate(msg.timestamp)}
                        </span>
                      </div>
                    </div>
                    {adminMode && (
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="delete-button"
                        title="Eliminar mensaje"
                      >
                        <FaTrash size={14} />
                      </button>
                    )}
                  </div>
                  
                  <p className="message-text">{msg.message}</p>
                  
                  <div className="message-footer">
                    <button
                      onClick={() => handleLike(msg.id)}
                      className="like-button"
                    >
                      <FaHeart />
                      <span>{msg.likes || 0}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;