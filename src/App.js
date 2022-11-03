import React, { PureComponent } from "react";
import "./styles.css";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: "John",
        lastName: "Smith",
        adress: "Poznan, Poland",
        phoneNum: "+48 123 456 789",
        mail: "example@gmail.com",
        github: "github.com/johnsmith",
        linkedin: "linkedin.com/in/johnsmith",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      projects: {
        name: "CV Application",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      experience: {
        position: "Team lider",
        company: "Best Company LTD",
        city: "New York",
        workedFrom: "2016",
        workedTo: "2022",
      },
      education: {
        schoolName: "WSRH",
        city: "Pzn",
        studies: "Lans&Balans",
        degree: "Ziom",
        studiedFrom: "2013",
        studiedTo: "2016",
      },
    };
  }
  render() {
    const { personalInfo, projects, experience, education } = this.state;
    const printableCV = document.getElementsByClassName("printableCV");
    return (
      <>
        <button onClick={window.print}>Print me!</button>
        <div className="printableCV">
          <PersonalInfo {...personalInfo} />
          <Experience {...experience} />
          <Education {...education} />
          <Projects {...projects} />
        </div>
      </>
    );
  }
}

// https://michalosman.github.io/cv-application/
