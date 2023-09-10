import { profile } from '@/assets/images/images';
import PropTypes from 'prop-types';
import { techs } from '@/assets/Techs/Techs';
import './AboutMe.css';
import { useState, useEffect, useRef } from 'react';
import Connect from './Connect';
import ReactModal from 'react-modal';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { motion, useAnimation, useInView } from 'framer-motion';

const AboutMe = ({ darkMode }) => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

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
    <section className="text-lg" id="about-me">
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={`${isModalOpen ? 'scale-in-center' : 'scale-out-center'} h-[100vh] w-[100vw]`}
        overlayClassName="fixed inset-0 bg-black backdrop-blur-[0.1rem] bg-opacity-40 z-50"
        closeTimeoutMS={600}
      >
        <Connect closeModal={closeModal} isModalOpen={isModalOpen} />
      </ReactModal>
      <motion.div
        className="h-[20vh] w-screen bg-primary_dark md:h-[20vh]"
        initial={{ y: '-100vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="relative -top-[17.5vmin] px-[5vmin] md:-top-[5vmax] md:px-[10vmax]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <figure className="relative flex w-[35vmin] flex-col">
          <motion.img
            src={profile}
            alt="Profile"
            className={`${
              darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
            } box-border w-[35vmin] rounded-lg border-4 border-bg_light dark:border-bg_dark md:w-[10vmax]`}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </figure>
        <div className="mt-3 flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* <svg className="h-[4vmax] w-[27vmin]">
              <text
                x="50%"
                y="50%"
                dy=".35em"
                textAnchor="middle"
                id="name"
                className="text-4xl font-extrabold"
              >
                Koppai
              </text>
            </svg> */}
            <span className="text-4xl font-extrabold">Koppai</span>
            {/* <div className="ml-2 h-3 w-3 rounded-[50%] bg-green-400" /> */}
            <VscVerifiedFilled className="ml-2 text-2xl text-green-500" />
          </motion.div>
          <motion.button
            className={`${
              darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
            } flex items-center justify-center rounded-md bg-primary_dark px-4 py-[0.4rem] text-xl font-semibold text-secondary_pale_light transition duration-150 dark:text-text_light`}
            onClick={openModal}
            whileHover={{ scale: 1.05 }}
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="px-1">Connect</span>
          </motion.button>
        </div>
        <motion.p
          className="mt-2 text-gray-400"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Front-End Developer
        </motion.p>
        {/* <span className="my-1 text-gray-400">psthu.koppai@gmail.com</span> */}
        {/* Keywords */}
        <div className="mt-2 flex">
          <motion.span
            className="mr-2 rounded-md border-2 border-primary_dark px-4 py-[0.1rem] text-primary_dark dark:border-orange-400 dark:text-orange-400"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Front End
          </motion.span>
          <motion.span
            className="mr-2 rounded-md border-2 border-green-500 px-4 py-[0.1rem] text-green-500 dark:border-green-400 dark:text-green-400"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Remote
          </motion.span>
        </div>
        {/* About Me */}
        <motion.article
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div className="flex items-center py-8" 
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          >
            <h1 className="text-2xl text-gray-400">About Me</h1>
            <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400 md:w-[48px]" />
          </motion.div>
          <p className="sm:text-justify">
            Friends! I&apos;m a self-motivated front-end web developer enthusiastic about creating
            aesthetic websites using React & Redux and TailwindCss. Spending 789+ hours mastering
            algorithms, data structures, and front-end development while simultaneously developing
            projects with JavaScript, React & Redux. Developing skills in remote pair programming
            using GitHub, industry-standard git-flow, and daily standups to communicate and
            collaborate with international remote developers. Built over 9+ projects in just three
            months.
            <br />
            Now I&apos;m learning back-end web development at Microverse, a remote software
            development school located in the US that uses pair programming and project building to
            teach development.
          </p>
        </motion.article>
      </motion.div>
      {/* Skills section */}
      <motion.section
        className="px-[5vmin] pt-10 md:px-[10vmax]"
        ref={skillRef}
        variants={{
          hidden: { opacity: 0, x: '-100vw' },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center py-8">
          <h1 className="text-2xl text-gray-400">My Skills</h1>
          <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400 md:w-[48px]" />
        </div>
        <p className="mb-8">Technologies that I&apos;ve been working on recently.</p>
        <div className="mt-20 flex flex-wrap items-center justify-center gap-5 md:gap-x-32 md:gap-y-8">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className="group"
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {hoveredTech === tech.id ? tech.hoverElement : tech.originalElement}
            </div>
          ))}
        </div>
      </motion.section>
    </section>
  );
};

export default AboutMe;

AboutMe.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
