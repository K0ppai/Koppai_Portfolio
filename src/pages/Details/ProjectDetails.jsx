import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

// Datas
import projectDatas from '../../data/ProjectDatas';
import Header from './components/Header';
import ProjectImage from './components/ProjectImage';
import ProjectTechStacks from './components/ProjectTechStacks';
import ProjectIntroduction from './components/ProjectIntroduction';
import ProjectPurpose from './components/ProjectPurpose';
import ProjectSpotlight from './components/ProjectSpotlight';
import ProjectLessonLearned from './components/ProjectLessonLearned';
import ProjectNavButtons from './components/ProjectNavButtons';

const ProjectDetails = ({ darkMode }) => {
  const { endpoint } = useParams();
  const currentProjectData = projectDatas.find((project) => project.end_point === endpoint);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='px-4 pb-[20vh] tracking-wider md:px-[10vmax] md:text-justify lg:px-[22vmax]'>
      <Header currentProjectData={currentProjectData} />
      <ProjectImage currentProjectData={currentProjectData} darkMode={darkMode} />
      <ProjectTechStacks currentProjectData={currentProjectData} />
      <ProjectIntroduction currentProjectData={currentProjectData} />
      <ProjectPurpose currentProjectData={currentProjectData} />
      <ProjectSpotlight currentProjectData={currentProjectData} />
      <ProjectLessonLearned currentProjectData={currentProjectData} />
      <ProjectNavButtons currentProjectData={currentProjectData} />
    </section>
  );
};

export default ProjectDetails;

ProjectDetails.propTypes = {
  darkMode: PropTypes.bool,
};
