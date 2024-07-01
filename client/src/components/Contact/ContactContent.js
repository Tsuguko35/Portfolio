import React from "react";
import "../../styles/contactContent.css";

function ContactContent() {
  return (
    <div id="contactContent" className="contactContent">
      <div className="wrapper">
        <div className="title">
          <p className="main">Contact</p>
          <p className="sub">Let's Work Together</p>
        </div>
        <div className="contact-container">
          <div className="socials"></div>
          <div className="form"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
