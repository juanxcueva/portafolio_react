import './styles/animations.css';
import './styles/accessibility.css';
import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { initGA, logPageView, logDeviceInfo } from './utils/analytics';
import { LanguageProvider } from './i18n/LanguageProvider';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
      console.log('Time on page: ' + timeSpent + 's');
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </LanguageProvider>
  );
}

export default App;
