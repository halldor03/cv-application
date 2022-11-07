import React, { PureComponent } from "react";
import uniqid from "uniqid";
import RenderPreview from "./RenderPreview";

export default class MainContent extends PureComponent {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        firstName: "Kacper",
        lastName: "Szulc",
        adress: "Poznan, Poland",
        phoneNum: "600 434 411",
        mail: "szulckacper1@gmail.com",
        link1: { name: "GitHub", adress: "github.com/halldor03" },
        link2: { name: "LinkedIn", adress: "linkedin.com/in/szulckacper" },
        summary: `Detail-oriented Civil Engineer with over 3 years of experience and a zest for solving complex problems. After realizing I'm more interested in technology than what happens on construction site, decided to make a career shift.`,
        skill1: "HTML, CSS",
        skill2: "Javascript, ReactJS",
        skill3: "Webpack",
        skill4: "Git version control",
      },
      projects: [
        {
          name: "CV Creator (HTML, CSS, REACTJS)",
          description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          description2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          description3:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          description4:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          id: uniqid(),
        },
        {
          name: "Weather App (HTML, CSS, JS, API)",
          description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          description2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          description3:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          description4:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          id: uniqid(),
        },
        {
          name: "Todo List (HTML, CSS, JS)",
          description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          description2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          description3:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          description4:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          id: uniqid(),
        },
      ],
      experiences: [
        {
          position: "Assistant Civil Engineer",
          company: "SD PROJEKT Sp. z o.o.",
          localization: "Poznan, Poland",
          description1:
            "Designed complex road projects in coordination with contractors",
          description2:
            "Coordinated and monitored execution of projects for compliance with specifications",
          description3:
            "Assisted Senior Engineer in both project-oriented and team-oriented tasks (e.g. onboarding new employees)",
          description4:
            "Acted as client manager for investors, both private and government",
          description5:
            "Helped to implement the usage of sophisticated computer-aided design programs to enhance design process",
          workedFrom: "2019",
          workedTo: "Present",
          id: uniqid(),
        },
      ],
      educations: [
        {
          schoolName: "Poznan University of Technology",
          localization: "Poznan, Poland",
          field: "Civil Engineering",
          degree: "M.Sc.Eng.",
          studiedFrom: "2016",
          studiedTo: "2022",
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
    const skill1Input = document.getElementById("skill1Input");
    const skill2Input = document.getElementById("skill2Input");
    const skill3Input = document.getElementById("skill3Input");
    const skill4Input = document.getElementById("skill4Input");
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
        skill1: skill1Input.value,
        skill2: skill2Input.value,
        skill3: skill3Input.value,
        skill4: skill4Input.value,
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

    return (
      <>
        <form className="mainForm" spellCheck="false">
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
              autoComplete="chrome-off"
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastNameInput"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.lastName}
              autoComplete="chrome-off"
            />
            <input
              type="text"
              placeholder="Adress"
              id="adressInput"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.adress}
              autoComplete="chrome-off"
            />
            <input
              type="tel"
              placeholder="Phone number"
              id="phoneNumberInput"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.phoneNum}
              autoComplete="chrome-off"
            />
            <input
              type="text"
              placeholder="Mail"
              id="mailInput"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.mail}
              autoComplete="chrome-off"
            />
            <div className="link1">
              <input
                type="text"
                placeholder="Link 1 name"
                id="link1NameInput"
                onChange={this.handleChangePersonalInfo}
                value={personalInfo.link1.name}
                autoComplete="chrome-off"
              />
              <input
                type="text"
                placeholder="Link 1 adress"
                id="link1AdressInput"
                onChange={this.handleChangePersonalInfo}
                value={personalInfo.link1.adress}
                autoComplete="chrome-off"
              />
            </div>
            <div className="link2">
              <input
                type="text"
                placeholder="Link 2 name"
                id="link2NameInput"
                onChange={this.handleChangePersonalInfo}
                value={personalInfo.link2.name}
                autoComplete="chrome-off"
              />
              <input
                type="text"
                placeholder="Link 2 adress"
                id="link2AdressInput"
                onChange={this.handleChangePersonalInfo}
                value={personalInfo.link2.adress}
                autoComplete="chrome-off"
              />
            </div>
            <textarea
              type="text"
              placeholder="Summary"
              id="summaryInput"
              onChange={this.handleChangePersonalInfo}
              defaultValue={personalInfo.summary}
              autoComplete="chrome-off"
            />
            <input
              type="text"
              placeholder="Skill"
              id="skill1Input"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.skill1}
              autoComplete="chrome-off"
            />
            <input
              type="text"
              placeholder="Skill"
              id="skill2Input"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.skill2}
              autoComplete="chrome-off"
            />
            <input
              type="text"
              placeholder="Skill"
              id="skill3Input"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.skill3}
              autoComplete="chrome-off"
            />
            <input
              type="text"
              placeholder="Skill"
              id="skill4Input"
              onChange={this.handleChangePersonalInfo}
              value={personalInfo.skill4}
              autoComplete="chrome-off"
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
                    autoComplete="chrome-off"
                  />
                  <textarea
                    type="text"
                    placeholder="Project details"
                    className="projectDescriptionInput"
                    onChange={(e) => this.handleChangeProjects(e, project)}
                    name="description1"
                    defaultValue={project.description1}
                    autoComplete="chrome-off"
                  />
                  <textarea
                    type="text"
                    placeholder="Project details"
                    className="projectDescriptionInput"
                    onChange={(e) => this.handleChangeProjects(e, project)}
                    name="description2"
                    defaultValue={project.description2}
                    autoComplete="chrome-off"
                  />
                  <textarea
                    type="text"
                    placeholder="Project details"
                    className="projectDescriptionInput"
                    onChange={(e) => this.handleChangeProjects(e, project)}
                    name="description3"
                    defaultValue={project.description3}
                    autoComplete="chrome-off"
                  />
                  <textarea
                    type="text"
                    placeholder="Project details"
                    className="projectDescriptionInput"
                    onChange={(e) => this.handleChangeProjects(e, project)}
                    name="description4"
                    defaultValue={project.description4}
                    autoComplete="chrome-off"
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
                    autoComplete="chrome-off"
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
                    autoComplete="chrome-off"
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
                    autoComplete="chrome-off"
                  />
                  <textarea
                    type="text"
                    placeholder="Job details"
                    className="experienceLDescriptionInput"
                    onChange={(e) =>
                      this.handleChangeExperiences(e, experience)
                    }
                    name="description1"
                    value={experience.description1}
                    autoComplete="chrome-off"
                  />{" "}
                  <textarea
                    type="text"
                    placeholder="Job details"
                    className="experienceLDescriptionInput"
                    onChange={(e) =>
                      this.handleChangeExperiences(e, experience)
                    }
                    name="description2"
                    value={experience.description2}
                    autoComplete="chrome-off"
                  />{" "}
                  <textarea
                    type="text"
                    placeholder="Job details"
                    className="experienceLDescriptionInput"
                    onChange={(e) =>
                      this.handleChangeExperiences(e, experience)
                    }
                    name="description3"
                    value={experience.description3}
                    autoComplete="chrome-off"
                  />{" "}
                  <textarea
                    type="text"
                    placeholder="Job details"
                    className="experienceLDescriptionInput"
                    onChange={(e) =>
                      this.handleChangeExperiences(e, experience)
                    }
                    name="description4"
                    value={experience.description4}
                    autoComplete="chrome-off"
                  />{" "}
                  <textarea
                    type="text"
                    placeholder="Job details"
                    className="experienceLDescriptionInput"
                    onChange={(e) =>
                      this.handleChangeExperiences(e, experience)
                    }
                    name="description5"
                    value={experience.description5}
                    autoComplete="chrome-off"
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
                      defaultValue={experience.workedFrom}
                      autoComplete="chrome-off"
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
                      autoComplete="chrome-off"
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
                    autoComplete="chrome-off"
                  />
                  <input
                    type="text"
                    placeholder="Localization"
                    className="educationLocalizationInput"
                    onChange={(e) => this.handleChangeEducations(e, education)}
                    name="localization"
                    value={education.localization}
                    autoComplete="chrome-off"
                  />
                  <input
                    type="text"
                    placeholder="Field of study"
                    className="educationFieldInput"
                    onChange={(e) => this.handleChangeEducations(e, education)}
                    name="field"
                    value={education.field}
                    autoComplete="chrome-off"
                  />
                  <input
                    type="text"
                    placeholder="Degree"
                    className="educationDegreeInput"
                    onChange={(e) => this.handleChangeEducations(e, education)}
                    name="degree"
                    value={education.degree}
                    autoComplete="chrome-off"
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
                      autoComplete="chrome-off"
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
                      autoComplete="chrome-off"
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
          <button type="button" onClick={window.print} className="printButton">
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
