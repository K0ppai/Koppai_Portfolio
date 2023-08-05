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

const NavBarMobile = ({ theme, toggleDarkMode }) => {
  const path = useLocation().pathname;

  return (
    <div className="fixed bottom-0 flex w-screen items-center justify-around bg-orange-300 py-2">
      <NavLink to="/" className="flex flex-col items-center justify-center px-2">
        {path === '/' ? <AiFillHome /> : <AiOutlineHome />}
        <span>About Me</span>
      </NavLink>
      <NavLink to="/projects" className="flex flex-col items-center justify-center px-2">
        {path === '/projects' ? <BsFillGridFill /> : <BsGrid />}
        <span>Projects</span>
      </NavLink>
      <button className="flex flex-col items-center justify-center px-2" onClick={toggleDarkMode}>
        {theme === 'dark' ? <BsFillMoonStarsFill /> : <ImSun />}
        <span>Mode</span>
      </button>
      <NavLink
        to="https://drive.google.com/file/d/1ulRSgcJ64u2OVebKbS7-22qyLPuJrHi4/view?usp=drive_link"
        className="flex flex-col items-center justify-center px-2"
      >
        <BsFileEarmarkText />
        <span>Resume</span>
      </NavLink>
      <NavLink to="/contact" className="flex flex-col items-center justify-center px-2">
        {path === '/contact' ? <BsFillSendFill /> : <BsSend />}
        <span>Contact</span>
      </NavLink>
    </div>
  );
};

export default NavBarMobile;
