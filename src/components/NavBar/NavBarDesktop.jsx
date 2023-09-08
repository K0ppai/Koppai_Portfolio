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
        isNavExpanded ? 'w-[120px]' : 'w-[45px]'
      } fixed right-0 top-1/2 z-[50] hidden -translate-y-1/2 transform rounded-xl text-text_light transition-all duration-500 ease-in-out dark:text-text_dark lg:block`}
    >
      <ul className="flex h-[80vh] flex-col lg:h-[50vh]">
        <li
          className={`
          ${
            darkMode
              ? 'bg-bg_card_pale_dark text-text_dark'
              : 'bg-bg_card_white_light text-bg_dark'
          } 
          ${activeSection === 'about-me' ? 'rounded-bl-[6px]' : ''}
          relative flex flex-grow flex-col items-center justify-center rounded-tl-md`}
        >
          <button
            onClick={handleNavExpand}
            className={`z-99 absolute -left-[10px] rounded-full bg-primary_dark p-[0.5px] text-[20px] text-white`}
          >
            <MdOutlineKeyboardArrowLeft className={`${isNavExpanded ? 'rotate-180' : ''}`} />
          </button>
          <div className="flex w-full items-center justify-end gap-x-[1.5vmax] pr-[1.2vmin]">
            {darkMode ? (
              <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Dark</span>
            ) : (
              <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Light</span>
            )}
            {darkMode ? (
              <button className="my-[4vh]">
                <BsFillMoonStarsFill
                  className="min-w-[24px] text-lg text-text_light dark:text-text_dark"
                  onClick={toggleDarkMode}
                />
              </button>
            ) : (
              <button className="my-[4vh]">
                <ImSun
                  className="min-w-[24px] text-lg text-text_light dark:text-text_dark"
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
              ? 'bg-bg_card_pale_dark text-text_dark'
              : 'bg-bg_card_white_light text-bg_dark'
          } 
          ${activeSection === 'projects' ? 'rounded-bl-[6px]' : ''}
          ${activeSection === 'about-me' && 'bg-bg_light dark:bg-bg_dark py-[4vh]'}`}
        >
          {activeSection === 'about-me' ? (
            <>
              <b className={`bt absolute -top-[24px] h-[24px] w-full bg-transparent`} />
              <b className={`bb absolute -bottom-[24px] z-[99] h-[24px] w-full bg-transparent`} />
            </>
          ) : (
            <></>
          )}
          <div className="flex w-full items-center justify-end gap-x-[1.5vmax] pr-[1.2vmin]">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>About</span>
            <a href="#about-me" onClick={() => handleNavigation('about-me')}>
              {activeSection === 'about-me' ? (
                <AiFillHome className="mx-0 min-w-[24px] text-lg text-text_light dark:text-text_dark" />
              ) : (
                <AiOutlineHome className="my-[4vh] min-w-[24px] text-lg text-text_light dark:text-text_dark" />
              )}
            </a>
          </div>
        </li>
        <li
          className={`relative flex flex-grow flex-col items-center justify-center 
          ${
            darkMode
              ? 'bg-bg_card_pale_dark text-text_dark'
              : 'bg-bg_card_white_light text-bg_dark'
          } 
          ${activeSection === 'about-me' ? 'rounded-tl-[6px]' : ''}
          ${activeSection === 'contact' ? 'rounded-bl-[6px]' : ''}
          ${activeSection === 'projects' && 'bg-bg_light dark:bg-bg_dark py-[4vh]'}`}
        >
          {activeSection === 'projects' ? (
            <>
              <b className={`bt absolute -top-[24px] h-[24px] w-full bg-transparent`} />
              <b className={`bb absolute -bottom-[24px] z-[99] h-[24px] w-full bg-transparent`} />
            </>
          ) : (
            <></>
          )}
          <div className="flex w-full items-center justify-end gap-x-[1.5vmax] pr-[1.2vmin]">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Projects</span>
            <a href="#projects" onClick={() => handleNavigation('projects')}>
              {activeSection === 'projects' ? (
                <BsFillGridFill className="mx-0 min-w-[24px] text-lg text-text_light dark:text-text_dark" />
              ) : (
                <BsGrid className="my-[4vh] min-w-[24px] text-lg text-text_light dark:text-text_dark" />
              )}
            </a>
          </div>
        </li>
        <li
          className={`relative flex flex-grow flex-col items-center justify-center 
          ${
            darkMode
              ? 'bg-bg_card_pale_dark text-text_dark'
              : 'bg-bg_card_white_light text-bg_dark'
          } 
          ${activeSection === 'projects' ? 'rounded-tl-[6px]' : ''} 
          ${activeSection === 'contact' && 'bg-bg_light dark:bg-bg_dark py-[4vh]'}`}
        >
          {activeSection === 'contact' ? (
            <>
              <b className={`bt absolute -top-[24px] h-[24px] w-full bg-transparent`} />
              <b className={`bb absolute -bottom-[24px] z-[99] h-[24px] w-full bg-transparent`} />
            </>
          ) : (
            <></>
          )}
          <div className="flex w-full items-center justify-end gap-x-[1.5vmax] pr-[1.2vmin]">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Contact</span>
            <a href="#contact" onClick={() => handleNavigation('contact')}>
              {activeSection === 'contact' ? (
                <BsFillSendFill className="mx-0 min-w-[24px] text-lg text-text_light dark:text-text_dark" />
              ) : (
                <BsSend className="my-[4vh] min-w-[24px] text-lg text-text_light dark:text-text_dark" />
              )}
            </a>
          </div>
        </li>
        <NavLink
          to="https://drive.google.com/file/d/1ulRSgcJ64u2OVebKbS7-22qyLPuJrHi4/view?usp=drive_link"
          className={`
          ${
            darkMode
              ? 'bg-bg_card_pale_dark text-text_dark'
              : 'bg-bg_card_white_light text-bg_dark'
          } 
          ${activeSection === 'contact' ? 'rounded-tl-[6px]' : ''} 
          flex flex-grow flex-col items-center justify-center rounded-bl-md`}
        >
          <div className="flex w-full items-center justify-end gap-x-[1.5vmax] pr-[1.2vmin]">
            <span className={`${isNavExpanded ? 'block' : 'hidden'}`}>Resume</span>
            <BsFileEarmarkText className="my-[4vh] min-w-[24px] text-lg text-text_light dark:text-text_dark" />
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
