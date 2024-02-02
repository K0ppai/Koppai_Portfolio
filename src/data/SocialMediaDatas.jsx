import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoDiscordAlt,
  BiLogoWhatsapp,
  BiLogoTwitter,
} from 'react-icons/bi';

const iconClassname =
  'rounded-full bg-bg_light bg-opacity-90 p-3 text-[50px] md:text-[60px] text-primary_dark backdrop-blur-sm dark:bg-bg_dark dark:bg-opacity-90';

export const socialMedias = [
  {
    id: 1,
    url: 'mailto:psthu.koppai@gmail.com',
    icon: <BiLogoGmail className={iconClassname} />,
  },
  {
    id: 2,
    url: 'https://wa.me/+959796679793',
    icon: <BiLogoWhatsapp className={iconClassname} />,
  },
  {
    id: 3,
    url: 'https://discord.com/users/665938913256275980',
    icon: <BiLogoDiscordAlt className={iconClassname} />,
  },
  {
    id: 4,
    url: 'https://twitter.com/_koppai_',
    icon: <BiLogoTwitter className={iconClassname} />,
  },
  {
    id: 5,
    url: 'https://www.linkedin.com/in/paingsoe-thu/',
    icon: <BiLogoLinkedin className={iconClassname} />,
  },
  {
    id: 6,
    url: 'https://github.com/K0ppai',
    icon: <BiLogoGithub className={iconClassname} />,
  },
];
