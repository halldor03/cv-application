import React, { PureComponent } from "react";

export default class RenderPreview extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo, projects, experiences, educations } = this.props;

    return (
      <>
        <div className="nameContainerPreview">
          {personalInfo.firstName} {personalInfo.lastName}
        </div>
        <div className="infoAndSkillsContainerPreview">
          <div className="infoContainerPreview">
            <div className="componentTitle">Personal Details</div>
            <div className="mailContainer">
              <p>Email:</p>
              {personalInfo.mail}
            </div>
            <div className="phoneNumContainer">
              <p>Phone Number:</p>
              {personalInfo.phoneNum}
            </div>
            <div className="adressContainer">
              <p>Adress:</p>
              {personalInfo.adress}
            </div>
            <div className="link1Container">
              <p>{personalInfo.link1.name}:</p> {personalInfo.link1.adress}
            </div>
            <div className="link2Container">
              <p>{personalInfo.link2.name}:</p> {personalInfo.link2.adress}
            </div>
          </div>
          <div className="skillsContainerPreview">
            <div className="componentTitle">Skills</div>
            <ul className="skillsPreviev">
              <li>{personalInfo.skill1}</li>
              <li>{personalInfo.skill2}</li>
              <li>{personalInfo.skill3}</li>
              <li>{personalInfo.skill4}</li>
            </ul>
          </div>
        </div>
        <div className="summaryContainerPreview">
          <div className="componentTitle">Summary</div>
          <div className="summaryPreview"> {personalInfo.summary}</div>
        </div>
        <div className="projectsContainerPreview">
          <div className="componentTitle">Personal Projects</div>
          {projects.map((project) => {
            return (
              <div className="projectPreview" key={project.id}>
                <div className="projectTitle">{project.name}</div>
                <ul className="projectDescription">
                  <li>{project.description1}</li>
                  <li>{project.description2}</li>
                  <li>{project.description3}</li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="experiencesContainerPreview">
          <div className="componentTitle">Experience</div>
          {experiences.map((experience) => {
            return (
              <div className="experiencePreview" key={experience.id}>
                <div className="experienceTime">
                  {experience.workedFrom} - {experience.workedTo}
                </div>
                <div className="experienceInfo">
                  <div>{experience.position}</div>
                  <div className="experienceCompanyAndLocalization">
                    {experience.company}, {experience.localization}
                  </div>
                  <ul className="projectDescription">
                    <li>{experience.description1}</li>
                    <li>{experience.description2}</li>
                    <li>{experience.description3}</li>
                    <li>{experience.description4}</li>
                    <li>{experience.description5}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="educationContainerPreview">
          <div className="componentTitle">Education</div>
          {educations.map((education) => {
            return (
              <div className="educationPreview" key={education.id}>
                <div className="educationTime">
                  {education.studiedFrom} - {education.studiedTo}
                </div>
                <div className="educationInfo">
                  <div className="educationSchoolAndLocalization">
                    {education.schoolName}
                  </div>
                  <div className="educationLocalization">
                    Location: {education.localization}
                  </div>
                  <div className="educationField">Field: {education.field}</div>
                  <div className="educationDegree">
                    Degree: {education.degree}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
