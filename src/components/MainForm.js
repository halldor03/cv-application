import React, { PureComponent } from "react";
import uniqid from "uniqid";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import RenderPreview from "./RenderPreview";

export default class MainForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        adress: "",
        phoneNum: "d",
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
      projects: [
        { name: "111", description: "111desc", id: uniqid() },
        // { name: "222", description: "222desc", id: uniqid() },
        // { name: "333", description: "333desc", id: uniqid() },
        // { name: "444", description: "444desc", id: uniqid() },
        // { name: "555", description: "555desc", id: uniqid() },
      ],
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

  handleChangePersonalInfo = (e) => {
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
    });
  };

  handleChangeProjects = () => {
    const projectNameInput =
      document.getElementsByClassName("projectNameInput");
    const projectDescriptionInput = document.getElementsByClassName(
      "projectDescriptionInput"
    );

    // console.log(e.target);

    this.setState({
      project: {
        name: projectNameInput.value,
        description: projectDescriptionInput.value,
        id: this.state.project.id,
      },
    });
    // console.table(this.state.project);
    // console.table(this.state.projects);
  };

  addProject = (e) => {
    e.preventDefault();
    this.setState({
      projects: this.state.projects.concat({
        name: "",
        description: "",
        id: uniqid(),
      }),
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
          <fieldset className="personalForm">
            <legend>Personal Information</legend>
            <input
              type="text"
              placeholder="First Name"
              id="firstNameInput"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastNameInput"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.lastName}
            />
            <input
              type="text"
              placeholder="Adress"
              id="adressInput"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.adress}
            />
            <input
              type="number"
              placeholder="Phone number"
              id="phoneNumberInput"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.phoneNum}
            />
            <input
              type="text"
              placeholder="Mail"
              id="mailInput"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.mail}
            />
            <div className="link1">
              <input
                type="text"
                placeholder="Link 1 name"
                id="link1NameInput"
                onChange={this.handleChangePersonalInfo}
                value={personalInfo.link1.name}
              />
              <input
                type="text"
                placeholder="Link 1 adress"
                id="link1AdressInput"
                onChange={this.handleChangePersonalInfo}
                value={personalInfo.link1.adress}
              />
            </div>
            <div className="link2">
              <input
                type="text"
                placeholder="Link 2 name"
                id="link2NameInput"
                onChange={this.handleChangePersonalInfo}
                value={personalInfo.link2.name}
              />
              <input
                type="text"
                placeholder="Link 2 adress"
                id="link2AdressInput"
                onChange={this.handleChangePersonalInfo}
                value={personalInfo.link2.adress}
              />
            </div>
            <input
              type="text"
              placeholder="Summary"
              id="summaryInput"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.summary}
            />
          </fieldset>
          {/* PERSONAL PROJECTS */}
          <fieldset className="projectsForm">
            <legend>Personal Projects</legend>
            {projects.map((project) => {
              return (
                <div className="projectInput" key={project.id}>
                  <input
                    type="text"
                    placeholder="Project name"
                    className="projectNameInput"
                    onChange={this.handleChangeProjects}
                    value={project.name}
                  />
                  <input
                    type="text"
                    placeholder="Project description"
                    className="projectDescriptionInput"
                    onChange={this.handleChangeProjects}
                    value={project.description}
                  />
                  <button>Delete project</button>
                </div>
              );
            })}
            <button onClick={this.addProject}>Add project</button>
          </fieldset>
          <button onClick={window.print}>Print me!</button>
        </form>
        <div className="preview">
          <RenderPreview personalInfo={personalInfo} projects={projects} />
        </div>
      </>
    );
  }
}
