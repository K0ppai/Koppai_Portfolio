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
    <div className="fixed bottom-0 flex w-screen items-center justify-around bg-secondary_light py-2 text-text_light dark:bg-secondary_dark dark:text-text_dark md:hidden z-30">
      <NavLink to="/" className="flex flex-col items-center justify-center">
        {path === '/' ? (
          <AiFillHome className="text-primary_dark" />
        ) : (
          <AiOutlineHome className="text-primary_dark" />
        )}
        <span className='text-bg_card_pale_dark dark:text-secondary_pale_light'>About</span>
      </NavLink>
      <NavLink to="/projects" className="flex flex-col items-center justify-center">
        {path === '/projects' ? (
          <BsFillGridFill className="text-primary_dark" />
        ) : (
          <BsGrid className="text-primary_dark" />
        )}
        <span className='text-bg_card_pale_dark dark:text-secondary_pale_light'>Projects</span>
      </NavLink>
      <button className="flex flex-col items-center justify-center" onClick={toggleDarkMode}>
        {darkMode ? (
          <BsFillMoonStarsFill className="text-primary_dark" />
        ) : (
          <ImSun className="text-primary_dark" />
        )}
        <span className='text-bg_card_pale_dark dark:text-secondary_pale_light'>{darkMode ? 'Dark' : 'Light'}</span>
      </button>
      <NavLink
        to="https://drive.google.com/file/d/1ulRSgcJ64u2OVebKbS7-22qyLPuJrHi4/view?usp=drive_link"
        className="flex flex-col items-center justify-center"
      >
        <BsFileEarmarkText className="text-primary_dark" />
        <span className='text-bg_card_pale_dark dark:text-secondary_pale_light'>Resume</span>
      </NavLink>
      <NavLink to="/contact" className="flex flex-col items-center justify-center">
        {path === '/contact' ? (
          <BsFillSendFill className="text-primary_dark" />
        ) : (
          <BsSend className="text-primary_dark" />
        )}
        <span className='text-bg_card_pale_dark dark:text-secondary_pale_light'>Contact</span>
      </NavLink>
    </div>
  );
};

export default NavBarMobile;

NavBarMobile.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
