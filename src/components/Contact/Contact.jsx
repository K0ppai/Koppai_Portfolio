import PropTypes from 'prop-types';
import { titleAnimationVariants } from '@/assets/Animations/Animations';
import { motion } from 'framer-motion';
import { inputAnimationVariants, textAreaAnimationVariants } from '@/assets/Animations/Animations';

const Contact = ({ darkMode }) => {
  return (
    <section
      className="px-[5vmin] pb-[12vh] dark:text-secondary_pale_light md:px-[13vmax]"
      id="contact"
    >
      <div className="flex items-center py-8">
        <motion.h1
          className="text-2xl text-gray-500"
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={titleAnimationVariants.viewport}
        >
          Contact Me
        </motion.h1>
        <motion.div
          className="ml-2 h-[1px] w-[12vmin] bg-gray-500 md:w-[48px]"
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={titleAnimationVariants.viewport}
        />
      </div>
      <motion.h2
        className="text-4xl font-semibold"
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView2}
        viewport={titleAnimationVariants.viewport}
      >
        Let&apos;s build something together
      </motion.h2>
      <form
        action="https://formspree.io/f/moqzrddp"
        method="post"
        className="flex flex-col gap-y-4 py-6"
      >
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-between">
          <motion.input
            className="p-3 px-3 dark:bg-bg_card_pale_dark md:w-[49%]"
            name="FullName"
            type="text"
            placeholder="Full Name"
            maxLength={30}
            required
            initial={inputAnimationVariants.leftInitial}
            whileInView={inputAnimationVariants.whileInView}
            viewport={inputAnimationVariants.viewport}
          />
          <motion.input
            className="p-3 px-3 dark:bg-bg_card_pale_dark md:w-[49%]"
            name="Email"
            type="email"
            placeholder="Email address"
            required
            initial={inputAnimationVariants.rightInitial}
            whileInView={inputAnimationVariants.whileInView}
            viewport={inputAnimationVariants.viewport}
          />
        </div>
        <motion.textarea
          className="p-3 px-3 dark:bg-bg_card_pale_dark"
          name="Message"
          cols="11"
          rows="5"
          placeholder="What's on your mind?"
          required
          initial={textAreaAnimationVariants.initial}
          whileInView={textAreaAnimationVariants.whileInView}
          viewport={textAreaAnimationVariants.viewport}
        />
        <motion.button
          type="submit"
          className={`${
            darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
          } rounded-md bg-primary_dark py-2 text-lg font-semibold text-secondary_pale_light dark:text-text_light md:w-[49%]`}
          initial={textAreaAnimationVariants.initial}
          whileInView={textAreaAnimationVariants.whileInView}
          viewport={textAreaAnimationVariants.viewport}
        >
          Start Collaboration
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;

Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
