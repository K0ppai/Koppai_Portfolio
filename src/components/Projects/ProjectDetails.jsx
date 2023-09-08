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
    <section className="pb-[20vh] md:px-[10vmax]">
      <h1 className="py-6 text-center font-sans text-4xl font-bold">
        {projectDatas[currentProjectIndex].title.toUpperCase()}
      </h1>
      <h2 className="pb-6 text-center text-lg text-gray-400">
        {projectDatas[currentProjectIndex].development_type}
      </h2>
      <div className='h-[2px] mb-6 rounded-full w-14 bg-gray-400 m-auto'/>
      <figure>
        <img
          src={projectDatas[currentProjectIndex].image}
          alt={`${projectDatas[currentProjectIndex].title}-image`}
        />
      </figure>
      {/* Source/Live Buttons */}
      <div className="my-2 mb-8 flex justify-between">
        <a
          href={projectDatas[currentProjectIndex].github_link}
          target="_blank"
          rel="noopener noreferrer"
          className={`left flex items-center justify-start border-y-2 border-gray-500 bg-primary_light py-2 dark:border-bg_card_pale_light ${
            darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
          }`}
        >
          <span className="ml-[7vmin] text-2xl lg:ml-[8vmax]">Source</span>
          <FiGithub className="ml-[7vmin] text-3xl lg:ml-[8vmax]" />
        </a>
        <a
          href={projectDatas[currentProjectIndex].live_link}
          target="_blank"
          rel="noopener noreferrer"
          className={`right flex items-center justify-end border-y-2 border-gray-500 bg-green-500 py-2 dark:border-bg_card_pale_light ${
            darkMode ? 'shadow-drop-secondary-dark' : 'shadow-drop-secondary-light'
          }`}
        >
          <span className="mr-[7vmin] text-2xl lg:mr-[8vmax]">Live</span>
          <RxExternalLink className="mr-[7vmin] text-3xl lg:mr-[8vmax]" />
        </a>
      </div>

      <div className="px-4">
        <div>
          <h3 className="mb-5 font-sans text-xl font-bold">TECHS</h3>
          <ul className="list-disc pl-4">
            {projectDatas[currentProjectIndex].tech.map((tech) => (
              <li key={id()} className="text-text_light dark:text-secondary_pale_light">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        {/* Project Informations */}
        <article className="my-4">
          <h2 className="mb-5 font-sans text-xl font-bold">INTRODUCTION</h2>
          <p className="mb-8">{projectDatas[currentProjectIndex].description}</p>
        </article>
        <article>
          <h2 className="mb-5 font-sans text-xl font-bold">PURPOSE AND GOAL</h2>
          <p className="mb-8">{projectDatas[currentProjectIndex].goal}</p>
        </article>
        <article>
          <h2 className="mb-5 font-sans text-xl font-bold">SPOTLIGHT</h2>
          <p className="mb-8">{projectDatas[currentProjectIndex].key_feature}</p>
        </article>
        <article>
          <h2 className="mb-5 font-sans text-xl font-bold">LESSON LEARNED</h2>
          <p className="mb-8">{projectDatas[currentProjectIndex].lesson_learned}</p>
        </article>
        {/* Next/Previous Buttons */}
        <div className="flex px-4">
          {currentProjectIndex !== 0 && (
            <Link to={`/projects/${projectDatas[prevProjectIndex].id}`} className="me-auto">
              <button className="flex items-center rounded-md bg-primary_dark px-4 py-2 text-text_light dark:text-bg_card_white_light">
                <BsArrowLeft className="mr-1 text-2xl text-text_light dark:text-bg_card_white_light" />
                <span className="pl-2">{prevProjectTitle}</span>
              </button>
            </Link>
          )}
          {currentProjectIndex !== projectDatas.length - 1 && (
            <Link to={`/projects/${projectDatas[nextProjectIndex].id}`} className="ms-auto">
              <button className="flex items-center rounded-md bg-primary_dark px-4 py-2 text-text_light dark:text-bg_card_white_light">
                <span className="pr-2">{nextProjectTitle}</span>
                <BsArrowRight className="ml-1 text-2xl text-text_light dark:text-bg_card_white_light" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
ProjectDetails.propTypes = {
  darkMode: PropTypes.bool,
};
