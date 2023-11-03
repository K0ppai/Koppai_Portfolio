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
      <SiReact className="rotate-in-center text-[#00350%d:text-[5.5vmax] text-[400%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiRedux className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiRedux className="rotate-in-center text-[#76350%d:text-[5.5vmax] text-[400%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiJavascript className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiJavascript className="rotate-in-center text-[#F7350%d:text-[5.5vmax] text-[400%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiHtml5 className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiHtml5 className="rotate-in-center text-[#e4350%d:text-[5.5vmax] text-[400%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiCss3 className="text-[400%] md:text-[350%]" />,
    hoverElement: <SiCss3 className="rotate-in-center text-[#15350%d:text-[5.5vmax] text-[400%]" />,
  },
  {
    id: id(),
    originalElement: <SiTailwindcss className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiTailwindcss className="rotate-in-center text-[#06350%d:text-[5.5vmax] text-[400%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiBootstrap className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiBootstrap className="rotate-in-center text-[#7E350%d:text-[5.5vmax] text-[400%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiGit className="text-[400%] md:text-[350%]" />,
    hoverElement: <SiGit className="rotate-in-center text-[#dd350%d:text-[5.5vmax] text-[400%]" />,
  },
  {
    id: id(),
    originalElement: <SiJest className="text-[400%] md:text-[350%]" />,
    hoverElement: <SiJest className="rotate-in-center text-[#99350%d:text-[5.5vmax] text-[400%]" />,
  },
  {
    id: id(),
    originalElement: <SiRuby className="text-[400%] md:text-[350%]" />,
    hoverElement: <SiRuby className="rotate-in-center text-[#da350%d:text-[5.5vmax] text-[400%]" />,
  },
  {
    id: id(),
    originalElement: <SiRubyonrails className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiRubyonrails className="rotate-in-center text-[#B2350%d:text-[5.5vmax] text-[400%]" />
    ),
  },
  {
    id: id(),
    originalElement: <SiPostgresql className="text-[400%] md:text-[350%]" />,
    hoverElement: (
      <SiPostgresql className="rotate-in-center text-[#31350%d:text-[5.5vmax] text-[400%]" />
    ),
  },
];

export { techs };
