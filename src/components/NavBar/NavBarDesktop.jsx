import './NavBar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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

const NavBarDesktop = ({ darkMode, toggleDarkMode }) => {
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
    <nav className="fixed right-0 top-0 z-[90] hidden h-[100vh] w-[19vmax] text-text_light dark:text-text_dark md:block">
      <div className="relative flex h-full flex-col justify-around rounded-tl-3xl">
        <button
          className={`${
            darkMode ? 'bg-bg_dark' : 'bg-bg_light'
          } flex flex-col items-center justify-center`}
          onClick={toggleDarkMode}
        >
          <div className="flex w-full items-center justify-end gap-x-9 pr-9">
            {darkMode ? <span>Dark</span> : <span>Light</span>}
            {darkMode ? (
              <BsFillMoonStarsFill className="my-[4vw] text-2xl text-primary_dark" />
            ) : (
              <ImSun className="my-[4vw] text-2xl text-primary_dark" />
            )}
          </div>
        </button>
        <a
          href="#about-me"
          className={`flex flex-col items-center justify-center ${
            darkMode ? 'bg-bg_dark' : 'bg-bg_light'
          } ${
            activeSection === 'about-me' &&
            'rounded-br-2xl rounded-tr-2xl bg-primary_light bg-transparent bg-opacity-[20%] py-[4vw]'
          }`}
          onClick={() => handleNavigation('about-me')}
        >
          <div className="flex w-full items-center justify-end gap-x-9 pr-9">
            <span>About</span>
            {activeSection === 'about-me' ? (
              <AiFillHome className="mx-0 text-2xl text-primary_dark" />
            ) : (
              <AiOutlineHome className="my-[4vw] text-2xl text-primary_dark" />
            )}
          </div>
        </a>
        <a
          href="#projects"
          className={`flex flex-col items-center justify-center ${
            darkMode ? 'bg-bg_dark' : 'bg-bg_light'
          } ${
            activeSection === 'projects' &&
            'rounded-br-2xl rounded-tr-2xl bg-primary_light bg-transparent bg-opacity-[20%] py-[4vw]'
          }`}
          onClick={() => handleNavigation('projects')}
        >
          <div className="flex w-full items-center justify-end gap-x-9 pr-9">
            <span>Projects</span>
            {activeSection === 'projects' ? (
              <BsFillGridFill className="mx-0 text-2xl text-primary_dark" />
            ) : (
              <BsGrid className="my-[4vw] text-2xl text-primary_dark" />
            )}
          </div>
        </a>
        <a
          href="#contact"
          className={`flex flex-col items-center justify-center ${
            darkMode ? 'bg-bg_dark' : 'bg-bg_light'
          } ${
            activeSection === 'contact' &&
            'rounded-br-2xl rounded-tr-2xl bg-primary_light bg-transparent bg-opacity-[20%] py-[4vw]'
          }`}
          onClick={() => handleNavigation('contact')}
        >
          <div className="flex w-full items-center justify-end gap-x-9 pr-9">
            <span>Contact</span>
            {activeSection === 'contact' ? (
              <BsFillSendFill className="mx-0 text-2xl text-primary_dark" />
            ) : (
              <BsSend className="my-[4vw] text-2xl text-primary_dark" />
            )}
          </div>
        </a>
        <NavLink
          to="https://drive.google.com/file/d/1ulRSgcJ64u2OVebKbS7-22qyLPuJrHi4/view?usp=drive_link"
          className={`${
            darkMode ? 'bg-bg_dark' : 'bg-bg_light'
          } flex flex-col items-center justify-center`}
        >
          <div className="flex w-full items-center justify-end gap-x-9 pr-9">
            <span>Get My Resume</span>
            <BsFileEarmarkText className="my-[4vw] text-2xl text-primary_dark" />
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBarDesktop;

NavBarDesktop.PropTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
