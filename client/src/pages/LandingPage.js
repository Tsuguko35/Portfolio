import React, { useEffect } from "react";
import "../styles/landingPage.css";
import { MdOutlineFileDownload, MdWavingHand } from "react-icons/md";
import { IoRocket } from "react-icons/io5";
import { Link } from "react-router-dom";

function LandingPage() {
  useEffect(() => {
    document.title = "Jazpher Carpio | Home";
  }, []);
  return (
    <div id="landingPage" className="landingPage">
      <div className="wrapper">
        <div className="hero">
          <div className="flex-column">
            <p className="text-size-sub-header">Hello I'm,</p>
            <p className="text-size-header">Jazpher Carpio</p>
            <p className="text-cursive">Web Developer</p>
          </div>
        </div>

        <div className="actions">
          <div className="action">
            <MdWavingHand />
            <Link to={"/Contact"} className="action-text">
              Contact Me!
            </Link>
          </div>
          <div className="action">
            <IoRocket />
            <Link to={"/Projects"} className="action-text">
              See my works
            </Link>
          </div>
          <div className="action">
            <MdOutlineFileDownload />
            <p className="action-text">Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
