import React from "react";
import ipipeImage from "images/ipipe.png";
var classNames = require("classnames");
interface Props {
  image: string;
  gifUrl?: string;
  title: string;
  headline: string;
  text?: string;
  stack?: string;
  githubLink?: string;
  websiteLink?: string;
  dataTarget: string;
  privateProj: boolean;
}
export default function Project({
  image,
  gifUrl,
  title,
  headline,
  text,
  stack,
  githubLink,
  websiteLink,
  dataTarget,
  privateProj,
}: Props) {
  const imgClass = classNames({
    "projects-project__img": true,
    "projects-project__img-small": privateProj,
  });

  const overlayClass = classNames({
    "projects-project__img-overlay": true,
    "projects-project__img-overlay-small": privateProj,
  });

  return (
    <>
      {/* project image */}
      <div className="projects-project">
        <img className={imgClass} src={image} alt="" />
        <div
          className={overlayClass}
          data-toggle="modal"
          data-target={"#" + dataTarget}
        >
          <i className="projects-project__img-overlay-icon fas fa-search-plus"></i>
        </div>
      </div>

      {/* project modal */}
      <div
        className="modal fade"
        id={dataTarget}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="projects-project-modal modal-dialog" role="document">
          <div className="projects-project-modal-content modal-content">
            <button
              type="button"
              className="projects-project-modal__close btn btn-secondary"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <h2
              className="projects-project-modal__title"
              id="exampleModalLabel"
            >
              {title}
            </h2>
            <h3 className="projects-project-modal__headline">{headline}</h3>

            {gifUrl ? (
              <video
                className="projects-project-modal__video"
                loop
                autoPlay
                muted
              >
                <source src={gifUrl} type="video/mp4"></source>
                <source src={gifUrl} type="video/ogg"></source>
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                className="projects-project-modal__img"
                src={image}
                alt={title}
              />
            )}

            <div className="projects-project-modal-body modal-body">
              {text && (
                <p className="projects-project-modal-body__text">{text}</p>
              )}

              {stack && <p className="projects-project-modal-stack">{stack}</p>}

              <div className="projects-project-modal-body-links">
                {githubLink && (
                  <>
                    <p>see github</p>
                    <a
                      className="projects-project-modal-body-links__github"
                      href={githubLink}
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </>
                )}

                {websiteLink && (
                  <a
                    className="projects-project-modal-body-links__website"
                    href={websiteLink}
                    target="_blank"
                  >
                    <p>visit website</p>
                  </a>
                )}
              </div>
            </div>

            <div className="projects-project-modal-footer modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
