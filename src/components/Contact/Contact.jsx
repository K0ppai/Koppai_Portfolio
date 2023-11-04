import PropTypes from 'prop-types';
import { titleAnimationVariants } from '@/assets/Animations/Animations';
import { motion } from 'framer-motion';
import { inputAnimationVariants, textAreaAnimationVariants } from '@/assets/Animations/Animations';
import Button from '../Button/Button';

const Contact = ({ darkMode }) => {
  return (
    <section
      className="px-[5vmin] pb-[12vh] dark:text-secondary_pale_light md:px-[13vmax] 2xl:px-[20vmax]"
      id="contact"
    >
      <div className="flex items-center py-8">
        <motion.h1
          className="text-2xl"
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={titleAnimationVariants.viewport}
        >
          Contact Me
        </motion.h1>
        <motion.div
          className="ml-2 h-[1px] w-[12vmin] bg-text_light dark:bg-white md:w-[48px]"
          initial={titleAnimationVariants.initial}
          whileInView={titleAnimationVariants.whileInView}
          viewport={titleAnimationVariants.viewport}
        />
      </div>
      <motion.h2
        className="text-gray-500 dark:text-gray-400"
        initial={titleAnimationVariants.initial}
        whileInView={titleAnimationVariants.whileInView2}
        viewport={titleAnimationVariants.viewport}
      >
        Let&apos;s build something together.
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
          className="h-[250px] p-3 px-3 dark:bg-bg_card_pale_dark"
          name="Message"
          cols="11"
          rows="5"
          placeholder="What's on your mind?"
          required
          resize="none"
          style={{
            userSelect: 'none',
            resize: 'none',
          }}
          initial={textAreaAnimationVariants.initial}
          whileInView={textAreaAnimationVariants.whileInView}
          viewport={textAreaAnimationVariants.viewport}
        />
        <Button
          type="submit"
          label="Start Collaboration"
          className={`${
            darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
          } rounded-md bg-primary_dark py-2 text-lg font-semibold text-secondary_pale_light dark:text-text_light md:w-[49%]`}
          initial={textAreaAnimationVariants.initial}
          whileInView={textAreaAnimationVariants.whileInView}
          viewport={textAreaAnimationVariants.viewport}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        />
      </form>
    </section>
  );
};

export default Contact;

Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
