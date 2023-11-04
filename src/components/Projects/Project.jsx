import { useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Project = ({ projectData, index, darkMode }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className={`${
        darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
      } flex h-[55vmin] flex-col overflow-hidden bg-transparent text-secondary_pale_light dark:bg-bg_card_pale_dark dark:text-secondary_pale_light md:h-[30vmax] md:rounded-xl lg:h-[70vmin]`}
      initial={{
        opacity: 0,
        y: 100,
      }}
      custom={index}
      whileInView={(index) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.2,
        },
      })}
      viewport={{
        once: true,
      }}
    >
      <div
        className="relative h-full w-full"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={projectData.image} className="absolute h-full w-full" />
        <motion.div
          className={`relative h-full w-full transition-all duration-500 ease-in-out ${
            isHover ? 'lg:top-0' : 'lg:top-[100%]'
          }`}
        >
          <div className="absolute h-[120%] w-[120%] bg-black bg-opacity-60 lg:bg-opacity-80" />
          <Link to={`/projects/${projectData.id}`} onClick={() => window.scrollTo(0, 0)}>
            <motion.button
              className="absolute bottom-4 right-4 flex items-center justify-center rounded-[4px] bg-primary_dark px-4 py-2 md:bottom-6 md:right-6 xl:bottom-10 xl:right-10 xl:text-2xl"
              whileHover={{ scale: 1.03, color: '#030c17' }}
            >
              See More
              <BsArrow90DegLeft className="ml-1 rotate-90 text-base xl:text-2xl" />
            </motion.button>
          </Link>
          <h2 className="absolute left-4 top-3 text-xl font-bold md:left-6 md:top-5 xl:left-10 xl:top-9 xl:text-2xl">
            {projectData.title}
          </h2>
          <div className="absolute right-4 top-4 flex w-[22%] justify-between md:right-6 md:top-6 md:w-[15%] xl:right-10 xl:top-10">
            <motion.a
              href={projectData.github_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{
                color: '#e38b26',
                scale: 1.1,
              }}
              className="text-primary_dark lg:text-text_dark"
            >
              <FiGithub className="text-xl lg:text-[26px]" />
            </motion.a>
            <motion.a
              href={projectData.live_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{
                color: '#e38b26',
                scale: 1.1,
              }}
              className="text-primary_dark lg:text-text_dark"
            >
              <FiExternalLink className="text-xl lg:text-[26px]" />
            </motion.a>
          </div>
          <span className="absolute bottom-4 left-4 text-lg md:bottom-6 md:left-6 xl:bottom-10 xl:left-10 xl:text-2xl">
            {projectData.responsive}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;
Project.propTypes = {
  projectData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
