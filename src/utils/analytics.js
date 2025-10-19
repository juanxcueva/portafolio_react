// src/utils/analytics.js
import ReactGA from 'react-ga4';

// ✅ REEMPLAZA CON TU ID DE GOOGLE ANALYTICS
// Lo obtienes en: https://analytics.google.com/
const TRACKING_ID = 'G-8JKTHKQSL8'; 

export const initGA = () => {
  if (typeof window !== 'undefined' && TRACKING_ID !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(TRACKING_ID, {
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
    });
    console.log('✅ Google Analytics inicializado');
  }
};

export const logPageView = () => {
  if (typeof window !== 'undefined') {
    ReactGA.send({ 
      hitType: 'pageview', 
      page: window.location.pathname + window.location.search 
    });
  }
};

// Eventos personalizados
export const logEvent = (category, action, label = null, value = null) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: value,
  });
};

// 🎯 Evento: Click en proyecto
export const logProjectClick = (projectName, linkType) => {
  logEvent('Projects', `Click ${linkType}`, projectName);
  console.log(`📊 Evento registrado: Proyecto ${projectName} - ${linkType}`);
};

// 🎯 Evento: Click en red social
export const logSocialClick = (platform) => {
  logEvent('Social', 'Click Social Link', platform);
  console.log(`📊 Evento registrado: Red social ${platform}`);
};

// 🎯 Evento: Envío de formulario de contacto
export const logContactFormSubmit = () => {
  logEvent('Contact', 'Submit Form', 'Contact Form');
  console.log('📊 Evento registrado: Formulario enviado');
};

// 🎯 Evento: Click en navegación
export const logNavClick = (section) => {
  logEvent('Navigation', 'Click Nav Link', section);
  console.log(`📊 Evento registrado: Navegación a ${section}`);
};

// 🎯 Evento: Scroll to section
export const logScrollToSection = (section) => {
  logEvent('Engagement', 'Scroll to Section', section);
};

// 🎯 Evento: Tiempo en la página
export const logTimeOnPage = (seconds) => {
  logEvent('Engagement', 'Time on Page', null, seconds);
};

// 🎯 Evento: Click en skill card
export const logSkillHover = (skillName) => {
  logEvent('Skills', 'Hover Skill', skillName);
};

// 🎯 Evento: Descarga de CV (si tienes)
export const logCVDownload = () => {
  logEvent('Actions', 'Download CV', 'CV Download');
  console.log('📊 Evento registrado: CV descargado');
};

// 🎯 Obtener información del dispositivo
export const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  let deviceType = 'Desktop';
  
  if (/iPhone|iPad|iPod/.test(userAgent)) {
    deviceType = 'iOS';
  } else if (/Android/.test(userAgent)) {
    deviceType = 'Android';
  } else if (/Mobile/.test(userAgent)) {
    deviceType = 'Mobile';
  }
  
  return {
    deviceType,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    userAgent: userAgent,
  };
};

// Log de información del dispositivo al cargar
export const logDeviceInfo = () => {
  const deviceInfo = getDeviceInfo();
  logEvent('Device', 'Device Info', deviceInfo.deviceType, deviceInfo.screenWidth);
  console.log('📱 Dispositivo:', deviceInfo);
};