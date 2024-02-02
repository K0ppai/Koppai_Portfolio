import { motion } from 'framer-motion';
import propTypes from 'prop-types';
import ProjectLinks from './ProjectLinks';

const ProjectImage = ({ currentProjectData, darkMode }) => {
  return (
    <motion.div
      className={`${
        darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
      } mb-8 overflow-hidden rounded-t-md bg-gray-300 text-gray-500 dark:text-gray-400 `}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5, delay: 1 },
      }}
      viewport={{
        once: false,
      }}
    >
      <motion.figure
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 1.5 },
        }}
        viewport={{
          once: false,
        }}
      >
        <img
          src={currentProjectData.image}
          alt={`${currentProjectData.title}-image`}
          className='w-full'
        />
      </motion.figure>
      {/* Source/Live Buttons */}
      <ProjectLinks currentProjectData={currentProjectData} darkMode={darkMode} />
    </motion.div>
  );
};

export default ProjectImage;

ProjectImage.propTypes = {
  currentProjectData: propTypes.object,
  darkMode: propTypes.bool,
};
