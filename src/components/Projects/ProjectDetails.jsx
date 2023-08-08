import { useParams, Link } from 'react-router-dom';
import projectDatas from './ProjectDatas';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { RxExternalLink } from 'react-icons/rx';
import './Projects.css';
import PropTypes from 'prop-types';
import { v4 as id } from 'uuid';

const ProjectDetails = ({ darkMode }) => {
  const { projectId } = useParams();
  const currentProjectIndex = projectDatas.findIndex(
    (project) => project.id === parseInt(projectId),
  );

  const nextProjectIndex = (currentProjectIndex + 1) % projectDatas.length;
  const prevProjectIndex = (currentProjectIndex - 1 + projectDatas.length) % projectDatas.length;

  const nextProjectTitle = projectDatas[nextProjectIndex].title;
  const prevProjectTitle = projectDatas[prevProjectIndex].title;

  return (
    <section className="pb-20">
      <h1 className="py-4 text-center text-4xl font-semibold">
        {projectDatas[currentProjectIndex].title}
      </h1>
      <h2 className="pb-3 text-center text-lg text-gray-400">
        {projectDatas[currentProjectIndex].development_type}
      </h2>
      <img
        src={projectDatas[currentProjectIndex].image}
        alt={`${projectDatas[currentProjectIndex].title}-image`}
      />
      {/* Source/Live Buttons */}
      <div className="my-2 flex">
        <a
          href={projectDatas[currentProjectIndex].github_link}
          target="_blank"
          rel="noopener noreferrer"
          className={`left flex items-center justify-start bg-primary_light py-2 ${
            darkMode ? 'shadow-drop-primary' : 'shadow-drop-primary'
          }`}
        >
          <span className="ml-[7vmin] text-2xl">Source</span>
          <FiGithub className="ml-[7vmin] text-3xl" />
        </a>
        <a
          href={projectDatas[currentProjectIndex].live_link}
          target="_blank"
          rel="noopener noreferrer"
          className={`right flex items-center justify-end bg-secondary_light py-2 dark:bg-bg_card_pale_dark ${
            darkMode ? 'shadow-drop-secondary-dark' : 'shadow-drop-secondary-light'
          }`}
        >
          <span className="mr-[7vmin] text-2xl">Live</span>
          <RxExternalLink className="mr-[7vmin] text-3xl" />
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-center px-2 pt-2">
        {projectDatas[currentProjectIndex].tech.map((tech) => (
          <span
            key={id()}
            className="mx-1 mb-2 rounded bg-accent_dark px-2 py-1 text-secondary_pale_light dark:bg-bg_card_dark dark:text-text_dark"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* Project Description */}
      <article className="my-4">
        <h2 className="text-center text-2xl">Project Overview</h2>
        <p className="px-3">{projectDatas[currentProjectIndex].description}</p>
      </article>
      {/* Next/Previous Buttons */}
      <div className="flex px-4">
        {currentProjectIndex !== 0 && (
          <Link to={`/projects/${projectDatas[prevProjectIndex].id}`} className="me-auto">
            <button className="flex items-center rounded-md bg-primary_dark px-4 py-2 text-text_light dark:bg-secondary_dark dark:text-text_dark">
              <BsArrowLeft className="slide-left mr-1 fill-current text-2xl text-text_light dark:text-text_dark" />
              <span className="pl-2">{prevProjectTitle}</span>
            </button>
          </Link>
        )}
        {currentProjectIndex !== projectDatas.length - 1 && (
          <Link to={`/projects/${projectDatas[nextProjectIndex].id}`} className="ms-auto">
            <button className="flex items-center rounded-md bg-primary_dark px-4 py-2 text-text_light dark:bg-secondary_dark dark:text-text_dark">
              <span className="pr-2">{nextProjectTitle}</span>
              <BsArrowRight className="slide-right ml-1 text-2xl text-text_light dark:text-text_dark" />
            </button>
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
