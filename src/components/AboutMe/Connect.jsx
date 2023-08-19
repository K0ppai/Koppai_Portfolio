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

const Connect = ({ closeModal, isModalOpen }) => {
  const socialMedias = [
    {
      id: 1,
      url: 'mailto:psthu.koppai@gmail.com',
      icon: <BiLogoGmail className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin] md:text-[12vmin]" />,
    },
    {
      id: 2,
      url: 'https://wa.me/+959796679793',
      icon: <BiLogoWhatsapp className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin] md:text-[12vmin]" />,
    },
    {
      id: 3,
      url: 'https://discord.com/users/665938913256275980',
      icon: (
        <BiLogoDiscordAlt className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin] md:text-[12vmin]" />
      ),
    },
    {
      id: 4,
      url: 'https://twitter.com/_koppai_',
      icon: <BiLogoTwitter className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin] md:text-[12vmin]" />,
    },
    {
      id: 5,
      url: 'https://www.linkedin.com/in/paingsoe-thu/',
      icon: <BiLogoLinkedin className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin] md:text-[12vmin]" />,
    },
    {
      id: 6,
      url: 'https://github.com/K0ppai',
      icon: <BiLogoGithub className="rounded-[50%] bg-secondary_pale_light p-4 text-[17vmin] md:text-[12vmin]" />,
    },
  ];

  useEffect(() => {
    if (isModalOpen) {
      // Use a setTimeout to add the transition class after a brief delay
      const timeout = setTimeout(() => {
        const rotateElems = document.querySelectorAll('#connect .rotate');
        rotateElems.forEach((elem) => {
          elem.classList.add('active');
        });
      }, 10);

      // Cleanup function to clear the timeout when component unmounts or modal closes
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isModalOpen]);

  return (
    <div
      className="fixed left-[50%] top-[50%] flex w-[90vw] md:w-[80vh] translate-x-[-50%] translate-y-[-50%] items-center justify-center"
      id="connect"
    >
      <button
        className="absolute z-[999] flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-[50%] bg-secondary_pale_light"
        onClick={closeModal}
      >
        <BiX className="text-4xl" />
      </button>
      {socialMedias.map((socialMedia, index) => (
        <li
          key={socialMedia.id}
          className='rotate absolute list-none'
          style={{ '--i': index }}
        >
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
};
