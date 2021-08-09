import React from "react";
import { SocialData } from "../../Data/social";
import "./social-contact.css";

function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} target="_blank" rel="noreferrer noopener">
            <div className="social-icon-div">
              <img src={item.icon} alt="" className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
