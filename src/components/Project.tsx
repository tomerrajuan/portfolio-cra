import React from "react";
import ipipeImage from "images/ipipe.png";

interface Props {
  image: string;
  gifUrl?: string;
  title: string;
  headline: string;
  text: string;
  link: string;
  dataTarget: string;
}
export default function Project({
  image,
  gifUrl,
  title,
  headline,
  text,
  link,
  dataTarget,
}: Props) {
  console.log("gif: ", gifUrl);

  return (
    <>
      <div className="projects-project">
        <img className="projects-project__img" src={image} alt="" />

        <div
          className="projects-project__img-overlay"
          data-toggle="modal"
          data-target={"#" + dataTarget}
        >
          <i className="projects-project__img-overlay-icon fas fa-search-plus"></i>
        </div>
      </div>
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
              <img className="projects-project-modal__img" src={image} alt="" />
            )}
            <div className="projects-project-modal-body modal-body">
              <p className="projects-project-modal-body__text">{text}</p>
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
