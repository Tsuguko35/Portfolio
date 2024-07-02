import React from "react";
import "../../styles/contactContent.css";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import ContactForm from "../Reusable/ContactForm";

function ContactContent() {
  return (
    <div id="contactContent" className="contactContent">
      <div className="wrapper">
        <div className="title">
          <p className="main">Contact</p>
          <p className="sub">Let's Work Together</p>
        </div>
        <div className="contact-container">
          <div className="socials">
            <p className="text">
              If you are interested in hiring me or working with me, please feel
              free to contact me via email or through my social media accounts.
              I look forward to hearing from you soon!
            </p>
            <div className="contacts">
              <div className="contact">
                <MdEmail />
                <p>carpio.johnjazpher.dc.3188@gmail.com</p>
              </div>
              <div className="contact">
                <BsTelephoneFill />
                <p>(+63)999 353 7510</p>
              </div>
            </div>
          </div>
          <div className="form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
