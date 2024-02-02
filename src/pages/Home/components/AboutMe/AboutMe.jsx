import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'react-modal';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { motion } from 'framer-motion';

import { profile } from '@/assets/images/images';
import './AboutMe.css';
import Connect from '../Connect/Connect';

Modal.setAppElement('#root');

const AboutMe = ({ darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    const rotateElems = document.querySelectorAll('#connect .rotate');
    rotateElems.forEach((elem) => {
      elem.classList.remove('active');
    });

    setTimeout(() => {
      setIsModalOpen(false);
    }, 600);
  };

  return (
    <section className='text-lg' id='about-me'>
      <Modal
        isOpen={isModalOpen}
        darkMode={darkMode}
        onRequestClose={closeModal}
        className={`${isModalOpen ? 'scale-in-center' : 'scale-out-center'} h-[100vh] w-[100vw]`}
        overlayClassName='fixed inset-0 bg-black backdrop-blur-[0.2rem] bg-opacity-40 z-50'
        closeTimeoutMS={600}
      >
        <Connect closeModal={closeModal} isModalOpen={isModalOpen} darkMode={darkMode} />
      </Modal>
      <motion.div
        className='h-[20vh] w-screen bg-primary_dark md:h-[20vh]'
        initial={{ y: '-100vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className='relative -top-[17.5vmin] px-[5vmin] md:-top-[5vmax] md:px-[13vmax] 2xl:px-[20vmax]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <figure className='relative flex flex-col'>
          <motion.img
            src={profile}
            alt='Koppai Profile'
            className={`${
              darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
            } box-border w-[40%] rounded-lg border-4 border-bg_light dark:border-bg_dark md:w-[10vmax]`}
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </figure>
        <div className='mt-4 flex items-center justify-between'>
          <motion.div
            className='flex items-center'
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className='text-4xl font-extrabold'>Koppai</span>
            <VscVerifiedFilled className='ml-2 text-2xl text-green-500' />
          </motion.div>
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0, transition: { duration: 1, delay: 1, ease: 'easeIn' } }}
          >
            <motion.button
              className={`${
                darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
              } flex items-center justify-center rounded-md bg-primary_dark px-4 py-[0.4rem] text-xl font-semibold text-secondary_pale_light dark:text-text_light`}
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect
            </motion.button>
          </motion.div>
        </div>
        <motion.p
          className='mt-4 text-gray-400'
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          US-Certified Developer
        </motion.p>
        {/* Keywords */}
        <div className='mt-4 flex'>
          <motion.span
            className='mr-2 rounded-md border-2 border-primary_dark px-4 py-[0.1rem] text-primary_dark dark:border-orange-400 dark:text-orange-400'
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Full-stack
          </motion.span>
          <motion.span
            className='mr-2 rounded-md border-2 border-green-500 px-4 py-[0.1rem] text-green-500 dark:border-green-400 dark:text-green-400'
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Remote
          </motion.span>
        </div>
        {/* About Me */}
        <motion.article
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div
            className='flex items-center py-8'
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h1 className='text-2xl'>About Me</h1>
            <div className='ml-2 h-[1px] w-[12vmin] bg-bg_dark dark:bg-white md:w-[48px]' />
          </motion.div>
          <p className='tracking-wide text-gray-500 dark:text-gray-400 sm:text-justify'>
            Heyy, my soon-to-be co-workers! I&apos;m
            <span className='font-extrabold text-primary_dark'> Paing Soe Thu</span>, but you can
            call me anytime 😉. I&apos;m a self-motivated
            <span className='font-extrabold text-primary_dark'> full-stack </span>
            web developer and a student of life enthusiastic about creating user-centric websites
            using React.js and Ruby on Rails. I&apos;ve spent 1789+ hours mastering algorithms, data
            structures, and full-stack development while simultaneously developing projects with
            Ruby, Rails, JavaScript, React, and Redux and developed skills in remote pair
            programming using GitHub, industry-standard git-flow, and daily standups to communicate
            and collaborate with international remote developers. Due to my strong commitment to
            software development, I&apos;ve built over 16+ projects in just six months. I achieved a
            perfect score in the final capstone due to my passion for striving for the best. Now,
            how can I help you?
          </p>
        </motion.article>
      </motion.div>
    </section>
  );
};

export default AboutMe;

AboutMe.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
