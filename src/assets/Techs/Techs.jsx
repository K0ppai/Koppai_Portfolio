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
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
} from 'react-icons/si';
import { v4 as id } from 'uuid';

const techs = [
  {
    id: id(),
    originalElement: <SiReact className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiReact className="rotate-in-center text-[17vmin] text-[#00D8FF] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiRedux className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiRedux className="rotate-in-center text-[17vmin] text-[#764ABC] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiJavascript className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiJavascript className="rotate-in-center text-[17vmin] text-[#F7DF1E] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiHtml5 className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiHtml5 className="rotate-in-center text-[17vmin] text-[#e44f26] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiCss3 className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiCss3 className="rotate-in-center text-[17vmin] text-[#1572B6] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiTailwindcss className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiTailwindcss className="rotate-in-center text-[17vmin] text-[#06B6D4] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiBootstrap className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiBootstrap className="rotate-in-center text-[17vmin] text-[#7E13F8] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiGit className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiGit className="rotate-in-center text-[17vmin] text-[#dd4c35] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiJest className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiJest className="rotate-in-center text-[17vmin] text-[#99425b] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiRuby className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiRuby className="rotate-in-center text-[17vmin] text-[#FF0000] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiRubyonrails className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiRubyonrails className="rotate-in-center text-[17vmin] text-[#B22222] md:text-[5.5vmax]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiPostgresql className="text-[17vmin] md:text-[5.5vmax]" />,
    hoverElement: (
      <SiPostgresql className="rotate-in-center text-[17vmin] text-[#31648c] md:text-[5.5vmax]" />
    ),
  },
];

export { techs };
