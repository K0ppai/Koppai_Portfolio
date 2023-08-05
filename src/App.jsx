import NavBarDesktop from '@/components/NavBar/NavBarDesktop';
import NavBarMobile from '@/components/NavBar/NavBarMobile';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? setTheme('dark')
      : setTheme('light');
  }, []);

  const toggleDarkMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <NavBarDesktop theme={theme} toggleDarkMode={toggleDarkMode} />
      <NavBarMobile theme={theme} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<AboutMe theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/resume" Component={Resume} />
      </Routes>
    </>
  );
}

export default App;
