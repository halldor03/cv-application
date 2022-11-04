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
          <p>Adress</p> {props.adress}
        </div>
        <div className="link1">
          <p>{props.link1.name}</p> {props.link1.adress}
        </div>
        <div className="link2">
          <p>{props.link2.name}</p> {props.link2.adress}
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
