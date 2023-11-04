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
    originalElement: <SiReact className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiReact className="rotate-in-center text-[400%] text-[#00D8FF] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiRedux className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiRedux className="rotate-in-center text-[400%] text-[#764ABC] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiJavascript className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiJavascript className="rotate-in-center text-[400%] text-[#F7DF1E] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiHtml5 className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiHtml5 className="rotate-in-center text-[400%] text-[#e44f26] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiCss3 className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiCss3 className="rotate-in-center text-[400%] text-[#1572B6] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiTailwindcss className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiTailwindcss className="rotate-in-center text-[400%] text-[#06B6D4] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiBootstrap className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiBootstrap className="rotate-in-center text-[400%] text-[#7E13F8] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiGit className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiGit className="rotate-in-center text-[400%] text-[#dd4c35] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiJest className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiJest className="rotate-in-center text-[400%] text-[#99425b] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiRuby className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiRuby className="rotate-in-center text-[400%] text-[#FF0000] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiRubyonrails className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiRubyonrails className="rotate-in-center text-[400%] text-[#B22222] md:text-[350%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiPostgresql className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiPostgresql className="rotate-in-center text-[400%] text-[#31648c] md:text-[350%]" />
    ),
  },
];

export { techs };
