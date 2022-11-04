import React, { Children } from "react";

const Education = (props) => {
  return (
    <div className="education">
      <div className="componentTitle">Education</div>
      <div className="componentContent">
        <div className="years">
          {props.studiedFrom} - {props.studiedTo}
        </div>
        <div className="schoolInfo">
          <div className="schoolName">{props.schoolName}</div>
          <div className="fieldOfStudy">
            <p>Degree: {props.degree}</p>
            <p>Field of study: {props.studies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
