import { motion } from 'framer-motion';
import propTypes from 'prop-types';
import { FiGithub } from 'react-icons/fi';
import { RxExternalLink } from 'react-icons/rx';

const ProjectLinks = ({ currentProjectData, darkMode }) => {
  return (
    <div className='flex justify-between'>
      <motion.a
        href={currentProjectData.github_link}
        target='_blank'
        rel='noopener noreferrer'
        className={`left flex items-center justify-start bg-primary_dark py-2 text-secondary_pale_light dark:bg-primary_light ${
          darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
        }`}
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 1 },
        }}
        viewport={{
          once: false,
        }}
        whileHover={{ scale: 1.05, color: 'black' }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <span className='ml-[5vmin] text-xl lg:ml-[5.5vmax]'>SOURCE</span>
        <FiGithub className='ml-[5vmin] text-2xl lg:ml-[5.5vmax]' />
      </motion.a>
      <motion.a
        href={currentProjectData.live_link}
        target='_blank'
        rel='noopener noreferrer'
        className={`right flex items-center justify-end bg-green-500 py-2 text-secondary_pale_light dark:bg-green-500 ${
          darkMode ? 'shadow-drop-secondary-dark' : 'shadow-drop-secondary-light'
        }`}
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 1 },
        }}
        viewport={{
          once: false,
        }}
        whileHover={{ scale: 1.05, color: 'black' }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <span className='mr-[5vmin] text-xl lg:mr-[5.5vmax]'>LIVE</span>
        <RxExternalLink className='mr-[5vmin] text-2xl lg:mr-[5.5vmax]' />
      </motion.a>
    </div>
  );
};

export default ProjectLinks;

ProjectLinks.propTypes = {
  currentProjectData: propTypes.object,
  darkMode: propTypes.bool,
};
