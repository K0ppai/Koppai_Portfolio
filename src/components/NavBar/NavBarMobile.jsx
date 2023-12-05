import { useLocation, useNavigate } from 'react-router-dom';
import {
  BsFileEarmarkText,
  BsFillMoonStarsFill,
  BsFillSendFill,
  BsFillGridFill,
  BsGrid,
  BsSend,
} from 'react-icons/bs';
import { ImSun } from 'react-icons/im';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBarMobile = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('about-me');
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const sections = ['about-me', 'projects', 'contact'];

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  const handleNavigation = (sectionId) => {
    if (path.startsWith('/projects/')) {
      navigate('/');
    }
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-50% 0px -50% 0px',
    });

    sections.forEach((section) => {
      const target = document.getElementById(section);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <nav className="flex justify-center">
      <motion.div
        className={`${
          darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
        } md:bg-opacity-none fixed bottom-4 z-30 flex w-[90vw] items-center justify-center rounded-lg px-2 py-2 text-text_light  backdrop-blur-[1rem] dark:bg-bg_dark dark:bg-opacity-30 dark:text-text_dark dark:backdrop-blur-[1rem] md:w-[75vw] lg:hidden lg:bg-bg_light`}
        initial={{ y: '100vw' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 2.5, ease: 'easeInOut' }}
      >
        <a
          href="#about-me"
          className={`flex flex-col items-center justify-center ${
            activeSection === 'about-me' && 'rounded-md bg-primary_light bg-opacity-[20%] p-[4vw]'
          }`}
          onClick={() => handleNavigation('about-me')}
        >
          {activeSection === 'about-me' ? (
            <AiFillHome className="mx-0 text-2xl text-primary_dark" />
          ) : (
            <AiOutlineHome className="mx-[4vw] text-2xl text-primary_dark" />
          )}
        </a>
        <a
          href="#projects"
          className={`flex flex-col items-center justify-center ${
            activeSection === 'projects' && 'rounded-md bg-primary_light bg-opacity-[20%] p-[4vw]'
          }`}
          onClick={() => handleNavigation('projects')}
        >
          {activeSection === 'projects' ? (
            <BsFillGridFill className="mx-0 text-2xl text-primary_dark" />
          ) : (
            <BsGrid className="mx-[4vw] text-2xl text-primary_dark" />
          )}
        </a>
        <button className="flex flex-col items-center justify-center" onClick={toggleDarkMode}>
          {darkMode ? (
            <BsFillMoonStarsFill className="mx-[4vw] text-2xl text-primary_dark" />
          ) : (
            <ImSun className="mx-[4vw] text-2xl text-primary_dark" />
          )}
        </button>
        <a
          href="https://docs.google.com/document/d/1HMwbozbfAfAtPKraRLDyvU3twcYYmuuK_ybTTBE_G70/edit?usp=sharing"
          className="flex flex-col items-center justify-center"
          target="_blank"
          rel="noreferrer"
        >
          <BsFileEarmarkText className="mx-[4vw] text-2xl text-primary_dark" />
        </a>
        <a
          href="#contact"
          className={`flex flex-col items-center justify-center ${
            activeSection === 'contact' && 'rounded-md bg-primary_light bg-opacity-[20%] p-[4vw]'
          }`}
          onClick={() => handleNavigation('contact')}
        >
          {activeSection === 'contact' ? (
            <BsFillSendFill className="mx-0 text-2xl text-primary_dark" />
          ) : (
            <BsSend className="mx-[4vw] text-2xl text-primary_dark" />
          )}
        </a>
      </motion.div>
    </nav>
  );
};

export default NavBarMobile;

NavBarMobile.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
