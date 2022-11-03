import React, { Children } from "react";

const Education = (props) => {
  return (
    <div className="education">
      <div className="componentTitle">Education</div>
      {Object.values(props).map((value, index) => {
        return <div key={index}>{value}</div>;
      })}
    </div>
  );
};

export default Education;
