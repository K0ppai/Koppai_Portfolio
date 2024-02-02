import { motion } from 'framer-motion';
import propTypes from 'prop-types';

const Header = ({ currentProjectData }) => {
  return (
    <>
      <motion.h1
        className='py-6 text-center font-sans text-4xl font-bold'
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        viewport={{
          once: false,
        }}
      >
        {currentProjectData.title.toUpperCase()}
      </motion.h1>
      <motion.h2
        className='pb-6 text-center text-lg text-gray-400'
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.7 },
        }}
        viewport={{
          once: false,
        }}
      >
        {currentProjectData.development_type}
      </motion.h2>
    </>
  );
};

export default Header;

Header.propTypes = {
  currentProjectData: propTypes.object,
};
