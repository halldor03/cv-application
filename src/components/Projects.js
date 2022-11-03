import React, { Children } from "react";

const Projects = (props) => {
  return (
    <div className="projects">
      <div className="componentTitle">Personal Projects</div>
      {Object.values(props).map((value, index) => {
        return <div key={index}>{value}</div>;
      })}
    </div>
  );
};

export default Projects;
