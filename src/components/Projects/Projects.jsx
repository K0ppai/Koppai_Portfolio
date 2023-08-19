import projectDatas from './ProjectDatas';
import './Projects.css';
import { FiGithub } from 'react-icons/fi';
import { RxExternalLink } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Projects = ({ darkMode }) => {
  return (
    <div className="bg-bg_card_white_light px-4 dark:bg-bg_card_pale_dark" id="projects">
      <div className="flex items-center py-8">
        <h1 className="text-2xl text-gray-400">Projects</h1>
        <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400" />
      </div>
      <h2 className="text-4xl font-bold">Latest Work</h2>
      <div className="horizontal-grid pb-20 pt-10">
        {projectDatas.map((projectData) => (
          <button
            key={projectData.id}
            className={`${
              darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
            } flex flex-col overflow-hidden rounded-xl bg-transparent text-text_light dark:bg-bg_card_pale_dark dark:text-secondary_pale_light`}
          >
            <Link to={`/projects/${projectData.id}`} className="h-full">
              {/* <div className="mx-auto my-4 h-1 w-[25%] rounded bg-accent_dark dark:bg-bg_card_dark" /> */}
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
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
