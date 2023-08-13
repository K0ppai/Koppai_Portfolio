import {
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJest,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiGit,
} from 'react-icons/si';
import { v4 as id } from 'uuid';

const techs = [
  {
    id: id(),
    originalElement: <SiReact className="text-[20vmin]" />,
    hoverElement: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="react"
        className="rotate-in-center w-[20vmin]"
      />
    ),
  },
  {
    id: id(),
    originalElement: <SiRedux className="text-[20vmin]" />,
    hoverElement: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        alt="redux"
        className="rotate-in-center w-[20vmin]"
      />
    ),
  },
  {
    id: id(),
    originalElement: <SiJavascript className="text-[20vmin]" />,
    hoverElement: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
        alt="javascript"
        className="rotate-in-center w-[20vmin]"
      />
    ),
  },
  {
    id: id(),
    originalElement: <SiHtml5 className="text-[20vmin]" />,
    hoverElement: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
        alt="html5"
        className="rotate-in-center w-[20vmin]"
      />
    ),
  },
  {
    id: id(),
    originalElement: <SiCss3 className="text-[20vmin]" />,
    hoverElement: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
        alt="css3"
        className="rotate-in-center w-[20vmin]"
      />
    ),
  },
  {
    id: id(),
    originalElement: <SiTailwindcss className="text-[20vmin]" />,
    hoverElement: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        alt="tailwindcss"
        className="rotate-in-center w-[20vmin]"
      />
    ),
  },
  {
    id: id(),
    originalElement: <SiBootstrap className="text-[20vmin]" />,
    hoverElement: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
        alt="bootstrap"
        className="rotate-in-center w-[20vmin]"
      />
    ),
  },
  {
    id: id(),
    originalElement: <SiGit className="text-[20vmin]" />,
    hoverElement: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
        alt="github"
        className="rotate-in-center w-[20vmin]"
      />
    ),
  },
  {
    id: id(),
    originalElement: <SiJest className="text-[20vmin]" />,
    hoverElement: <SiJest className="rotate-in-center text-[20vmin] text-[#99425b]" />,
  },
];

export { techs };
