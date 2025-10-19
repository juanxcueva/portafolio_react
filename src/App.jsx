// src/App.jsx
import React from 'react';
import './App.css'; 

// 🚨 Importaciones de los componentes de navegación y cierre
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importaciones de las secciones principales
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact'; 

function App() {
  return (
    <div className="App">
      {/* 1. CABECERA: Siempre va primero y se mantiene fijo/sticky */}
      <Navbar /> 
      
      {/* 2. SECCIONES PRINCIPALES (Asigna IDs para el Navbar) */}
      <div id="header">
        <Header />
      </div>

      {/* Asegúrate de que tus componentes Skills, Projects, About y Contact tengan su ID en el archivo JSX o un div contenedor aquí */}
      <div id="skill-section">
        <Skills />
      </div>

      <div id="projects-section">
        <Projects />
      </div>
      
      <div id="about-section">
        <About />
      </div>

      <div id="contact-section">
        <Contact />
      </div>
      
      {/* 3. PIE DE PÁGINA: Siempre va al final */}
      <Footer /> 
    </div>
  );
}

export default App;