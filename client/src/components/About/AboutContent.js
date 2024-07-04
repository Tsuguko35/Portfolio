import React from "react";
import "../../styles/aboutContent.css";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiMongodb, SiPhpmyadmin, SiFirebase } from "react-icons/si";

function AboutContent() {
  return (
    <div id="aboutContent" className="aboutContent">
      <div className="wrapper">
        <div className="about-details">
          <div className="image">
            <div className="img-holder">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719105225/Portfolio_Files/hmppayoiaarwqdk43ks5.webp"
                alt="Pofile Picture"
                draggable={false}
              />
            </div>
          </div>
          <div className="details">
            <div className="detail-header">
              <p className="title">About</p>
              <p className="label">A little bit about who I am</p>
            </div>
            <div className="image">
              <div className="img-holder">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719105225/Portfolio_Files/hmppayoiaarwqdk43ks5.webp"
                  alt="Pofile Picture"
                  draggable={false}
                />
              </div>
            </div>
            <div className="details-content">
              <p className="paragraph">
                I am a passionate Full Stack Developer with expertise in{" "}
                <span className="highlight"> HTML</span>,{" "}
                <span className="highlight">CSS</span>,{" "}
                <span className="highlight">JavaScript</span>,{" "}
                <span className="highlight">React.js</span>,
                <span className="highlight">Node.js</span>,{" "}
                <span className="highlight">PHP</span>,{" "}
                <span className="highlight">MySQL</span>, and{" "}
                <span className="highlight">MongoDB</span>. My journey in web
                development has equipped me with a robust understanding of both
                front-end and back-end technologies, enabling me to create
                dynamic, responsive, and user-friendly web applications.
              </p>

              <p className="paragraph">
                With a strong foundation in front-end technologies, I build
                intuitive interfaces, while my back-end skills ensure efficient
                server-side logic and secure data management. I am always eager
                to learn and stay updated with the latest industry trends, ready
                to tackle innovative projects and deliver creative solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="skills-container">
          <p className="title">SKILLS</p>
          <div className="skills-group">
            <div className="skill">
              <FaHtml5 />
              <p>HTML</p>
            </div>
            <div className="skill">
              <FaCss3 />
              <p>CSS</p>
            </div>
            <div className="skill">
              <IoLogoJavascript />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <FaReact />
              <p>React.js</p>
            </div>
            <div className="skill">
              <FaNodeJs />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <FaPhp />
              <p>PHP</p>
            </div>
            <div className="skill">
              <SiMysql />
              <p>MySQL</p>
            </div>
            <div className="skill">
              <SiMongodb />
              <p>MongoDB</p>
            </div>
            <div className="skill">
              <SiPhpmyadmin />
              <p>phpMyAdmin</p>
            </div>
            <div className="skill">
              <SiFirebase />
              <p>Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
