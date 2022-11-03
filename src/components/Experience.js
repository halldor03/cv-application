import React, { Children } from "react";

const Experience = (props) => {
  return (
    <div className="experience">
      <div className="componentTitle">Experience</div>
      {Object.values(props).map((value, index) => {
        return <div key={index}>{value}</div>;
      })}
    </div>
  );
};

export default Experience;
