import React, { useEffect } from "react";
import { AboutContent } from "../components";

function About() {
  useEffect(() => {
    document.title = "Jazpher Carpio | About";
  }, []);
  return (
    <div>
      <AboutContent />
    </div>
  );
}

export default About;
