import { matrix } from '@/assets/images/images';
import PropTypes from 'prop-types';
import { techs } from '@/assets/Techs/Techs';
import './AboutMe.css';
import { useState } from 'react';
import Connect from './Connect';
import ReactModal from 'react-modal';

const AboutMe = ({ darkMode }) => {
  const [hoveredTech, setHoveredTech] = useState(null);
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
      <div className="color-change-2x h-[35vmin] md:h-[25vmin] w-screen" />
      <div className="relative -top-[17.5vmin] md:-top-[5vmax] px-4 md:px-[20vmax]">
        {/* Profile Image */}
        <figure className="relative flex w-[35vmin] flex-col">
          <img
            src={matrix}
            alt="Profile"
            className={`${
              darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
            } box-border w-[35vmin] rounded-[50%] border-4 border-bg_light dark:border-bg_dark md:w-[10vmax]`}
          />
        </figure>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center">
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
            <h1 className="text-4xl font-extrabold">Koppai</h1>
            <div className="ml-2 h-3 w-3 rounded-[50%] bg-green-400" />
          </div>
          <button
            className={`${
              darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
            } flex items-center justify-center rounded-xl bg-primary_dark px-4 py-[0.4rem] text-xl font-semibold text-secondary_pale_light transition duration-150 dark:text-text_light`}
            onClick={openModal}
          >
            <span className="px-1">connect</span>
          </button>
        </div>
        <p className="mt-2 text-gray-400">Front-End Developer</p>
        {/* <span className="my-1 text-gray-400">psthu.koppai@gmail.com</span> */}
        {/* Keywords */}
        <div className="mt-2 flex">
          <span className="mr-2 rounded-full bg-bg_card_pale_light px-4 py-[0.2rem] text-primary_dark">
            Front End
          </span>
          <span className="mr-2 rounded-full bg-secondary_pale_light px-4 py-[0.2rem] text-green-400">
            Remote
          </span>
        </div>
        {/* About Me */}
        <article>
          <div className="flex items-center py-8">
            <h1 className="text-2xl text-gray-400">About Me</h1>
            <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400" />
          </div>
          <p className='text-justify'>
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
        </article>
      </div>
      <div className="bg-bg_card_white_light px-4 md:px-[20vmax] py-10 dark:bg-bg_card_pale_dark">
        <div className="flex items-center py-8">
          <h1 className="text-2xl text-gray-400">My Skills</h1>
          <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
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
      </div>
    </section>
  );
};

export default AboutMe;

AboutMe.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
