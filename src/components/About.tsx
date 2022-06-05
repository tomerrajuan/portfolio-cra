import React from "react";

export default function About() {
  return (
    <div className="about" id="about">
      <h1 className="about__header">ABOUT</h1>
      <div className="about-box">
        <div className="about-box-me">
          <h2 className="about-box-me__header">About me,</h2>
          <p className="about-box-me__text">
            A driven JavaScript Frontend developer and React enthusiast. I like
            learning and applying new tools and methods, developing interesting
            and useful applications, and also just enjoying the new things i
            learn. I enjoy seeing errors being solved and when finally something
            is working nice and clear.
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
                JavaScript, TypeScript, Node.js, SASS, HTML, CSS
              </p>
            </div>
            <div className="about-box-skills-flex-item">
              <h3 className="about-box-skills-flex-item__header">
                Frameworks / Tools
              </h3>
              <p className="about-box-skills-flex-item__skill">
                React, Redux, jQuery, Express
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
                Atomic-Design, Bem, Agile
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
