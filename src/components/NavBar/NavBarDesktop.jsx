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
import { motion } from 'framer-motion';

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
    <motion.nav
      className={`${
        isNavExpanded ? 'w-[150px] 2xl:w-[150px]' : 'w-[55px] 2xl:w-[55px]'
      } fixed right-0 top-1/2 z-[50] hidden -translate-y-1/2 transform rounded-xl text-text_light transition-all duration-500 ease-in-out dark:text-text_dark lg:block`}
      initial={{ x: '100vw', y: '-50%', opacity: 0 }}
      animate={{ x: 0, y: '-50%', opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5, ease: 'easeInOut' }}
    >
      <motion.ul className="flex h-[80vh] flex-col lg:h-[60vh]">
        <li
          className={`
          bg-gray-200 bg-opacity-90 dark:bg-gray-900 
          ${activeSection === 'about-me' ? 'rounded-bl-[6px]' : ''}
          relative flex flex-grow flex-col items-center justify-center rounded-tl-md`}
        >
          <button
            onClick={handleNavExpand}
            className={`z-99 absolute -left-[10px] rounded-full bg-primary_dark p-[0.5px] text-[20px] text-text_dark dark:text-text_light`}
          >
            <MdOutlineKeyboardArrowLeft className={`${isNavExpanded ? 'rotate-180' : ''}`} />
          </button>
          <div className="flex w-full items-center justify-end gap-x-[15%] pr-[20%]">
            {darkMode ? (
              <motion.span
                className={`${isNavExpanded ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                viewport={{
                  once: false,
                }}
              >
                Dark
              </motion.span>
            ) : (
              <motion.span
                className={`${isNavExpanded ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                viewport={{
                  once: false,
                }}
              >
                Light
              </motion.span>
            )}
            {darkMode ? (
              <button className="my-[4vh]">
                <BsFillMoonStarsFill
                  className="min-w-[24px] text-lg text-primary_dark"
                  onClick={toggleDarkMode}
                />
              </button>
            ) : (
              <button className="my-[4vh]">
                <ImSun
                  className="min-w-[24px] text-lg text-primary_dark"
                  onClick={toggleDarkMode}
                />
              </button>
            )}
          </div>
        </li>
        <li
          className={`relative flex flex-grow flex-col items-center justify-center 
          ${activeSection === 'projects' ? 'rounded-bl-[6px]' : ''}
          ${
            activeSection === 'about-me'
              ? 'bg-bg_light py-[4vh] dark:bg-bg_dark'
              : 'bg-gray-200 bg-opacity-90 dark:bg-gray-900'
          }`}
        >
          {activeSection === 'about-me' ? (
            <>
              <b className={`bt absolute -top-[24px] h-[24px] w-full bg-transparent`} />
              <b className={`bb absolute -bottom-[24px] z-[99] h-[24px] w-full bg-transparent`} />
            </>
          ) : (
            <></>
          )}
          <div className="flex w-full items-center justify-end gap-x-[15%] pr-[20%]">
            <motion.span
              className={`${isNavExpanded ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
              viewport={{
                once: false,
              }}
            >
              About
            </motion.span>
            <a href="#about-me" onClick={() => handleNavigation('about-me')}>
              {activeSection === 'about-me' ? (
                <AiFillHome className="mx-0 min-w-[24px] text-lg text-primary_dark" />
              ) : (
                <AiOutlineHome className="my-[4vh] min-w-[24px] text-lg text-primary_dark" />
              )}
            </a>
          </div>
        </li>
        <li
          className={`relative flex flex-grow flex-col items-center justify-center 
          ${activeSection === 'about-me' ? 'rounded-tl-[6px]' : ''}
          ${activeSection === 'contact' ? 'rounded-bl-[6px]' : ''}
          ${
            activeSection === 'projects'
              ? 'bg-bg_light py-[4vh] dark:bg-bg_dark'
              : 'bg-gray-200 bg-opacity-90 dark:bg-gray-900'
          }`}
        >
          {activeSection === 'projects' ? (
            <>
              <b className={`bt absolute -top-[24px] h-[24px] w-full bg-transparent`} />
              <b className={`bb absolute -bottom-[24px] z-[99] h-[24px] w-full bg-transparent`} />
            </>
          ) : (
            <></>
          )}
          <div className="flex w-full items-center justify-end gap-x-[15%] pr-[20%]">
            <motion.span
              className={`${isNavExpanded ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}
              viewport={{
                once: false,
              }}
            >
              Projects
            </motion.span>
            <a href="#projects" onClick={() => handleNavigation('projects')}>
              {activeSection === 'projects' ? (
                <BsFillGridFill className="mx-0 min-w-[24px] text-lg text-primary_dark" />
              ) : (
                <BsGrid className="my-[4vh] min-w-[24px] text-lg text-primary_dark" />
              )}
            </a>
          </div>
        </li>
        <li
          className={`relative flex flex-grow flex-col items-center justify-center 
          ${activeSection === 'projects' ? 'rounded-tl-[6px]' : ''} 
          ${
            activeSection === 'contact'
              ? 'bg-bg_light py-[4vh] dark:bg-bg_dark'
              : 'bg-gray-200 bg-opacity-90 dark:bg-gray-900'
          }`}
        >
          {activeSection === 'contact' ? (
            <>
              <b className={`bt absolute -top-[24px] h-[24px] w-full bg-transparent`} />
              <b className={`bb absolute -bottom-[24px] z-[99] h-[24px] w-full bg-transparent`} />
            </>
          ) : (
            <></>
          )}
          <div className="flex w-full items-center justify-end gap-x-[15%] pr-[20%]">
            <motion.span
              className={`${isNavExpanded ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
              viewport={{
                once: false,
              }}
            >
              Contact
            </motion.span>
            <a href="#contact" onClick={() => handleNavigation('contact')}>
              {activeSection === 'contact' ? (
                <BsFillSendFill className="mx-0 min-w-[24px] text-lg text-primary_dark" />
              ) : (
                <BsSend className="my-[4vh] min-w-[24px] text-lg text-primary_dark" />
              )}
            </a>
          </div>
        </li>
        <NavLink
          to="https://docs.google.com/document/d/13VXPE2wM48DAPK3_WT7ezjwauV8LerirY-1tkKwVdzE/edit?usp=sharing"
          className={`
          bg-gray-200 bg-opacity-90 dark:bg-gray-900 
          ${activeSection === 'contact' ? 'rounded-tl-[6px]' : ''} 
          flex flex-grow flex-col items-center justify-center rounded-bl-md`}
        >
          <div className="flex w-full items-center justify-end gap-x-[15%] pr-[20%]">
            <motion.span
              className={`${isNavExpanded ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4, ease: 'easeInOut' }}
              viewport={{
                once: false,
              }}
            >
              Resume
            </motion.span>
            <BsFileEarmarkText className="my-[4vh] min-w-[24px] text-lg text-primary_dark" />
          </div>
        </NavLink>
      </motion.ul>
    </motion.nav>
  );
};

export default NavBarDesktop;

NavBarDesktop.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
