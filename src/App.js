import React, { PureComponent } from "react";
import PersonalInfo from "./components/PersonalInfo";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: "Example",
        lastName: "Smith",
        photo: "My photo",
        adress: "Poznan",
        phoneNum: "+48 123 456 789",
        mail: "example@gmail.com",
        summary: "Hello there!",
      },

      // experience: {
      //   position: "",
      //   company: "",
      //   city: "",
      //   workedFrom: "",
      //   workedTo: "",
      // },
      // education: {
      //   schoolName: "",
      //   city: "",
      //   studies: "",
      //   degree: "",
      //   studiedFrom: "",
      //   studiedTo: "",
      // },
    };
  }
  render() {
    const { personalInfo, experience, education } = this.state;

    return (
      <>
        Hi world
        <PersonalInfo personalInfo={personalInfo} />
      </>
    );
  }
}

// https://michalosman.github.io/cv-application/
