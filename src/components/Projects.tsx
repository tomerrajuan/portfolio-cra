import React from "react";
import init from "../assets/images/init.png";
import Project from "./Project";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <div className="projects" id="projects">
        <h1 className="projects__header">PROJECTS</h1>
        <h2 className="projects-container-header">
          Projects at
          <a
            className="projects-container-header__link"
            href="https://www.init.de/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projects-container-header__link-img"
              src={init}
              alt=""
            />
          </a>
          <span>(2020 - 2022)</span>
        </h2>
        <div className="projects-container">
          {projects.map(
            (item: any, idx: React.Key | null | undefined) =>
              item.type === "init" && (
                <Project
                  key={idx}
                  image={item.image}
                  gifUrl={item.gifUrl}
                  title={item.title}
                  headline={item.headline}
                  text={item.text}
                  stack={item.stack}
                  githubLink={item.githubLink}
                  websiteLink={item.websiteLink}
                  dataTarget={item.dataTarget}
                />
              )
          )}
        </div>

        <h2 className="projects-container-header">Private Projects - live</h2>
        <div className="projects-container">
          {projects.map(
            (item: any, idx: React.Key | null | undefined) =>
              item.type === "private-live" && (
                <Project
                  key={idx}
                  image={item.image}
                  gifUrl={item.gifUrl}
                  title={item.title}
                  headline={item.headline}
                  text={item.text}
                  stack={item.stack}
                  githubLink={item.githubLink}
                  websiteLink={item.websiteLink}
                  dataTarget={item.dataTarget}
                />
              )
          )}
        </div>

        <h2 className="projects-container-header">Private Projects</h2>
        <div className="projects-container">
          {projects.map(
            (item: any, idx: React.Key | null | undefined) =>
              item.type === "private" && (
                <Project
                  key={idx}
                  image={item.image}
                  gifUrl={item.gifUrl}
                  title={item.title}
                  headline={item.headline}
                  text={item.text}
                  stack={item.stack}
                  githubLink={item.githubLink}
                  websiteLink={item.websiteLink}
                  dataTarget={item.dataTarget}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}
