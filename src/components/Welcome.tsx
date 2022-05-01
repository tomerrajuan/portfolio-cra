import React from "react";
import profile from "../assets/images/profile.jpeg";

export default function Welcome() {
  return (
    <div className="welcome">
      <img className="welcome__image" src={profile} alt="" />
      <h1 className="welcome__name">Tomer Rajuan</h1>
      <p id="welcome__text" className="welcome__text">
        Frontend Web Developer - React enthusiast
      </p>
    </div>
  );
}
