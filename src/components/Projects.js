import React, { Children } from "react";

const Projects = (props) => {
  const { projects } = props;
  return (
    <div className="projects">
      <div className="componentTitle">Personal Projects</div>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <div className="projectName">{project.name}</div>
            <div className="projectDesc">{project.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
