import ReactGif from './React.json';
import RemoteGif from './Remote.json';

const titleAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.5 },
  },
  whileInView2: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 1 },
  },
  viewport: {
    once: false,
  },
};

const liAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.3,
    },
  }),
  viewport: {
    once: false,
  },
};

const inputAnimationVariants = {
  leftInitial: {
    opacity: 0,
    x: -100,
  },
  rightInitial: {
    opacity: 0,
    x: 100,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  viewport: {
    once: true,
  },
};

const textAreaAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  viewport: {
    once: true,
  },
};
export { ReactGif, RemoteGif, titleAnimationVariants, liAnimationVariants, inputAnimationVariants, textAreaAnimationVariants };
