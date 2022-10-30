import React from "react";

const PersonalInfo = (props) => {
  const { personalInfo } = props;

  return (
    // <ol>
    //   {personalInfo.map((info) => {
    //     return <li>{personalInfo.info}</li>;
    //   })}
    // </ol>
    <div>{personalInfo}</div>
  );
};

export default PersonalInfo;
