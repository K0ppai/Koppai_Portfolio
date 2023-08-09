import { matrix } from '@/assets/images/images';
import PropTypes from 'prop-types';
import './AboutMe.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { ReactGif, RemoteGif } from '@/assets/Animations/Animations';

const AboutMe = ({ darkMode }) => {
  
  return (
    <section className="text-lg">
      <div className="h-[30vmin] w-screen bg-gradient-light" />
      <div className="relative -top-[17.5vmin] px-4">
        {/* Profile Image */}
        <figure className="relative ml-3 flex w-[35vmin] flex-col">
          <img
            src={matrix}
            alt="Profile"
            className={`${
              darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
            } w-[35vmin] rounded-[50%] border-4 border-bg_light dark:border-bg_dark`}
          />
          <div className="absolute bottom-[2vmin] right-[4vmin] h-5 w-5 rounded-[50%] bg-green-400" />
        </figure>

        <svg className="mt-3 h-[4vmax] w-[27vmin]">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" id="name" className="font-semibold">
            Koppai
          </text>
        </svg>
        <p className="mt-2">Front-End Web Developer</p>
        <span className="my-1 text-gray-400">psthu.koppai@gmail.com</span>
        {/* Keywords */}
        <div className="my-2 flex">
          <span className="mr-2 rounded-xl bg-bg_card_pale_light px-2 text-primary_dark">
            Front End
          </span>
          <span className="mr-2 rounded-xl bg-secondary_pale_light px-2 text-green-400">
            Remote
          </span>
        </div>
        {/* About Me */}
        <article>
          <div className="flex items-center py-3">
            <h1 className="text-2xl text-gray-400">About Me</h1>
            <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400" />
          </div>
          <p>
            Friends! I&apos;m a self-motivated front-end web developer enthusiastic about creating
            aesthetic websites using React & Redux and TailwindCss. Spending 789+ hours mastering
            algorithms, data structures, and front-end development while simultaneously developing
            projects with JavaScript, React & Redux. Developing skills in remote pair programming
            using GitHub, industry-standard git-flow, and daily standups to communicate and
            collaborate with international remote developers. Built over 9+ projects in just three
            months.
            <br />
            Now I&apos;m learning back-end web development at Microverse, a remote software
            development school located in the US that uses pair programming and project building to
            teach development.
          </p>
        </article>
      </div>
      {/* Services */}
      <article className="bg-bg_card_white_light px-4">
        <div className="flex items-center py-3">
          <h2 className="text-2xl text-gray-400">Services</h2>
          <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400" />
        </div>
        <h2 className="pb-2 text-4xl font-bold">Where Do I Specialize?</h2>
        <p>
          I specialize in helping startups create responsive websites using JavaScript and React.
        </p>
        {/* stats */}
        <div className="my-2 flex items-center justify-around">
          <p>
            <p className="text-3xl font-bold">789+</p>
            <p>Hours Coding</p>
          </p>
          <p>
            <p className="text-3xl font-bold">9+</p>
            <p>Projects In 3 months</p>
          </p>
        </div>
        {/* Specialization */}
        <div className="grid grid-cols-1 gap-y-4">
          <div className="flex flex-col items-center rounded-xl bg-secondary_light py-2">
            <Player src={ReactGif} loop autoplay speed={1.5} className="h-[50vmin] w-[50vmin]" />
            <p>Front End Development</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-secondary_light py-2">
            <Player src={RemoteGif} loop autoplay speed={1.5} className="h-[50vmin] w-[50vmin]" />
            <p>Remote Collaboration</p>
          </div>
        </div>
        {/* Techs */}
        <div>
          
        </div>
      </article>
    </section>
  );
};

export default AboutMe;

AboutMe.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
