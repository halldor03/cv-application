import React, { PureComponent } from "react";
import uniqid from "uniqid";
import RenderPreview from "./RenderPreview";

export default class MainContent extends PureComponent {
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
      projects: [
        { name: "sampleProject1", description: "sampleDesc1", id: uniqid() },
        { name: "sampleProject2", description: "sampleDesc2", id: uniqid() },
        { name: "sampleProject3", description: "sampleDesc3", id: uniqid() },
      ],
      experiences: [
        {
          position: "samplePosition1",
          company: "sampleCompany1",
          localization: "sampleCity1",
          workedFrom: "2016",
          workedTo: "2019",
          id: uniqid(),
        },
        {
          position: "samplePosition2",
          company: "sampleCompany2",
          localization: "sampleCity",
          workedFrom: "2019",
          workedTo: "2022",
          id: uniqid(),
        },
      ],
      educations: [
        {
          schoolName: "sampleSchoolName1",
          localization: "sampleCityName1",
          field: "sampleStudies1",
          degree: "sampleDegree1",
          studiedFrom: "2013",
          studiedTo: "2016",
          id: uniqid(),
        },
        {
          schoolName: "sampleSchoolName2",
          localization: "sampleCityName2",
          field: "sampleStudies2",
          degree: "sampleDegree2",
          studiedFrom: "2010",
          studiedTo: "2013",
          id: uniqid(),
        },
      ],
    };
  }

  handleChangePersonalInfo = () => {
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

  handleChangeProjects = (e, project) => {
    const value = e.target.value;
    const key = e.target.name;
    const id = project.id;
    const newProjects = this.state.projects.map((project) => {
      if (project.id === id) {
        project[key] = value;
      }
      return project;
    });
    this.setState({
      projects: newProjects,
    });
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
  };

  deleteProject = (e, projectIndex) => {
    e.preventDefault();
    this.setState({
      projects: this.state.projects.filter(
        (project, index) => index !== projectIndex
      ),
    });
  };

  handleChangeExperiences = (e, experience) => {
    const value = e.target.value;
    const key = e.target.name;
    const id = experience.id;
    const newExperiences = this.state.experiences.map((experience) => {
      if (experience.id === id) {
        experience[key] = value;
      }
      return experience;
    });
    this.setState({
      experiences: newExperiences,
    });
  };

  addExperience = (e) => {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.concat({
        position: "",
        company: "",
        localization: "",
        workedFrom: "",
        workedTo: "",
        id: uniqid(),
      }),
    });
  };

  deleteExperience = (e, experienceIndex) => {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.filter(
        (experience, index) => index !== experienceIndex
      ),
    });
  };

  handleChangeEducations = (e, education) => {
    const value = e.target.value;
    const key = e.target.name;
    const id = education.id;
    const newEdcuations = this.state.educations.map((education) => {
      if (education.id === id) {
        education[key] = value;
      }
      return education;
    });
    this.setState({
      educations: newEdcuations,
    });
  };

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat({
        schoolName: "",
        localization: "",
        field: "",
        degree: "",
        studiedFrom: "",
        studiedTo: "",
        id: uniqid(),
      }),
    });
  };

  deleteEducation = (e, educationIndex) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.filter(
        (education, index) => index !== educationIndex
      ),
    });
  };

  render() {
    const { personalInfo, projects, experiences, educations } = this.state;

    // console.log("project:", this.state.project);
    // console.table("projects:", this.state.projects);

    return (
      <>
        <form className="mainForm">
          {/* PERSONAL INFO */}
          <div className="fieldsetTitle">Personal Info</div>
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
          <div className="fieldsetTitle">Personal Projects</div>
          <fieldset className="projectsForm">
            <legend>Personal Projects</legend>
            {projects.map((project, index) => {
              return (
                <div className="projectInput" key={project.id}>
                  <input
                    type="text"
                    placeholder="Project name"
                    className="projectNameInput"
                    onChange={(e) => this.handleChangeProjects(e, project)}
                    name="name"
                    value={project.name}
                  />
                  <input
                    type="text"
                    placeholder="Project description"
                    className="projectDescriptionInput"
                    onChange={(e) => this.handleChangeProjects(e, project)}
                    name="description"
                    value={project.description}
                  />
                  <button onClick={(e) => this.deleteProject(e, index)}>
                    Delete project
                  </button>
                </div>
              );
            })}
            <button onClick={this.addProject}>Add project</button>
          </fieldset>
          {/* EXPERIENCE */}
          <div className="fieldsetTitle">Experience</div>
          <fieldset className="experiencesForm">
            <legend>Experience</legend>
            {experiences.map((experience, index) => {
              return (
                <div className="experienceInput" key={experience.id}>
                  <input
                    type="text"
                    placeholder="Position"
                    className="experiencePositionInput"
                    onChange={(e) =>
                      this.handleChangeExperiences(e, experience)
                    }
                    name="position"
                    value={experience.position}
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="experienceCompanyInput"
                    onChange={(e) =>
                      this.handleChangeExperiences(e, experience)
                    }
                    name="company"
                    value={experience.company}
                  />
                  <input
                    type="text"
                    placeholder="Localization"
                    className="experienceLocalizationInput"
                    onChange={(e) =>
                      this.handleChangeExperiences(e, experience)
                    }
                    name="localization"
                    value={experience.localization}
                  />
                  <div className="workTime">
                    <input
                      type="text"
                      placeholder="From"
                      className="experienceWorkedFromInput"
                      onChange={(e) =>
                        this.handleChangeExperiences(e, experience)
                      }
                      name="workedFrom"
                      value={experience.workedFrom}
                    />
                    <input
                      type="text"
                      placeholder="To"
                      className="experienceWorkedToInput"
                      onChange={(e) =>
                        this.handleChangeExperiences(e, experience)
                      }
                      name="workedTo"
                      value={experience.workedTo}
                    />
                  </div>
                  <button onClick={(e) => this.deleteExperience(e, index)}>
                    Delete experience
                  </button>
                </div>
              );
            })}
            <button onClick={this.addExperience}>Add experience</button>
          </fieldset>
          {/* EDUCATION */}
          <div className="fieldsetTitle">Education</div>
          <fieldset className="educationsForm">
            <legend>Education</legend>
            {educations.map((education, index) => {
              return (
                <div className="educationInput" key={education.id}>
                  <input
                    type="text"
                    placeholder="School name"
                    className="educationSchoolNameInput"
                    onChange={(e) => this.handleChangeEducations(e, education)}
                    name="schoolName"
                    value={education.schoolName}
                  />
                  <input
                    type="text"
                    placeholder="Localization"
                    className="educationLocalizationInput"
                    onChange={(e) => this.handleChangeEducations(e, education)}
                    name="localization"
                    value={education.localization}
                  />
                  <input
                    type="text"
                    placeholder="Field of study"
                    className="educationFieldInput"
                    onChange={(e) => this.handleChangeEducations(e, education)}
                    name="field"
                    value={education.field}
                  />
                  <input
                    type="text"
                    placeholder="Degree"
                    className="educationDegreeInput"
                    onChange={(e) => this.handleChangeEducations(e, education)}
                    name="degree"
                    value={education.degree}
                  />
                  <div className="schoolTime">
                    <input
                      type="text"
                      placeholder="From"
                      className="educationStudiedFromInput"
                      onChange={(e) =>
                        this.handleChangeEducations(e, education)
                      }
                      name="studiedFrom"
                      value={education.studiedFrom}
                    />
                    <input
                      type="text"
                      placeholder="To"
                      className="educationStudiedToInput"
                      onChange={(e) =>
                        this.handleChangeEducations(e, education)
                      }
                      name="studiedTo"
                      value={education.studiedTo}
                    />
                  </div>
                  <button onClick={(e) => this.deleteEducation(e, index)}>
                    Delete education
                  </button>
                </div>
              );
            })}
            <button onClick={this.addEducation}>Add education</button>
          </fieldset>
          <button onClick={window.print} className="printButton">
            Print me!
          </button>
        </form>
        <div className="previewCV">
          <RenderPreview
            personalInfo={personalInfo}
            projects={projects}
            experiences={experiences}
            educations={educations}
          />
        </div>
      </>
    );
  }
}

// https://michalosman.github.io/cv-application/
