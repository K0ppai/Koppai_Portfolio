import NavBarDesktop from '@/components/NavBar/NavBarDesktop';
import NavBarMobile from '@/components/NavBar/NavBarMobile';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import ProjectDetails from './components/Projects/ProjectDetails';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? setDarkMode(true)
      : setDarkMode(false);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-bg_light bg-opacity-90 text-text_light dark:bg-bg_dark dark:text-text_dark">
        <NavBarDesktop darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <NavBarMobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" Component={Resume} />
          <Route path="/projects/:projectId" element={<ProjectDetails darkMode={darkMode} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
