import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import Education from './components/Education.jsx'
import Certificates from './components/Certificates.jsx'
import AboutSection from './components/AboutSection.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once:false,
      offset:100,
    })
  },[])

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='bg-gray-50 dark:bg-[#111827] text-gray-900 dark:text-white min-h-screen transition-colors duration-300'>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <Education />
      <Certificates />
      <AboutSection />
      <Experience />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
