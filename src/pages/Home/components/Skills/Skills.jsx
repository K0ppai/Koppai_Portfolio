import { motion } from 'framer-motion';
import { useState } from 'react';

import { titleAnimationVariants } from '@/assets/Animations/Animations';
import { techs } from '../../../../data/Techs';

import './Skills.css'

const Skills = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className='px-[5vmin] md:px-[13vmax] 2xl:px-[20vmax]'>
      <div className='flex items-center py-8'>
        <motion.h1
          className='text-2xl'
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={titleAnimationVariants.viewport}
        >
          My Skills
        </motion.h1>
        <motion.div
          className='ml-2 h-[1px] w-[12vmin] bg-bg_dark dark:bg-white md:w-[48px]'
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={titleAnimationVariants.viewport}
        />
      </div>
      <motion.p
        className='mb-8 text-gray-500 dark:text-gray-400'
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView}
        viewport={titleAnimationVariants.viewport}
      >
        Technologies that I&apos;ve been working with recently.
      </motion.p>
      <ul className='mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-x-20 md:gap-y-8 lg:justify-center lg:gap-x-16'>
        {techs.map((tech, index) => (
          <motion.li
            key={tech.id}
            className='group'
            onMouseEnter={() => setHoveredTech(tech.id)}
            onMouseLeave={() => setHoveredTech(null)}
            initial={{
              opacity: 0,
              y: 100,
            }}
            custom={index}
            whileInView={(index) => ({
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.1,
              },
            })}
            viewport={{
              once: true,
            }}
          >
            {hoveredTech === tech.id ? tech.hoverElement : tech.originalElement}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
