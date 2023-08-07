import projectDatas from './ProjectDatas';
import './Projects.css';
import { v4 as id } from 'uuid';
import { FiGithub } from 'react-icons/fi';
import { RxExternalLink } from 'react-icons/rx';

const Projects = () => {
  return (
    <div className='pb-20'>
      <h1 className="text-center text-4xl font-bold">Show Room</h1>
      <div className="grid grid-cols-1 gap-y-8 px-4 pt-4">
        {projectDatas.map((projectData) => (
          <div
            key={projectData.id}
            className="overflow-hidden rounded-xl bg-third_light bg-opacity-75 text-text_light drop-shadow dark:bg-bg_card_pale_dark dark:text-text_dark flex flex-col"
          >
            <div className='bg-accent_dark dark:bg-bg_card_dark w-[25%] h-2 my-4 rounded mx-auto'/>
            <div className="relative">
              <img src={projectData.image} alt="dota" className="block h-full" />
              <div className="absolute inset-0 bg-black opacity-50" />

              <div>
                <h2 className="absolute left-4 top-4 text-2xl font-bold text-accent_dark dark:text-text_dark">
                  {projectData.title}
                </h2>
                <h2 className="absolute right-4 top-4 text-accent_dark dark:text-text_dark text-sm">
                  {projectData.built_date}
                </h2>
                <div className="absolute bottom-4 right-4 flex w-[20%] justify-between">
                  <a href={projectData.github_link} target="_blank" rel="noopener noreferrer">
                    <FiGithub className="text-2xl text-text_dark" />
                  </a>
                  <a href={projectData.live_link} target="_blank" rel="noopener noreferrer">
                    <RxExternalLink className="text-2xl text-text_dark" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-around pt-2">
              {projectData.tech.map((tech) => (
                <span key={id()} className="rounded bg-accent_dark dark:bg-bg_card_dark dark:text-text_dark px-2 py-1 text-text_light">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-around pb-2">
              <button className="rounded-md bg-primary_light px-8 py-2 text-text_light dark:bg-secondary_dark dark:text-text_dark">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
