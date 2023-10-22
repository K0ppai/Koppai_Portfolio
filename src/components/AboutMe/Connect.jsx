import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoDiscordAlt,
  BiLogoWhatsapp,
  BiLogoTwitter,
  BiX,
} from 'react-icons/bi';
import './AboutMe.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Connect = ({ closeModal, isModalOpen, darkMode }) => {
  const socialMedias = [
    {
      id: 1,
      url: 'mailto:psthu.koppai@gmail.com',
      icon: (
        <BiLogoGmail
          className={`rounded-full bg-bg_light bg-opacity-80 p-4 text-[17vmin] text-primary_dark backdrop-blur-sm dark:bg-bg_dark dark:bg-opacity-80 md:text-[10vmin] lg:text-[10vmin]`}
        />
      ),
    },
    {
      id: 2,
      url: 'https://wa.me/+959796679793',
      icon: (
        <BiLogoWhatsapp
          className={`rounded-full bg-bg_light bg-opacity-80 p-4 text-[17vmin] text-primary_dark backdrop-blur-sm dark:bg-bg_dark dark:bg-opacity-80 md:text-[10vmin] lg:text-[10vmin]`}
        />
      ),
    },
    {
      id: 3,
      url: 'https://discord.com/users/665938913256275980',
      icon: (
        <BiLogoDiscordAlt
          className={`rounded-full bg-bg_light bg-opacity-80 p-4 text-[17vmin] text-primary_dark backdrop-blur-sm dark:bg-bg_dark dark:bg-opacity-80 md:text-[10vmin] lg:text-[10vmin]`}
        />
      ),
    },
    {
      id: 4,
      url: 'https://twitter.com/_koppai_',
      icon: (
        <BiLogoTwitter
          className={`rounded-full bg-bg_light bg-opacity-80 p-4 text-[17vmin] text-primary_dark backdrop-blur-sm dark:bg-bg_dark dark:bg-opacity-80 md:text-[10vmin] lg:text-[10vmin]`}
        />
      ),
    },
    {
      id: 5,
      url: 'https://www.linkedin.com/in/paingsoe-thu/',
      icon: (
        <BiLogoLinkedin
          className={`rounded-full bg-bg_light bg-opacity-80 p-4 text-[17vmin] text-primary_dark backdrop-blur-sm dark:bg-bg_dark dark:bg-opacity-80 md:text-[10vmin] lg:text-[10vmin]`}
        />
      ),
    },
    {
      id: 6,
      url: 'https://github.com/K0ppai',
      icon: (
        <BiLogoGithub
          className={`rounded-full bg-bg_light bg-opacity-80 p-4 text-[17vmin] text-primary_dark backdrop-blur-sm dark:bg-bg_dark dark:bg-opacity-80 md:text-[10vmin] lg:text-[10vmin]`}
        />
      ),
    },
  ];

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        const rotateElems = document.querySelectorAll('#connect .rotate');
        rotateElems.forEach((elem) => {
          elem.classList.add('active');
        });
      }, 0);
    }
  }, [isModalOpen]);

  return (
    <div
      className={`${
        darkMode ? 'dark' : ''
      } fixed left-[50%] top-[50%] flex w-[90vw] translate-x-[-50%] translate-y-[-50%] items-center justify-center md:w-[50vh] lg:w-[80vh]`}
      id="connect"
    >
      <button
        className={`absolute z-[999] flex h-[25vmin] w-[25vmin] cursor-pointer items-center  justify-center rounded-[50%] bg-bg_light dark:bg-bg_dark md:h-[15vmin] md:w-[15vmin]`}
        onClick={closeModal}
      >
        <BiX className="text-[10vmin] text-primary_dark md:text-[9vmin] lg:text-[8vmin]" />
      </button>
      {socialMedias.map((socialMedia, index) => (
        <li key={socialMedia.id} className="rotate absolute list-none" style={{ '--i': index }}>
          <a href={socialMedia.url} target="_blank" rel="noreferrer">
            {socialMedia.icon}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Connect;

Connect.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
