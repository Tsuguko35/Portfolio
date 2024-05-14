import React, { useEffect } from "react";
import "../styles/landingPage.css";

function LandingPage() {
  useEffect(() => {
    document.title = "Jazpher Carpio | Home";
  }, []);
  return (
    <div id="landingPage" className="landingPage">
      <div className="wrapper">
        <p>Hello</p>
      </div>
    </div>
  );
}

export default LandingPage;
