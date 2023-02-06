import React from "react";

export default function About() {
  return (
    <div className="about" id="about">
      <h1 className="about__header">ABOUT</h1>
      <div className="about-box">
        <div className="about-box-me">
          <h2 className="about-box-me__header">About me,</h2>
          <p className="about-box-me__text">
            Frontend developer who enjoys solving problems using
            resourcefulness, reusable and clean code. I enjoy developing
            applications using Typescript with React with Redux and am
            particularly passionate about developing maps. I know my way around
            essential JavaScript libraries and am not afraid to use them.
          </p>
        </div>
        <div className="about-box-skills">
          <h2 className="about-box-skills__header">Skills</h2>
          <div className="about-box-skills-flex">
            <div className="about-box-skills-flex-item">
              <h3 className="about-box-skills-flex-item__header">
                Programming
              </h3>
              <p className="about-box-skills-flex-item__skill">
                React/Redux, JavaScript, TypeScript, Sass, Html/Css
              </p>
            </div>
            <div className="about-box-skills-flex-item">
              <h3 className="about-box-skills-flex-item__header">
                Frameworks / Tools
              </h3>
              <p className="about-box-skills-flex-item__skill">
                React with Redux, jQuery, Handlebars, Node.js/Express
              </p>
            </div>
            <div className="about-box-skills-flex-item">
              <h3 className="about-box-skills-flex-item__header">Database</h3>
              <p className="about-box-skills-flex-item__skill">
                PostgreSQL, Docker
              </p>
            </div>
            <div className="about-box-skills-flex-item">
              <h3 className="about-box-skills-flex-item__header">
                Development
              </h3>
              <p className="about-box-skills-flex-item__skill">
                Git, Gitlab, Github
              </p>
            </div>
            <div className="about-box-skills-flex-item">
              <h3 className="about-box-skills-flex-item__header">
                Methodologies
              </h3>
              <p className="about-box-skills-flex-item__skill">
                Agile, Atomic-Design, BEM
              </p>
            </div>

            <div className="about-box-skills-flex-item">
              <h3 className="about-box-skills-flex-item__header">
                Soft Skills
              </h3>
              <p className="about-box-skills-flex-item__skill">
                Honest Communicative Team Player Curious Respectful
              </p>
            </div>
            {/* <div className="about-box-skills-flex-item">
              <h3 className="about-box-skills-flex-item__header">Cloudtech</h3>
              <p className="about-box-skills-flex-item__skill">
                Bluehost, FileZilla, Google Developer Console
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
