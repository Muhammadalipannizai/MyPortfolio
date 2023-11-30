import React from "react";
import AboutImage from "../../images/about.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-box">
          <div className="about-image-box">
            <img src={AboutImage} />
          </div>
          <div className="about-text-box">
            <p>
              I am a frontend developer with 2+ years of professional experience
              and a bachelor’s degree in software engineering from University of
              Haripur , Pakistan, and recently completed master’s in Smart
              Energy Technology from Østfold University College, Fredrikstad.
              University competent frontend developer with remarkable track
              record in developing and designing website. I have strong
              expertise in frontend technologies, ReactJS, TypeScript and NodeJS. I
              am always enthusiastic about learning new technologies in order to
              grow my IT skills and wish to meet new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
