import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import PropTypes from 'prop-types';
import Skills from './components/Skills/Skills';

const Home = ({ darkMode }) => {
  return (
    <main>
      <AboutMe darkMode={darkMode} />
      <Skills />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </main>
  );
};

export default Home;

Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
