// src/App.jsx - CON GUESTBOOK
import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { initGA, logPageView, logDeviceInfo } from './utils/analytics';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Guestbook from './components/Guestbook'; // ✅ NUEVO
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    initGA();
    logPageView();
    logDeviceInfo();

    const startTime = Date.now();
    
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      console.log(`⏱️ Tiempo en la página: ${timeSpent} segundos`);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="guestbook"> {/* ✅ NUEVO */}
        <Guestbook />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      
      <Analytics />
    </div>
  );
}

export default App;