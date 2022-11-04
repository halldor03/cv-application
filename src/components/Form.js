import React, { PureComponent } from "react";
import uniqid from "uniqid";
import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";

export default class Form extends PureComponent {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        adress: "",
        phoneNum: "",
        mail: "",
        link1: { name: "", adress: "" },
        link2: { name: "", adress: "" },
        summary: "",
      },
      project: {
        name: "",
        description: "",
        id: uniqid(),
      },
      projects: [],
      experience: {
        position: "Team leader",
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

  handleChange = (e) => {
    const firstNameInput = document.getElementById("firstNameInput");
    const lastNameInput = document.getElementById("lastNameInput");
    const adressInput = document.getElementById("adressInput");
    const phoneNumberInput = document.getElementById("phoneNumberInput");
    const mailInput = document.getElementById("mailInput");
    const link1NameInput = document.getElementById("link1NameInput");
    const link1AdressInput = document.getElementById("link1AdressInput");
    const link2NameInput = document.getElementById("link2NameInput");
    const link2AdressInput = document.getElementById("link2AdressInput");
    const summaryInput = document.getElementById("summaryInput");

    const projectNameInput = document.getElementById("projectNameInput");
    const projectDescriptionInput = document.getElementById(
      "projectDescriptionInput"
    );
    this.setState({
      personalInfo: {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        adress: adressInput.value,
        phoneNum: phoneNumberInput.value,
        mail: mailInput.value,
        link1: { name: link1NameInput.value, adress: link1AdressInput.value },
        link2: { name: link2NameInput.value, adress: link2AdressInput.value },
        summary: summaryInput.value,
      },
      project: {
        name: projectNameInput.value,
        description: projectDescriptionInput.value,
        id: this.state.project.id,
      },
    });
  };

  addProject = (e) => {
    console.table(this.state.projects);
    e.preventDefault();
    this.setState({
      projects: this.state.projects.concat(this.state.project),
      project: {
        id: uniqid(),
      },
    });
    console.table(this.state.projects);
  };

  render() {
    const { personalInfo, projects, project, experience, education } =
      this.state;

    return (
      <>
        <form className="mainForm">
          {/* PERSONAL INFO */}
          <fieldset>
            <legend>Personal Information</legend>
            <input
              type="text"
              placeholder="First Name"
              id="firstNameInput"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastNameInput"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Adress"
              id="adressInput"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Phone number"
              id="phoneNumberInput"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Mail"
              id="mailInput"
              onChange={this.handleChange}
            />
            <div className="link1">
              <input
                type="text"
                placeholder="Link 1 name"
                id="link1NameInput"
                onChange={this.handleChange}
              />
              <input
                type="text"
                placeholder="Link 1 adress"
                id="link1AdressInput"
                onChange={this.handleChange}
              />
            </div>
            <div className="link2">
              <input
                type="text"
                placeholder="Link 2 name"
                id="link2NameInput"
                onChange={this.handleChange}
              />
              <input
                type="text"
                placeholder="Link 2 adress"
                id="link2AdressInput"
                onChange={this.handleChange}
              />
            </div>
            <input
              type="text"
              placeholder="Summary"
              id="summaryInput"
              onChange={this.handleChange}
            />
          </fieldset>

          {/* PERSONAL PROJECTS */}
          <fieldset>
            <legend>Personal Projects</legend>
            <input
              type="text"
              placeholder="Project name"
              id="projectNameInput"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Project description"
              id="projectDescriptionInput"
              onChange={this.handleChange}
            />
            <button onClick={this.addProject}>Add project</button>
          </fieldset>

          <button onClick={window.print}>Print me!</button>
        </form>

        <div className="printableCV">
          <PersonalInfo {...personalInfo} />
          <Projects projects={projects} />
          <Experience {...experience} />
          <Education {...education} />
        </div>
      </>
    );
  }
}
