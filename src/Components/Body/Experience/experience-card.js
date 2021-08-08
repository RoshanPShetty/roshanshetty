import React from "react";
import "./experience-card.css";

function ExperienceCard({ item }) {
  return (
    <div className="experience-card">
      <img src={item.companyLogo} className="company-logo" alt="" />
      <div className="experience-info">
        <label className="company-name">{item.company}</label>
        <div className="company-title">
          <label>{item.title}</label>
        </div>
        <div className="experience-dates">
          <label>{item.dateStart}</label> - <label>{item.dateEnd}</label>
        </div>
        <div className="experience-desc">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
