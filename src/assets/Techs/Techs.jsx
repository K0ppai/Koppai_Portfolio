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
    originalElement: <SiReact className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: <SiReact className="rotate-in-center text-[17vmin] md:text-[5.5vmax] text-[#00D8FF]" />,
  },
  {
    id: id(),
    originalElement: <SiRedux className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: <SiRedux className="rotate-in-center text-[17vmin] md:text-[5.5vmax] text-[#764ABC]" />,
  },
  {
    id: id(),
    originalElement: <SiJavascript className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: <SiJavascript className="rotate-in-center text-[17vmin] md:text-[5.5vmax] text-[#F7DF1E]" />,
  },
  {
    id: id(),
    originalElement: <SiHtml5 className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: <SiHtml5 className="rotate-in-center text-[17vmin] md:text-[5.5vmax] text-[#e44f26]" />,
  },
  {
    id: id(),
    originalElement: <SiCss3 className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: <SiCss3 className="rotate-in-center text-[17vmin] md:text-[5.5vmax] text-[#1572B6]" />,
  },
  {
    id: id(),
    originalElement: <SiTailwindcss className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: <SiTailwindcss className="rotate-in-center text-[17vmin] md:text-[5.5vmax] text-[#06B6D4]" />,
  },
  {
    id: id(),
    originalElement: <SiBootstrap className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: <SiBootstrap className="rotate-in-center text-[17vmin] md:text-[5.5vmax] text-[#7E13F8]" />,
  },
  {
    id: id(),
    originalElement: <SiGit className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: <SiGit className="rotate-in-center text-[17vmin] md:text-[5.5vmax] text-[#dd4c35]" />,
  },
  {
    id: id(),
    originalElement: <SiJest className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: <SiJest className="rotate-in-center text-[17vmin] md:text-[5.5vmax] text-[#99425b]" />,
  },
];

export { techs };
