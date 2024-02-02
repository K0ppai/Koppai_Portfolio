import { titleAnimationVariants } from '../../../assets/Animations/Animations';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';

const ProjectIntroduction = ({ currentProjectData }) => {
  return (
    <article className='my-4'>
      <motion.h2
        className='mb-5 font-sans text-xl font-bold'
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView}
        viewport={{
          once: false,
        }}
      >
        INTRODUCTION
      </motion.h2>
      <motion.p
        className='mb-8 text-gray-500 dark:text-gray-400'
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView2}
        viewport={{
          once: false,
        }}
        dangerouslySetInnerHTML={{ __html: currentProjectData.description }}
      />
    </article>
  );
};

export default ProjectIntroduction;

ProjectIntroduction.propTypes = {
  currentProjectData: propTypes.object,
};
