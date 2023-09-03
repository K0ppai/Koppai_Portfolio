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
    originalElement: <SiReact className="text-[20vmin] md:text-[7vmax]" />,
    hoverElement: <SiReact className="rotate-in-center text-[20vmin] md:text-[7vmax] text-[#00D8FF]" />,
  },
  {
    id: id(),
    originalElement: <SiRedux className="text-[20vmin] md:text-[7vmax]" />,
    hoverElement: <SiRedux className="rotate-in-center text-[20vmin] md:text-[7vmax] text-[#764ABC]" />,
  },
  {
    id: id(),
    originalElement: <SiJavascript className="text-[20vmin] md:text-[7vmax]" />,
    hoverElement: <SiJavascript className="rotate-in-center text-[20vmin] md:text-[7vmax] text-[#F7DF1E]" />,
  },
  {
    id: id(),
    originalElement: <SiHtml5 className="text-[20vmin] md:text-[7vmax]" />,
    hoverElement: <SiHtml5 className="rotate-in-center text-[20vmin] md:text-[7vmax] text-[#e44f26]" />,
  },
  {
    id: id(),
    originalElement: <SiCss3 className="text-[20vmin] md:text-[7vmax]" />,
    hoverElement: <SiCss3 className="rotate-in-center text-[20vmin] md:text-[7vmax] text-[#1572B6]" />,
  },
  {
    id: id(),
    originalElement: <SiTailwindcss className="text-[20vmin] md:text-[7vmax]" />,
    hoverElement: <SiTailwindcss className="rotate-in-center text-[20vmin] md:text-[7vmax] text-[#06B6D4]" />,
  },
  {
    id: id(),
    originalElement: <SiBootstrap className="text-[20vmin] md:text-[7vmax]" />,
    hoverElement: <SiBootstrap className="rotate-in-center text-[20vmin] md:text-[7vmax] text-[#7E13F8]" />,
  },
  {
    id: id(),
    originalElement: <SiGit className="text-[20vmin] md:text-[7vmax]" />,
    hoverElement: <SiGit className="rotate-in-center text-[20vmin] md:text-[7vmax] text-[#dd4c35]" />,
  },
  {
    id: id(),
    originalElement: <SiJest className="text-[20vmin] md:text-[7vmax]" />,
    hoverElement: <SiJest className="rotate-in-center text-[20vmin] md:text-[7vmax] text-[#99425b]" />,
  },
];

export { techs };
