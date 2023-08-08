import projectDatas from './ProjectDatas';
import './Projects.css';
import { v4 as id } from 'uuid';
import { FiGithub } from 'react-icons/fi';
import { RxExternalLink } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Projects = ({ darkMode }) => {
  return (
    <div className="pb-20 pt-4">
      <h1 className="text-center text-4xl font-bold">Show Room</h1>
      <div className="grid grid-cols-1 gap-y-8 px-4 pt-4 md:grid-cols-4 md:gap-x-4">
        {projectDatas.map((projectData) => (
          <div
            key={projectData.id}
            className={`${
              darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
            } flex flex-col overflow-hidden rounded-xl bg-third_light text-text_light dark:bg-bg_card_pale_dark dark:text-secondary_pale_light`}
          >
            <div className="mx-auto my-4 h-2 w-[25%] rounded bg-accent_dark dark:bg-bg_card_dark" />
            <div className="relative">
              <img src={projectData.image} alt="dota" className="block h-full" />
              <div className="absolute inset-0 bg-black opacity-[60%]" />
              <h2 className="absolute left-4 top-4 text-2xl font-bold text-accent_dark dark:text-secondary_pale_light">
                {projectData.title}
              </h2>
              <h2 className="absolute right-4 top-4 text-sm text-accent_dark dark:text-secondary_pale_light">
                {projectData.built_date}
              </h2>
              <div className="absolute bottom-4 right-4 flex w-[20%] justify-between">
                <a href={projectData.github_link} target="_blank" rel="noopener noreferrer">
                  <FiGithub className="text-2xl text-accent_dark dark:text-secondary_pale_light" />
                </a>
                <a href={projectData.live_link} target="_blank" rel="noopener noreferrer">
                  <RxExternalLink className="text-2xl text-accent_dark dark:text-secondary_pale_light" />
                </a>
              </div>
              <span className="absolute bottom-4 left-4 text-lg text-accent_dark dark:text-secondary_pale_light">
                {projectData.responsive}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center px-2 pt-2">
              {projectData.tech.map((tech) => (
                <span
                  key={id()}
                  className="mx-1 mb-2 rounded bg-accent_dark px-2 py-1 text-secondary_pale_light dark:bg-bg_card_dark dark:text-text_dark"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="my-4 rounded-md bg-primary_light px-12 py-3 text-lg font-bold text-secondary_pale_light dark:bg-secondary_dark dark:text-secondary_pale_light">
                <Link to={`/projects/${projectData.id}`}>See More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
