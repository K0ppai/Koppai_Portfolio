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
  SiPostman,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';
import { v4 as id } from 'uuid';

const techs = [
  {
    id: id(),
    originalElement: <SiReact className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiReact className='rotate-in-center text-[400%] text-[#00D8FF] md:text-[350%]' />
    ),
    title: 'React',
  },
  {
    id: id(),
    originalElement: <SiRedux className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiRedux className='rotate-in-center text-[400%] text-[#764ABC] md:text-[350%]' />
    ),
    title: 'Redux',
  },
  {
    id: id(),
    originalElement: <SiJavascript className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiJavascript className='rotate-in-center text-[400%] text-[#F7DF1E] md:text-[350%]' />
    ),
    title: 'Javascript',
  },
  {
    id: id(),
    originalElement: <SiHtml5 className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiHtml5 className='rotate-in-center text-[400%] text-[#e44f26] md:text-[350%]' />
    ),
    title: 'HTML5',
  },
  {
    id: id(),
    originalElement: <SiCss3 className='text-[400%] md:text-[350%]' />,
    hoverElement: <SiCss3 className='rotate-in-center text-[400%] text-[#1572B6] md:text-[350%]' />,
    title: 'CSS3',
  },
  {
    id: id(),
    originalElement: <SiTailwindcss className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiTailwindcss className='rotate-in-center text-[400%] text-[#06B6D4] md:text-[350%]' />
    ),
    title: 'Tailwind CSS',
  },
  {
    id: id(),
    originalElement: <SiBootstrap className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiBootstrap className='rotate-in-center text-[400%] text-[#7E13F8] md:text-[350%]' />
    ),
    title: 'Bootstrap',
  },
  {
    id: id(),
    originalElement: <SiGit className='text-[400%] md:text-[350%]' />,
    hoverElement: <SiGit className='rotate-in-center text-[400%] text-[#dd4c35] md:text-[350%]' />,
    title: 'Git',
  },
  {
    id: id(),
    originalElement: <SiJest className='text-[400%] md:text-[350%]' />,
    hoverElement: <SiJest className='rotate-in-center text-[400%] text-[#99425b] md:text-[350%]' />,
    title: 'Jest',
  },
  {
    id: id(),
    originalElement: <SiRuby className='text-[400%] md:text-[350%]' />,
    hoverElement: <SiRuby className='rotate-in-center text-[400%] text-[#FF0000] md:text-[350%]' />,
    title: 'Ruby',
  },
  {
    id: id(),
    originalElement: <SiRubyonrails className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiRubyonrails className='rotate-in-center text-[400%] text-[#B22222] md:text-[350%]' />
    ),
    title: 'Ruby on Rails',
  },
  {
    id: id(),
    originalElement: <SiPostgresql className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiPostgresql className='rotate-in-center text-[400%] text-[#31648c] md:text-[350%]' />
    ),
    title: 'PostgreSQL',
  },
  {
    id: id(),
    originalElement: <SiPostman className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiPostman className='rotate-in-center text-[400%] text-[#ff6c37] md:text-[350%]' />
    ),
    title: 'Postman',
  },
  {
    id: id(),
    originalElement: (
      <SiMongodb className='rounded-full border border-white bg-black text-[400%] text-white dark:bg-white dark:text-black md:text-[350%]' />
    ),
    hoverElement: (
      <SiMongodb
        className='rotate-in-center rounded-full bg-[#001e2b] text-[400%] text-[#08ef69] 
      md:text-[350%]'
      />
    ),
    title: 'MongoDB',
  },
  {
    id: id(),
    originalElement: (
      <figure>
        <SiExpress className='rounded-full border border-white bg-black p-3 text-[400%] text-white dark:bg-white dark:text-black md:text-[350%]' />
      </figure>
    ),
    hoverElement: (
      <SiExpress
        className='rotate-in-center dark:bg-bl title:ack rounded-full bg-white p-3 text-[400%]
      text-black dark:bg-black dark:text-white md:text-[350%]'
      />
    ),
    title: 'Express',
  },
  {
    id: id(),
    originalElement: <SiNodedotjs className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiNodedotjs className='rotate-in-center text-[400%] text-[#5fa04e] md:text-[350%]' />
    ),
    title: 'Node.js',
  },
  {
    id: id(),
    originalElement: <SiTypescript className='text-[400%] md:text-[350%]' />,
    hoverElement: (
      <SiTypescript className='rotate-in-center text-[400%] text-[#2f74c0] md:text-[350%]' />
    ),
    title: 'Typescript',
  },
  {
    id: id(),
    originalElement: <SiNextdotjs className='text-[400%] md:text-[350%]' />,
    hoverElement: <SiNextdotjs className='rotate-in-center text-[400%] md:text-[350%]' />,
    title: 'Next.js',
  },

  {
    //rspec
    id: id(),
    originalElement: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 512 512'
        className='text-[400%] md:text-[350%]'
        stroke='currentColor'
        fill='currentColor'
      >
        <path d='m322.384 145.576l68.549 70.284l-17.354 31.67l-119.31 149.246L134.96 251.002l-17.354-35.142l68.549-70.284h136.23zM300.275 36.01L274.6 69.955C398.01 82.03 472.097 207.912 433.042 318.339l19.875 39.53l39.495-2.99c64.934-154.268-38.1-336.945-212.732-353.124l20.595 34.255zM17.586 348.692C-48.537 180.316 80.158-5.433 263.924.755l20.696 34.423l-25.624 33.876C124.323 66.643 31.098 205.172 83.364 328.798l-42.77-11.221l-23.008 31.115zm468.708 19.675l-41.073 3.108l-18.668-37.127c-54.109 124.883-250.588 162.181-335.908 9.787l-44.839-11.764l-22.3 30.16c104.505 213.922 381.574 180.62 462.788 5.836z'></path>
      </svg>
    ),
    hoverElement: (
      <svg
        xmlns='h
        title:ttp://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 128 128'
        className='rotate-in-center text-[400%] md:text-[350%]'
      >
        <path
          fill='#6de1fa'
          d='M47.305 125.883c-16.121-4.227-28.703-13.656-38.063-28.528c-3.441-5.464-3.5-7.394-.34-11.25c2.383-2.91 2.52-2.94 7.993-1.675c4.394 1.011 6.003 1.992 7.648 4.652c3.195 5.168 12.902 13.867 18.746 16.797c18.047 9.047 40.035 5.32 54.195-9.184c3.082-3.152 6.227-7.238 6.989-9.082c.761-1.84 1.734-3.347 2.16-3.347c.426 0 1.668 1.976 2.758 4.39l1.976 4.39l5.215-.616c6.09-.723 6.094-.551.106 8.472c-7.723 11.633-22.52 21.778-37.18 25.489c-8.606 2.18-22.809 1.953-32.203-.508zm0 0'
        ></path>
        <path
          fill='#fe405f'
          d='M48.023 80.945C39.75 70.902 32 60.758 30.797 58.395l-2.192-4.29l8.875-8.917l8.872-8.922h34.23l8.93 8.98l8.933 8.98l-2.406 4.087c-2.902 4.925-31.195 40.757-32.242 40.835c-.406.028-7.504-8.164-15.774-18.203zm0 0'
        ></path>
        <path
          fill='#97f0ff'
          d='M111.156 84.793c-2.094-4.313-2.23-5.422-1.164-9.645c.66-2.625.996-9.027.75-14.23c-.379-7.887-1.008-10.582-3.8-16.254c-6.52-13.246-17.31-22.418-30.59-26.016l-6.907-1.867l2.782-3.648c2.742-3.594 2.753-3.703.964-7.457c-1-2.094-1.558-4.063-1.242-4.38C73.102.142 85.02 3.5 92.68 7.142c10.958 5.21 22.856 17.03 28.243 28.058c7.086 14.512 8.746 29.403 4.941 44.278c-1.172 4.593-2.254 8.449-2.398 8.566c-.145.121-2.442.531-5.106.918l-4.836.703zm0 0'
        ></path>
        <path
          fill='#40daf4'
          d='M3.328 85.137c-4.121-10.84-4.195-29.52-.16-41.403c8.25-24.3 30.605-41.785 55.5-43.41l8-.523l2.445 4.394l2.45 4.395l-2.934 4.082c-2.73 3.797-3.473 4.164-10.766 5.297c-10.836 1.687-18.75 5.695-26.472 13.422c-13.059 13.058-16.801 28.855-11.485 48.5c.63 2.332.442 2.496-2.14 1.867l-5.286-1.285c-1.949-.473-3.035.222-5.285 3.386L4.36 87.848zm0 0'
        ></path>
      </svg>
    ),
    title: 'RSpec',
  },
];

export { techs };
