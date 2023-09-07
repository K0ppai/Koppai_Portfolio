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
        isNavExpanded ? 'w-[15vmax]' : 'w-[6vmax]'
      } fixed right-0 top-0 z-[50] hidden rounded-xl text-text_light transition-all duration-500 ease-in-out  dark:text-text_dark md:block`}
    >
      <ul className="flex h-[100vh] flex-col">
        <li
          className={`
          ${
            darkMode
              ? 'bg-bg_card_pale_light bg-opacity-20 text-bg_dark'
              : 'bg-bg_card_pale_light bg-opacity-50 text-bg_dark'
          } 
          ${activeSection === 'about-me' ? 'rounded-bl-[8px]' : ''}
          relative flex flex-grow flex-col items-center justify-center rounded-tl-lg`}
        >
          <button
            onClick={handleNavExpand}
            className={`z-99 absolute -left-[16px] rounded-full bg-primary_dark p-[2px] text-[30px] text-white`}
          >
            <MdOutlineKeyboardArrowLeft className={`${isNavExpanded ? 'rotate-180' : ''}`} />
          </button>
          <div className="flex w-full items-center justify-end gap-x-[2.5vmax] pr-[1.8vmax]">
            {darkMode ? (
              <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Dark</span>
            ) : (
              <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Light</span>
            )}
            {darkMode ? (
              <button className="my-[4vw]">
                <BsFillMoonStarsFill
                  className="min-w-[24px] text-2xl text-text_light dark:text-text_dark"
                  onClick={toggleDarkMode}
                />
              </button>
            ) : (
              <button className="my-[4vw]">
                <ImSun
                  className="min-w-[24px] text-2xl text-text_light dark:text-text_dark"
                  onClick={toggleDarkMode}
                />
              </button>
            )}
          </div>
        </li>
        <li
          className={`relative flex flex-grow flex-col items-center justify-center 
          ${
            darkMode
              ? 'bg-bg_card_pale_light bg-opacity-20 text-bg_dark'
              : 'bg-bg_card_pale_light bg-opacity-50 text-bg_dark'
          } 
          ${activeSection === 'projects' ? 'rounded-bl-[8px]' : ''}
          ${activeSection === 'about-me' && 'bg-transparent py-[4vw]'}`}
        >
          {activeSection === 'about-me' ? (
            <>
              <b className={`bt absolute -top-[24px] h-[24px] w-full bg-transparent`} />
              <b className={`bb absolute -bottom-[24px] z-[99] h-[24px] w-full bg-transparent`} />
            </>
          ) : (
            <></>
          )}
          <div className="flex w-full items-center justify-end gap-x-[2.5vmax] pr-[1.8vmax]">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>About</span>
            <a href="#about-me" onClick={() => handleNavigation('about-me')}>
              {activeSection === 'about-me' ? (
                <AiFillHome className="mx-0 min-w-[24px] text-2xl text-text_light dark:text-text_dark" />
              ) : (
                <AiOutlineHome className="my-[4vw] min-w-[24px] text-2xl text-text_light dark:text-text_dark" />
              )}
            </a>
          </div>
        </li>
        <li
          className={`relative flex flex-grow flex-col items-center justify-center 
          ${
            darkMode
              ? 'bg-bg_card_pale_light bg-opacity-20 text-bg_dark'
              : 'bg-bg_card_pale_light bg-opacity-50 text-bg_dark'
          } 
          ${activeSection === 'about-me' ? 'rounded-tl-[8px]' : ''}
          ${activeSection === 'contact' ? 'rounded-bl-[8px]' : ''}
          ${activeSection === 'projects' && 'bg-transparent py-[4vw]'}`}
        >
          {activeSection === 'projects' ? (
            <>
              <b className={`bt absolute -top-[24px] h-[24px] w-full bg-transparent`} />
              <b className={`bb absolute -bottom-[24px] z-[99] h-[24px] w-full bg-transparent`} />
            </>
          ) : (
            <></>
          )}
          <div className="flex w-full items-center justify-end gap-x-[2.5vmax] pr-[1.8vmax]">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Projects</span>
            <a href="#projects" onClick={() => handleNavigation('projects')}>
              {activeSection === 'projects' ? (
                <BsFillGridFill className="mx-0 min-w-[24px] text-2xl text-text_light dark:text-text_dark" />
              ) : (
                <BsGrid className="my-[4vw] min-w-[24px] text-2xl text-text_light dark:text-text_dark" />
              )}
            </a>
          </div>
        </li>
        <li
          className={`relative flex flex-grow flex-col items-center justify-center 
          ${
            darkMode
              ? 'bg-bg_card_pale_light bg-opacity-20 text-bg_dark'
              : 'bg-bg_card_pale_light bg-opacity-50 text-bg_dark'
          } 
          ${activeSection === 'projects' ? 'rounded-tl-[8px]' : ''} 
          ${activeSection === 'contact' && 'bg-transparent py-[4vw]'}`}
        >
          {activeSection === 'contact' ? (
            <>
              <b className={`bt absolute -top-[24px] h-[24px] w-full bg-transparent`} />
              <b className={`bb absolute -bottom-[24px] z-[99] h-[24px] w-full bg-transparent`} />
            </>
          ) : (
            <></>
          )}
          <div className="flex w-full items-center justify-end gap-x-[2.5vmax] pr-[1.8vmax]">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Contact</span>
            <a href="#contact" onClick={() => handleNavigation('contact')}>
              {activeSection === 'contact' ? (
                <BsFillSendFill className="mx-0 min-w-[24px] text-2xl text-text_light dark:text-text_dark" />
              ) : (
                <BsSend className="my-[4vw] min-w-[24px] text-2xl text-text_light dark:text-text_dark" />
              )}
            </a>
          </div>
        </li>
        <NavLink
          to="https://drive.google.com/file/d/1ulRSgcJ64u2OVebKbS7-22qyLPuJrHi4/view?usp=drive_link"
          className={`
          ${
            darkMode
              ? 'bg-bg_card_pale_light bg-opacity-20 text-bg_dark'
              : 'bg-bg_card_pale_light bg-opacity-50 text-bg_dark'
          } 
          ${activeSection === 'contact' ? 'rounded-tl-[8px]' : ''} 
          flex flex-grow flex-col items-center justify-center rounded-bl-lg`}
        >
          <div className="flex w-full items-center justify-end gap-x-[2.5vmax] pr-[1.8vmax]">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Resume</span>
            <BsFileEarmarkText className="my-[4vw] min-w-[24px] text-2xl text-text_light dark:text-text_dark" />
          </div>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBarDesktop;

NavBarDesktop.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
