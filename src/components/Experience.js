import React, { Children } from "react";

const Experience = (props) => {
  return (
    <div className="experience">
      <div className="componentTitle">Experience</div>
      <div className="componentContent">
        <div className="years">
          {props.workedFrom} - {props.workedTo}
        </div>
        <div className="workplaceInfo">
          <div className="position">{props.position}</div>
          <div className="companyInfo">
            {props.company}, {props.city}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
