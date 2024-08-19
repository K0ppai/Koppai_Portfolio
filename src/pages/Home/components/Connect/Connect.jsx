import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { BiX } from 'react-icons/bi';

import { socialMedias } from '../../../../data/SocialMediaDatas';
import './Connect.css';

const Connect = ({ closeModal, isModalOpen, darkMode }) => {
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
      } fixed left-[50%] top-[50%] flex w-[315px] translate-x-[-50%] translate-y-[-50%] items-center justify-center md:w-[400px] lg:w-[500px]`}
      id='connect'
    >
      <button
        className={`absolute z-[999] flex h-[65px] w-[65px] cursor-pointer items-center  justify-center rounded-[50%] bg-bg_light dark:bg-bg_dark md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]`}
        onClick={closeModal}
      >
        <BiX className='text-[45px] text-primary_dark md:text-[50px] lg:text-[55px]' />
      </button>
      {socialMedias.map((socialMedia, index) => (
        <li key={socialMedia.id} className='rotate absolute list-none' style={{ '--i': index }}>
          <a href={socialMedia.url} target='_blank' rel='noreferrer'>
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
