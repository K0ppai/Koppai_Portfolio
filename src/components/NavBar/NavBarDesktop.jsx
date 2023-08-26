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
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const NavBarDesktop = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('about-me');
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const sections = ['about-me', 'projects', 'contact'];
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  const handleNavExpand = () => {
    setIsNavExpanded(!isNavExpanded);
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
    <nav
      className={`${
        isNavExpanded ? 'w-[20vmax]' : 'w-[8vmax]'
      } fixed right-0 top-0 z-[50] hidden h-[100vh]  text-text_light dark:text-text_dark md:block`}
    >
      <ul className="flex h-[100vh] flex-col  rounded-tl-3xl">
        <li
          className={`${
            darkMode ? 'bg-bg_dark' : 'bg-bg_light'
          } relative flex flex-grow flex-col items-center justify-center`}
        >
          <button
            onClick={handleNavExpand}
            className={`z-99 top-[value here] absolute -left-[16px] rounded-full bg-primary_dark p-[2px] text-[30px] text-white`}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <div className="flex w-full items-center justify-end gap-x-9 pr-9">
            {darkMode ? (
              <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Dark</span>
            ) : (
              <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Light</span>
            )}
            {darkMode ? (
              <button>
                <BsFillMoonStarsFill
                  className="my-[4vw] min-w-[24px] text-2xl text-primary_dark"
                  onClick={toggleDarkMode}
                />
              </button>
            ) : (
              <button>
                <ImSun
                  className="my-[4vw] min-w-[24px] text-2xl text-primary_dark"
                  onClick={toggleDarkMode}
                />
              </button>
            )}
          </div>
        </li>
        <li
          className={`flex flex-grow flex-col items-center justify-center ${
            darkMode ? 'bg-bg_dark' : 'bg-bg_light'
          } ${
            activeSection === 'about-me' &&
            'rounded-br-2xl rounded-tr-2xl bg-primary_light bg-transparent bg-opacity-[20%] py-[4vw]'
          }`}
        >
          <div className="flex w-full items-center justify-end gap-x-9 pr-9">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>About</span>
            <a href="#about-me" onClick={() => handleNavigation('about-me')}>
              {activeSection === 'about-me' ? (
                <AiFillHome className="mx-0 min-w-[24px] text-2xl text-primary_dark" />
              ) : (
                <AiOutlineHome className="my-[4vw] min-w-[24px] text-2xl text-primary_dark" />
              )}
            </a>
          </div>
        </li>
        <li
          className={`flex flex-grow flex-col items-center justify-center ${
            darkMode ? 'bg-bg_dark' : 'bg-bg_light'
          } ${
            activeSection === 'projects' &&
            'rounded-br-2xl rounded-tr-2xl bg-primary_light bg-transparent bg-opacity-[20%] py-[4vw]'
          }`}
        >
          <div className="flex w-full items-center justify-end gap-x-9 pr-9">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Projects</span>
            <a href="#projects" onClick={() => handleNavigation('projects')}>
              {activeSection === 'projects' ? (
                <BsFillGridFill className="mx-0 min-w-[24px] text-2xl text-primary_dark" />
              ) : (
                <BsGrid className="my-[4vw] min-w-[24px] text-2xl text-primary_dark" />
              )}
            </a>
          </div>
        </li>
        <li
          className={`flex flex-grow flex-col items-center justify-center ${
            darkMode ? 'bg-bg_dark' : 'bg-bg_light'
          } ${
            activeSection === 'contact' &&
            'rounded-br-2xl rounded-tr-2xl bg-primary_light bg-transparent bg-opacity-[20%] py-[4vw]'
          }`}
        >
          <div className="flex w-full items-center justify-end gap-x-9 pr-9">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Contact</span>
            <a href="#contact" onClick={() => handleNavigation('contact')}>
              {activeSection === 'contact' ? (
                <BsFillSendFill className="mx-0 min-w-[24px] text-2xl text-primary_dark" />
              ) : (
                <BsSend className="my-[4vw] min-w-[24px] text-2xl text-primary_dark" />
              )}
            </a>
          </div>
        </li>
        <NavLink
          to="https://drive.google.com/file/d/1ulRSgcJ64u2OVebKbS7-22qyLPuJrHi4/view?usp=drive_link"
          className={`${
            darkMode ? 'bg-bg_dark' : 'bg-bg_light'
          } flex flex-grow flex-col items-center justify-center`}
        >
          <div className="flex w-full items-center justify-end gap-x-9 pr-9">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Get My Resume</span>
            <BsFileEarmarkText className="my-[4vw] min-w-[24px] text-2xl text-primary_dark" />
          </div>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBarDesktop;

NavBarDesktop.PropTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
