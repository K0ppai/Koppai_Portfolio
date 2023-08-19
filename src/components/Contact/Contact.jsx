import PropTypes from 'prop-types';

const Contact = ({ darkMode }) => {
  return (
    <section
      className="bg-secondary_pale_light px-4 pb-20 pt-10 dark:bg-bg_card_dark dark:text-secondary_pale_light md:px-[20vmax]"
      id="contact"
    >
      <div className="flex items-center py-8">
        <h1 className="text-2xl text-gray-400">Contact Me</h1>
        <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400" />
      </div>
      <h2 className="text-4xl font-semibold">Let&apos;s build something together</h2>
      <form
        action="https://formspree.io/f/moqzrddp"
        method="post"
        className="my-6 flex flex-col gap-y-4"
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
          } rounded-full bg-secondary_light py-4 font-semibold dark:bg-secondary_dark`}
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
