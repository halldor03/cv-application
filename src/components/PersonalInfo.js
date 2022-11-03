import React, { Children } from "react";

const PersonalInfo = (props) => {
  return (
    <>
      <div className="name">
        {props.firstName} {props.lastName}
      </div>
      <div className="summary">
        <p className="componentTitle">Summary</p>
        {props.summary}
      </div>
      <div className="personalInfo">
        <div className="componentTitle">Personal Details</div>
        <div className="phoneNum">
          <p>Phone Number</p> {props.phoneNum}
        </div>
        <div className="mail">
          <p>Email</p> {props.mail}
        </div>
        <div className="adress">
          <p>City</p> {props.adress}
        </div>
        <div className="github">
          <p>GitHub</p> {props.github}
        </div>
        <div className="linkedin">
          <p>LinkedIn</p> {props.linkedin}
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
