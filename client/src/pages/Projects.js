import React, { useEffect } from "react";
import { ProjectsContent } from "../components";

function Projects() {
  useEffect(() => {
    document.title = "Jazpher Carpio | Projects";
  }, []);
  return (
    <div>
      <ProjectsContent />
    </div>
  );
}

export default Projects;
