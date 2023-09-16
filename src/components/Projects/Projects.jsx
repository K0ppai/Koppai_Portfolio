import projectDatas from './ProjectDatas';
import './Projects.css';
import { FiGithub } from 'react-icons/fi';
import { RxExternalLink } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { motion } from 'framer-motion';
import { titleAnimationVariants } from '@/assets/Animations/Animations';

const Projects = ({ darkMode }) => {
  return (
    <section className="px-[5vmin] md:px-[13vmax]" id="projects">
      <div className="flex items-center py-8 pt-20">
        <motion.h1
          className="text-2xl text-gray-500"
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={titleAnimationVariants.viewport}
        >
          Projects
        </motion.h1>
        <motion.div
          className="ml-2 h-[1px] w-[12vmin] bg-gray-500 md:w-[48px]"
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={titleAnimationVariants.viewport}
        />
      </div>
      <motion.h2
        className="text-4xl font-bold"
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView2}
        viewport={titleAnimationVariants.viewport}
      >
        Portfolio
      </motion.h2>
      <Swiper
        className="pb-20 pt-10"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.2}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        breakpoints={{
          500: {
            spaceBetween: 60,
            slidesPerView: 1.2,
          },
          600: {
            spaceBetween: 70,
          },
          768: {
            spaceBetween: 85,
          },
          1024: {
            spaceBetween: 100,
            slidesPerView: 1.5,
          },
        }}
      >
        {projectDatas.map((projectData, index) => (
          <SwiperSlide key={projectData.id}>
            <motion.div
              className={`${
                darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
              } flex h-[50vmin] flex-col overflow-hidden bg-transparent text-text_light dark:bg-bg_card_pale_dark dark:text-secondary_pale_light md:h-[30vmax] md:rounded-xl lg:h-[70vmin]`}
              initial={{
                opacity: 0,
                y: 100,
              }}
              custom={index}
              whileInView={(index) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.2,
                },
              })}
              viewport={{
                once: true,
              }}
            >
              <Link
                to={`/projects/${projectData.id}`}
                className="h-full w-full"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="relative h-full">
                  <img src={projectData.image} alt="dota" className="h-full w-full" />
                  <div className="absolute inset-0 bg-black opacity-[60%]" />
                  <h2 className="absolute left-4 top-3 text-2xl font-bold text-accent_dark dark:text-secondary_pale_light">
                    {projectData.title}
                  </h2>
                  <h2 className="absolute right-4 top-4 text-sm text-accent_dark dark:text-secondary_pale_light">
                    {projectData.built_date}
                  </h2>
                  <div className="absolute bottom-4 right-4 flex w-[20%] justify-between">
                    <a
                      href={projectData.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub className="text-2xl text-accent_dark dark:text-secondary_pale_light" />
                    </a>
                    <a
                      href={projectData.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <RxExternalLink className="text-2xl text-accent_dark dark:text-secondary_pale_light" />
                    </a>
                  </div>
                  <span className="absolute bottom-4 left-4 text-lg text-accent_dark dark:text-secondary_pale_light">
                    {projectData.responsive}
                  </span>
                </div>
                {/* Techs */}
                {/* <div className="flex flex-wrap items-center justify-center px-2 py-3">
                  {projectData.tech.map((tech) => (
                    <span
                      key={id()}
                      className="mx-1 rounded px-2 py-1 font-bold text-accent_dark dark:bg-bg_card_dark dark:text-text_dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
                {/* See More Btn */}
                {/* <div className="flex justify-center">
                  <button className="my-4 rounded-md bg-primary_light px-12 pb-3 text-lg font-bold text-secondary_pale_light dark:bg-secondary_dark dark:text-secondary_pale_light">
                    <Link to={`/projects/${projectData.id}`}>See More</Link>
                  </button>
                </div> */}
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
        <div className="relative top-8 flex items-center justify-center">
          <MdOutlineNavigateBefore className="swiper-button-prev relative top-3 text-primary_dark" />
          <div className="slider-controler">
            <div className="swiper-pagination" />
          </div>
          <MdOutlineNavigateNext className="swiper-button-next relative top-3 text-primary_dark" />
        </div>
      </Swiper>
    </section>
  );
};

export default Projects;
Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
