import React, { Children } from "react";

const ProjectsCV = (props) => {
  const { project } = props;
  return (
    <div>
      <div className="projectName">{props.name}</div>
      <div className="projectDesc">{props.description}</div>
    </div>
  );
};

export default ProjectsCV;
