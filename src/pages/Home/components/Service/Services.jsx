import React from 'react';

const Services = () => {
  return (
    <div>
      {/* Services */}
      <article className="bg-bg_card_white_light px-4">
        <div className="flex items-center py-3">
          <h2 className="text-2xl text-gray-400">Services</h2>
          <div className="ml-2 h-[1px] w-[12vmin] bg-gray-400" />
        </div>
        <h3 className="pb-2 text-4xl font-bold">Where Do I Specialize?</h3>
        <p>
          I specialize in helping startups create responsive websites using JavaScript and React.
        </p>
        stats
        <div className="my-2 flex items-center justify-around">
          <p>
            <p className="text-3xl font-bold">789+</p>
            <p>Hours Coding</p>
          </p>
          <p>
            <p className="text-3xl font-bold">9+</p>
            <p>Projects In 3 months</p>
          </p>
        </div>
        Specialization
        <div className="grid grid-cols-1 gap-y-4">
          <div className="flex flex-col items-center rounded-xl bg-secondary_light py-2">
            <Player src={ReactGif} loop autoplay speed={1.5} className="h-[50vmin] w-[50vmin]" />
            <p>Front End Development</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-secondary_light py-2">
            <Player src={RemoteGif} loop autoplay speed={1.5} className="h-[50vmin] w-[50vmin]" />
            <p>Remote Collaboration</p>
          </div>
        </div>
        Techs
      </article>
    </div>
  );
};

export default Services;
