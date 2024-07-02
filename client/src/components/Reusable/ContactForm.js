import React from "react";
import "../../styles/contactForm.css";

function ContactForm() {
  return (
    <form id="contactForm" className="contactForm">
      <div className="custom-input">
        <p className="label">Name</p>
        <input type="text" placeholder="Your name" />
      </div>
      <div className="custom-input">
        <p className="label">Email Address</p>
        <input type="text" placeholder="Your email address" />
      </div>
      <div className="custom-input">
        <p className="label">Message</p>
        <textarea name="" id="" placeholder="Your message here..."></textarea>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ContactForm;
