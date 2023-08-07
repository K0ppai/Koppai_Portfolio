const AboutMe = () => {
  return (
    <div className="h-screen">
      <div className="flex h-screen flex-col items-center justify-start px-2">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" id="name" className="font-semibold">
            Koppai
          </text>
        </svg>
        <p className="text-center font-bold text-text_dark">
          Front-End Developer <br />
          Ready for Startup Collaboration⚡
        </p>
      </div>
      <div>
        <h1>Why Hire Me?</h1>
      </div>
    </div>
  );
};

export default AboutMe;
