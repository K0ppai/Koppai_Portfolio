import { motion } from 'framer-motion';
import propTypes from 'prop-types';
import { titleAnimationVariants } from '../../../assets/Animations/Animations';

const ProjectPurpose = ({ currentProjectData }) => {
  return (
    <motion.article>
      <motion.h2
        className='mb-5 font-sans text-xl font-bold'
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView}
        viewport={{
          once: false,
        }}
      >
        PURPOSE AND GOAL
      </motion.h2>
      <motion.p
        className='mb-8 text-gray-500 dark:text-gray-400'
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView2}
        viewport={{
          once: false,
        }}
      >
        {currentProjectData.goal}
      </motion.p>
    </motion.article>
  );
};

export default ProjectPurpose;

ProjectPurpose.propTypes = {
  currentProjectData: propTypes.object,
};
