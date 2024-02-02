import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { RxExternalLink } from 'react-icons/rx';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

// Datas
import { titleAnimationVariants } from '@/assets/Animations/Animations';
import { liAnimationVariants } from '@/assets/Animations/Animations';
import projectDatas from '../../data/ProjectDatas';

const ProjectDetails = ({ darkMode }) => {
  const { endpoint } = useParams();
  const currentProjectData = projectDatas.find((project) => project.end_point === endpoint);
  const currentIndex = projectDatas.indexOf(currentProjectData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='px-4 pb-[20vh] tracking-wider md:px-[10vmax] md:text-justify lg:px-[22vmax]'>
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
      </motion.div>

      <div>
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
      </div>
      {/* Project Informations */}
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
      <article>
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
      </article>
      <article>
        <motion.h2
          className='mb-5 font-sans text-xl font-bold'
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={{
            once: false,
          }}
        >
          LESSON LEARNED
        </motion.h2>
        <motion.p
          className='mb-8 text-gray-500 dark:text-gray-400'
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView2}
          viewport={{
            once: false,
          }}
        >
          {currentProjectData.lesson_learned}
        </motion.p>
      </article>

      {/* Next & Previous Buttons */}

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
    </section>
  );
};

export default ProjectDetails;
ProjectDetails.propTypes = {
  darkMode: PropTypes.bool,
};
