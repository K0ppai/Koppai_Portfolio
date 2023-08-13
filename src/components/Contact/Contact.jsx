const Contact = () => {
  return (
    <section className="bg-secondary_pale_light px-4 dark:text-black" id="contact">
      <div className="flex items-center py-3">
        <h1 className="text-2xl text-gray-400">Contact Me</h1>
        <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400" />
      </div>
      <h2 className="text-4xl font-semibold">Let&apos;s build something together</h2>
      <form action="https://formspree.io/f/moqzrddp" method="post" className="my-6 flex flex-col gap-y-2">
        <input className="p-2 px-3" type="text" placeholder="Full Name" maxLength={30} required />
        <input className="p-2 px-3" type="email" placeholder="Email address" required />
        <textarea className="p-2 px-3" cols="11" rows="5" placeholder="What's on your mind?" required />
        <button type="submit" className="bg-secondary_light py-3">
          Get In Touch
        </button>
      </form>
    </section>
  );
};

export default Contact;
