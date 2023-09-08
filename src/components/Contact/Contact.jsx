import PropTypes from 'prop-types';

const Contact = ({ darkMode }) => {
  return (
    <section
      className="px-[5vmin] pb-[12vh] dark:text-secondary_pale_light md:px-[10vmax]"
      id="contact"
    >
      <div className="flex items-center py-8">
        <h1 className="text-2xl text-gray-500">Contact Me</h1>
        <div className="ml-2 h-[1px] w-[12vmin] bg-gray-500 md:w-[48px]" />
      </div>
      <h2 className="text-4xl font-semibold">Let&apos;s build something together</h2>
      <form
        action="https://formspree.io/f/moqzrddp"
        method="post"
        className="flex md:w-[50%] flex-col gap-y-4 py-6"
      >
        <input
          className="p-3 px-3 dark:bg-bg_card_pale_dark"
          name="FullName"
          type="text"
          placeholder="Full Name"
          maxLength={30}
          required
        />
        <input
          className="p-3 px-3 dark:bg-bg_card_pale_dark"
          name="Email"
          type="email"
          placeholder="Email address"
          required
        />
        <textarea
          className="p-3 px-3 dark:bg-bg_card_pale_dark"
          name="Message"
          cols="11"
          rows="5"
          placeholder="What's on your mind?"
          required
        />
        <button
          type="submit"
          className={`${
            darkMode ? 'shadow-drop-dark' : 'shadow-drop-light'
          } w-[40%] rounded-md bg-primary_dark py-2 text-lg font-semibold text-secondary_pale_light dark:text-text_light md:w-[35%]`}
        >
          Get In Touch
        </button>
      </form>
    </section>
  );
};

export default Contact;

Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
