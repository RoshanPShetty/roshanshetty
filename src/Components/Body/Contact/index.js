import React from "react";
import "./contact.css";
import Separator from "../../Common/Separator/index";
import SocialContact from "../../Common/Social-Contact/index";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch?</p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            download
            href={
              require("../../../assets/Shetty_Roshan_Praveen_Resume.pdf")
                .default
            }
          >
            <i class="fi-rr-download"></i>Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
