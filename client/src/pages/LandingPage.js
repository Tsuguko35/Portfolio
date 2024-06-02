import React, { useEffect } from "react";
import "../styles/landingPage.css";

function LandingPage() {
  useEffect(() => {
    document.title = "Jazpher Carpio | Home";
  }, []);
  return (
    <div id="landingPage" className="landingPage">
      <div className="wrapper">
        <p className="text-size-sub-header">Hello I'm,</p>
        <p className="text-size-header">Jazpher Carpio</p>
      </div>
    </div>
  );
}

export default LandingPage;
