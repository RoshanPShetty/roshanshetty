import React from "react";
import "./experience.css";
import Separator from "../../Common/Separator/index";
import { ExperienceData } from "../../Data/experience";
import ExperienceCard from "./experience-card";

function Experience() {
  const data = ExperienceData;
  return (
    <div className="experience">
      <Separator />
      <label className="section-title">Experience</label>
      <div className="experience-list">
        {data.map((item) => {
          return <ExperienceCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Experience;
