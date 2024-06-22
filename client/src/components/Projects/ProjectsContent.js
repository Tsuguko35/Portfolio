import React from "react";
import "../../styles/projectsContent.css";
import { Link } from "react-router-dom";

import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

import { projects_list } from "../../utils";

function ProjectsContent() {
  return (
    <div id="projectsContent" className="projectsContent">
      <div className="wrapper">
        <div className="project-list">
          {projects_list.map((project, index) => (
            <Tooltip
              html={
                <img
                  className="project-image"
                  src={project.image}
                  alt="hover"
                  style={{ width: "1000px" }}
                />
              }
              position="top"
              trigger="mouseenter"
              animation="scale"
              followCursor
              animateFill={false}
              theme="transparent"
              touchHold={true}
              key={index}
            >
              <Link to={project.link} target="_blank" className="project">
                <p className="project-number"># {index + 1}</p>
                <div className="text-content">
                  <p className="background">Project {index + 1}</p>
                  <p className="title">{project.title}</p>
                </div>
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsContent;
