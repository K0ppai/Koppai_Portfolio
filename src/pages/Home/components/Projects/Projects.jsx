import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { motion } from 'framer-motion';

// Components or datas
import { titleAnimationVariants } from '@/assets/Animations/Animations';
import Project from './Project';
import projectDatas from '../../../../data/ProjectDatas';

// CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Projects.css';

const Projects = ({ darkMode }) => {
  return (
    <section className='px-[5vmin] md:px-[13vmax] 2xl:px-[20vmax]' id='projects'>
      <div className='flex items-center py-8 pt-20'>
        <motion.h1
          className='text-2xl'
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={titleAnimationVariants.viewport}
        >
          Projects
        </motion.h1>
        <motion.div
          className='ml-2 h-[1px] w-[12vmin] bg-text_light dark:bg-white md:w-[48px]'
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={titleAnimationVariants.viewport}
        />
      </div>
      <motion.h2
        className='text-gray-500 dark:text-gray-400'
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView2}
        viewport={titleAnimationVariants.viewport}
      >
        My proudest projects can be seen here. 😎
      </motion.h2>
      <p className='mt-10 text-lg'></p>
      <Swiper
        className='pb-20 pt-10'
        effect={'coverflow'}
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
          <SwiperSlide key={projectData.end_point}>
            <Project projectData={projectData} index={index} darkMode={darkMode} />
          </SwiperSlide>
        ))}
        <div className='relative top-8 flex items-center justify-center'>
          <MdOutlineNavigateBefore className='swiper-button-prev relative top-3 text-primary_dark' />
          <div className='slider-controler'>
            <div className='swiper-pagination' />
          </div>
          <MdOutlineNavigateNext className='swiper-button-next relative top-3 text-primary_dark' />
        </div>
      </Swiper>
    </section>
  );
};

export default Projects;
Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
