import { NavLink, useLocation } from 'react-router-dom';
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

const NavBarMobile = ({ darkMode, toggleDarkMode }) => {
  const path = useLocation().pathname;

  return (
    <div className="fixed bottom-0 flex w-screen items-center justify-around bg-third_light py-2 text-text_light dark:bg-third_dark dark:text-text_dark rounded-tl-2xl rounded-tr-2xl md:hidden z-30">
      <NavLink to="/" className="flex flex-col items-center justify-center">
        {path === '/' ? (
          <AiFillHome className="text-accent_light dark:text-accent_dark" />
        ) : (
          <AiOutlineHome className="text-accent_light dark:text-accent_dark" />
        )}
        <span>About</span>
      </NavLink>
      <NavLink to="/projects" className="flex flex-col items-center justify-center">
        {path === '/projects' ? (
          <BsFillGridFill className="text-accent_light dark:text-accent_dark" />
        ) : (
          <BsGrid className="text-accent_light dark:text-accent_dark" />
        )}
        <span>Projects</span>
      </NavLink>
      <button className="flex flex-col items-center justify-center" onClick={toggleDarkMode}>
        {darkMode ? (
          <BsFillMoonStarsFill className="text-accent_light dark:text-accent_dark" />
        ) : (
          <ImSun className="text-accent_light dark:text-accent_dark" />
        )}
        <span>{darkMode ? 'Dark' : 'Light'}</span>
      </button>
      <NavLink
        to="https://drive.google.com/file/d/1ulRSgcJ64u2OVebKbS7-22qyLPuJrHi4/view?usp=drive_link"
        className="flex flex-col items-center justify-center"
      >
        <BsFileEarmarkText className="text-accent_light dark:text-accent_dark" />
        <span>Resume</span>
      </NavLink>
      <NavLink to="/contact" className="flex flex-col items-center justify-center">
        {path === '/contact' ? (
          <BsFillSendFill className="text-accent_light dark:text-accent_dark" />
        ) : (
          <BsSend className="text-accent_light dark:text-accent_dark" />
        )}
        <span>Contact</span>
      </NavLink>
    </div>
  );
};

export default NavBarMobile;

NavBarMobile.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
