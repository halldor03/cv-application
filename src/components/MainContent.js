import React, { useState } from "react";
import uniqid from "uniqid";
import RenderPreview from "./RenderPreview";

export default function MainContent() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "John",
    lastName: "Smith",
    adress: "San Francisco, CA",
    phoneNum: "123 456 789",
    mail: "johnsmith1@gmail.com",
    link1: { name: "GitHub", adress: "github.com/johnsmith1" },
    link2: { name: "LinkedIn", adress: "linkedin.com/in/johnsmith1" },
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    skill1: "Some skill",
    skill2: "Some other skill",
    skill3: "Another skill",
    skill4: "One more skill",
  });

  const [projects, setProjects] = useState([
    {
      name: "My awesome project",
      description1:
        "Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Et ligula ullamcorper malesuada proin",
      description2:
        "Consequat semper viverra nam libero justo. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus",
      description3: "Nisi lacus sed viverra tellus in hac habitasse platea",
      id: uniqid(),
    },
    {
      name: "Even better project",
      description1:
        "Sit amet aliquam id diam maecenas. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi",
      description2:
        "Sed adipiscing diam donec adipiscing tristique risus nec. Nec sagittis aliquam malesuada bibendum",
      description3:
        "Morbi tincidunt augue interdum velit. Congue quisque egestas diam in arcu cursus euismod quis viverre",
      id: uniqid(),
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      position: "Junior Web Developer",
      company: "Apple inc.",
      localization: "Cupertino, CA",
      description1:
        "Led transition from firebase to AWS, saving company $3,700+ monthly and increasing load speeds by an average of 38%",
      description2:
        "Built mock designs and wireframes for landing pages for 5 new product concepts",
      description3:
        "Created the user experience that fetched, parsed, and formatted analytic data, and relayed it into React components",
      description4:
        "Created accessible, responsive, and functional user interfaces to allow visitors on any device to have the same perfect user experience",
      description5:
        "Developed object-oriented code in Node.js with 100% accordance to industry and company standards",
      workedFrom: "2019",
      workedTo: "Present",
      id: uniqid(),
    },
  ]);

  const [educations, setEducations] = useState([
    {
      schoolName: "California Institute of Technology",
      localization: "Pasadena, CA",
      field: "Computer Science",
      degree: "M.Sc.Eng.",
      studiedFrom: "2014",
      studiedTo: "2019",
      id: uniqid(),
    },
  ]);

  const handleChangePersonalInfo = () => {
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
    setPersonalInfo({
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
    });
  };

  const handleChangeProjects = (e, project) => {
    const value = e.target.value;
    const key = e.target.name;
    const id = project.id;
    setProjects(
      projects.map((project) => {
        if (project.id === id) {
          project[key] = value;
        }
        return project;
      })
    );
  };

  const addProject = (e) => {
    e.preventDefault();
    setProjects([...projects, { name: "", description: "", id: uniqid() }]);
  };

  const deleteProject = (e, projectIndex) => {
    e.preventDefault();
    setProjects(projects.filter((project, index) => index !== projectIndex));
  };

  const handleChangeExperiences = (e, experience) => {
    const value = e.target.value;
    const key = e.target.name;
    const id = experience.id;
    setExperiences(
      experiences.map((experience) => {
        if (experience.id === id) {
          experience[key] = value;
        }
        return experience;
      })
    );
  };

  const addExperience = (e) => {
    e.preventDefault();
    setExperiences([
      ...experiences,
      {
        position: "",
        company: "",
        localization: "",
        workedFrom: "",
        workedTo: "",
        id: uniqid(),
      },
    ]);
  };

  const deleteExperience = (e, experienceIndex) => {
    e.preventDefault();
    setExperiences(
      experiences.filter((experience, index) => index !== experienceIndex)
    );
  };

  const handleChangeEducations = (e, education) => {
    const value = e.target.value;
    const key = e.target.name;
    const id = education.id;
    setEducations(
      educations.map((education) => {
        if (education.id === id) {
          education[key] = value;
        }
        return education;
      })
    );
  };

  const addEducation = (e) => {
    e.preventDefault();
    setEducations([
      ...educations,
      {
        schoolName: "",
        localization: "",
        field: "",
        degree: "",
        studiedFrom: "",
        studiedTo: "",
        id: uniqid(),
      },
    ]);
  };

  const deleteEducation = (e, educationIndex) => {
    e.preventDefault();
    setEducations(
      educations.filter((education, index) => index !== educationIndex)
    );
  };

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
            onChange={handleChangePersonalInfo}
            value={personalInfo.firstName}
            autoComplete="chrome-off"
          />
          <input
            type="text"
            placeholder="Last Name"
            id="lastNameInput"
            onChange={handleChangePersonalInfo}
            value={personalInfo.lastName}
            autoComplete="chrome-off"
          />
          <input
            type="text"
            placeholder="Adress"
            id="adressInput"
            onChange={handleChangePersonalInfo}
            value={personalInfo.adress}
            autoComplete="chrome-off"
          />
          <input
            type="tel"
            placeholder="Phone number"
            id="phoneNumberInput"
            onChange={handleChangePersonalInfo}
            value={personalInfo.phoneNum}
            autoComplete="chrome-off"
          />
          <input
            type="text"
            placeholder="Mail"
            id="mailInput"
            onChange={handleChangePersonalInfo}
            value={personalInfo.mail}
            autoComplete="chrome-off"
          />
          <div className="link1">
            <input
              type="text"
              placeholder="Link 1 name"
              id="link1NameInput"
              onChange={handleChangePersonalInfo}
              value={personalInfo.link1.name}
              autoComplete="chrome-off"
            />
            <input
              type="text"
              placeholder="Link 1 adress"
              id="link1AdressInput"
              onChange={handleChangePersonalInfo}
              value={personalInfo.link1.adress}
              autoComplete="chrome-off"
            />
          </div>
          <div className="link2">
            <input
              type="text"
              placeholder="Link 2 name"
              id="link2NameInput"
              onChange={handleChangePersonalInfo}
              value={personalInfo.link2.name}
              autoComplete="chrome-off"
            />
            <input
              type="text"
              placeholder="Link 2 adress"
              id="link2AdressInput"
              onChange={handleChangePersonalInfo}
              value={personalInfo.link2.adress}
              autoComplete="chrome-off"
            />
          </div>
          <textarea
            type="text"
            placeholder="Summary"
            id="summaryInput"
            onChange={handleChangePersonalInfo}
            defaultValue={personalInfo.summary}
            autoComplete="chrome-off"
          />
          <input
            type="text"
            placeholder="Skillset"
            id="skill1Input"
            onChange={handleChangePersonalInfo}
            value={personalInfo.skill1}
            autoComplete="chrome-off"
          />
          <input
            type="text"
            placeholder="Skillset"
            id="skill2Input"
            onChange={handleChangePersonalInfo}
            value={personalInfo.skill2}
            autoComplete="chrome-off"
          />
          <input
            type="text"
            placeholder="Skillset"
            id="skill3Input"
            onChange={handleChangePersonalInfo}
            value={personalInfo.skill3}
            autoComplete="chrome-off"
          />
          <input
            type="text"
            placeholder="Skillset"
            id="skill4Input"
            onChange={handleChangePersonalInfo}
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
                  onChange={(e) => handleChangeProjects(e, project)}
                  name="name"
                  value={project.name}
                  autoComplete="chrome-off"
                />
                <textarea
                  type="text"
                  placeholder="Project details"
                  className="projectDescriptionInput"
                  onChange={(e) => handleChangeProjects(e, project)}
                  name="description1"
                  defaultValue={project.description1}
                  autoComplete="chrome-off"
                />
                <textarea
                  type="text"
                  placeholder="Project details"
                  className="projectDescriptionInput"
                  onChange={(e) => handleChangeProjects(e, project)}
                  name="description2"
                  defaultValue={project.description2}
                  autoComplete="chrome-off"
                />
                <textarea
                  type="text"
                  placeholder="Project details"
                  className="projectDescriptionInput"
                  onChange={(e) => handleChangeProjects(e, project)}
                  name="description3"
                  defaultValue={project.description3}
                  autoComplete="chrome-off"
                />
                <button onClick={(e) => deleteProject(e, index)}>
                  Delete project
                </button>
              </div>
            );
          })}
          <button onClick={addProject}>Add project</button>
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
                  onChange={(e) => handleChangeExperiences(e, experience)}
                  name="position"
                  value={experience.position}
                  autoComplete="chrome-off"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="experienceCompanyInput"
                  onChange={(e) => handleChangeExperiences(e, experience)}
                  name="company"
                  value={experience.company}
                  autoComplete="chrome-off"
                />
                <input
                  type="text"
                  placeholder="Localization"
                  className="experienceLocalizationInput"
                  onChange={(e) => handleChangeExperiences(e, experience)}
                  name="localization"
                  value={experience.localization}
                  autoComplete="chrome-off"
                />
                <textarea
                  type="text"
                  placeholder="Job details"
                  className="experienceLDescriptionInput"
                  onChange={(e) => handleChangeExperiences(e, experience)}
                  name="description1"
                  value={experience.description1}
                  autoComplete="chrome-off"
                />{" "}
                <textarea
                  type="text"
                  placeholder="Job details"
                  className="experienceLDescriptionInput"
                  onChange={(e) => handleChangeExperiences(e, experience)}
                  name="description2"
                  value={experience.description2}
                  autoComplete="chrome-off"
                />{" "}
                <textarea
                  type="text"
                  placeholder="Job details"
                  className="experienceLDescriptionInput"
                  onChange={(e) => handleChangeExperiences(e, experience)}
                  name="description3"
                  value={experience.description3}
                  autoComplete="chrome-off"
                />{" "}
                <textarea
                  type="text"
                  placeholder="Job details"
                  className="experienceLDescriptionInput"
                  onChange={(e) => handleChangeExperiences(e, experience)}
                  name="description4"
                  value={experience.description4}
                  autoComplete="chrome-off"
                />{" "}
                <textarea
                  type="text"
                  placeholder="Job details"
                  className="experienceLDescriptionInput"
                  onChange={(e) => handleChangeExperiences(e, experience)}
                  name="description5"
                  value={experience.description5}
                  autoComplete="chrome-off"
                />
                <div className="workTime">
                  <input
                    type="text"
                    placeholder="From"
                    className="experienceWorkedFromInput"
                    onChange={(e) => handleChangeExperiences(e, experience)}
                    name="workedFrom"
                    defaultValue={experience.workedFrom}
                    autoComplete="chrome-off"
                  />
                  <input
                    type="text"
                    placeholder="To"
                    className="experienceWorkedToInput"
                    onChange={(e) => handleChangeExperiences(e, experience)}
                    name="workedTo"
                    value={experience.workedTo}
                    autoComplete="chrome-off"
                  />
                </div>
                <button onClick={(e) => deleteExperience(e, index)}>
                  Delete experience
                </button>
              </div>
            );
          })}
          <button onClick={addExperience}>Add experience</button>
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
                  onChange={(e) => handleChangeEducations(e, education)}
                  name="schoolName"
                  value={education.schoolName}
                  autoComplete="chrome-off"
                />
                <input
                  type="text"
                  placeholder="Localization"
                  className="educationLocalizationInput"
                  onChange={(e) => handleChangeEducations(e, education)}
                  name="localization"
                  value={education.localization}
                  autoComplete="chrome-off"
                />
                <input
                  type="text"
                  placeholder="Field of study"
                  className="educationFieldInput"
                  onChange={(e) => handleChangeEducations(e, education)}
                  name="field"
                  value={education.field}
                  autoComplete="chrome-off"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  className="educationDegreeInput"
                  onChange={(e) => handleChangeEducations(e, education)}
                  name="degree"
                  value={education.degree}
                  autoComplete="chrome-off"
                />
                <div className="schoolTime">
                  <input
                    type="text"
                    placeholder="From"
                    className="educationStudiedFromInput"
                    onChange={(e) => handleChangeEducations(e, education)}
                    name="studiedFrom"
                    value={education.studiedFrom}
                    autoComplete="chrome-off"
                  />
                  <input
                    type="text"
                    placeholder="To"
                    className="educationStudiedToInput"
                    onChange={(e) => handleChangeEducations(e, education)}
                    name="studiedTo"
                    value={education.studiedTo}
                    autoComplete="chrome-off"
                  />
                </div>
                <button onClick={(e) => deleteEducation(e, index)}>
                  Delete education
                </button>
              </div>
            );
          })}
          <button onClick={addEducation}>Add education</button>
        </fieldset>
        <button type="button" onClick={window.print} className="printButton">
          Save as PDF
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
