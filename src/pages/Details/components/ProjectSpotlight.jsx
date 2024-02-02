import { motion } from 'framer-motion';
import propTypes from 'prop-types';
import { titleAnimationVariants } from '../../../assets/Animations/Animations';

const ProjectSpotlight = ({ currentProjectData }) => {
  return (
    <>
      <motion.h2
        className='mb-5 font-sans text-xl font-bold'
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView}
        viewport={{
          once: false,
        }}
      >
        SPOTLIGHT
      </motion.h2>
      <motion.p
        className='mb-8 text-gray-500 dark:text-gray-400'
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView2}
        viewport={{
          once: false,
        }}
      >
        {currentProjectData.key_feature}
      </motion.p>
    </>
  );
};

export default ProjectSpotlight;

ProjectSpotlight.propTypes = {
  currentProjectData: propTypes.object,
};
