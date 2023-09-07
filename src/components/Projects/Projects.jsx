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

const Projects = ({ darkMode }) => {
  return (
    <section
      className="px-4 md:px-[20vmax]"
      id="projects"
    >
      <div className="flex items-center py-8">
        <h1 className="text-2xl text-gray-400">Projects</h1>
        <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400 md:w-[48px]" />
      </div>
      <h2 className="text-4xl font-bold">Latest Work</h2>
      <Swiper
        className="pb-20 pt-10"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.5}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {projectDatas.map((projectData) => (
          <SwiperSlide key={projectData.id}>
            <div
              className={`${
                darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
              } flex flex-col overflow-hidden rounded-xl bg-transparent text-text_light dark:bg-bg_card_pale_dark dark:text-secondary_pale_light md:rounded-2xl`}
            >
              <Link to={`/projects/${projectData.id}`} className="h-full">
                <div className="relative h-full">
                  <img src={projectData.image} alt="dota" className="h-full" />
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
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default Projects;
Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
