import React from "react";
import SocialContact from "../../Common/Social-Contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am
          <br></br>
          <span className="info-name">Roshan Praveen Shetty</span>, a Computer
          Science senior graduating in Fall 2021 and starting Masters in Spring
          2022 at the University of Massachusetts, Amherst. I love experimenting
          with the web and the applications of computer vision in various
          fields.
        </div>
        <div className="about-image">
          <img
            src={require("../../../assets/profiles.png").default}
            alt="Profile"
            className="picture"
          ></img>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
