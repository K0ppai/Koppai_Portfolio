import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';

import projectDatas from '../../../data/ProjectDatas';

const ProjectNavButtons = ({ currentProjectData, darkMode }) => {
  const currentIndex = projectDatas.indexOf(currentProjectData);

  return (
    <div className='flex px-4'>
      {currentIndex !== 0 && (
        <Link
          to={`/projects/${projectDatas[currentIndex - 1].end_point}`}
          className='me-auto'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <motion.span
            className='flex items-center rounded-md border-2 border-primary_dark px-4 py-2 text-primary_dark'
            whileHover={{
              scale: 1.05,
              backgroundColor: '#e38b26',
              color: `${darkMode ? '#030c17' : '#f1f7fd'}`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <BsArrowLeft className='mr-1 text-2xl' />
            <span className='pl-2'>Prev</span>
          </motion.span>
        </Link>
      )}
      {currentIndex !== projectDatas.length - 1 && (
        <Link
          to={`/projects/${projectDatas[currentIndex + 1].end_point}`}
          className='ms-auto'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <motion.span
            className='flex items-center rounded-md border-2 border-primary_dark px-4 py-2 text-primary_dark'
            whileHover={{
              scale: 1.05,
              backgroundColor: '#e38b26',
              color: `${darkMode ? '#030c17' : '#f1f7fd'}`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className='pr-2'>Next</span>
            <BsArrowRight className='ml-1 text-2xl' />
          </motion.span>
        </Link>
      )}
    </div>
  );
};

export default ProjectNavButtons;

ProjectNavButtons.propTypes = {
  currentProjectData: propTypes.object,
  darkMode: propTypes.bool,
};
