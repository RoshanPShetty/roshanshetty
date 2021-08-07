import React from "react";
import "./body.css";
import About from "./About/index";
import Projects from "./Projects/index";
import Skills from "./Skills/index";
import Experience from "./Experience/index";
import Contact from "./Contact/index";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
