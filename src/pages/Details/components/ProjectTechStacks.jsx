import { liAnimationVariants, titleAnimationVariants } from '../../../assets/Animations/Animations';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';

const ProjectTechStacks = ({ currentProjectData }) => {
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
        TECHS
      </motion.h2>
      <ul className='list-disc pl-4'>
        {currentProjectData.tech.map((tech, index) => (
          <motion.li
            key={index}
            className='text-gray-500 dark:text-gray-400'
            custom={index}
            initial={liAnimationVariants.initial}
            whileInView={liAnimationVariants.whileInView}
            viewport={{
              once: false,
            }}
          >
            {tech}
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default ProjectTechStacks;

ProjectTechStacks.propTypes = {
  currentProjectData: propTypes.object,
};
