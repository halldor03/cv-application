import React, { PureComponent } from "react";

export default class RenderPreview extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo, projects, experiences, educations } = this.props;

    return (
      <>
        <h1>Personal Info:</h1>
        <div>
          Name: {personalInfo.firstName} {personalInfo.lastName}
        </div>
        <div>Adress: {personalInfo.adress}</div>
        <div>Phone Number: {personalInfo.phoneNum}</div>
        <div>Email: {personalInfo.mail}</div>
        <div>
          <p>Links:</p>
          {personalInfo.link1.name}: {personalInfo.link1.adress}
        </div>
        <div>
          {personalInfo.link2.name}: {personalInfo.link2.adress}
        </div>
        <div>Summary: {personalInfo.summary}</div>
        <p>---------------------------------</p>
        <h1>Projects:</h1>
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <div>{project.name}</div>
              <div>{project.description}</div>
            </div>
          );
        })}
        <p>---------------------------------</p>
        <h1>Experiences:</h1>
        {experiences.map((experience) => {
          return (
            <div key={experience.id}>
              <div>{experience.position}</div>
              <div>{experience.company}</div>
              <div>{experience.localization}</div>
              <div>{experience.workedFrom}</div>
              <div>{experience.workedTo}</div>
            </div>
          );
        })}
        <p>---------------------------------</p>
        <h1>Educations:</h1>
        {educations.map((education) => {
          return (
            <div key={education.id}>
              <div>{education.schoolName}</div>
              <div>{education.localization}</div>
              <div>{education.field}</div>
              <div>{education.degree}</div>
              <div>{education.studiedFrom}</div>
              <div>{education.studiedTo}</div>
            </div>
          );
        })}
      </>
    );
  }
}

// import React from "react";

// const RenderPreview = (props) => {
//   const { personalInfo, projects, experiences, educations } = props;

//   return (
//     <>
//       <h1>Personal Info:</h1>
//       <div>
//         Name: {personalInfo.firstName} {personalInfo.lastName}
//       </div>
//       <div>Adress: {personalInfo.adress}</div>
//       <div>Phone Number: {personalInfo.phoneNum}</div>
//       <div>Email: {personalInfo.mail}</div>
//       <div>
//         <p>Links:</p>
//         {personalInfo.link1.name}: {personalInfo.link1.adress}
//       </div>
//       <div>
//         {personalInfo.link2.name}: {personalInfo.link2.adress}
//       </div>
//       <div>Summary: {personalInfo.summary}</div>
//       <p>---------------------------------</p>
//       <h1>Projects:</h1>
//       {projects.map((project) => {
//         return (
//           <div key={project.id}>
//             <div>{project.name}</div>
//             <div>{project.description}</div>
//           </div>
//         );
//       })}
//       <p>---------------------------------</p>
//       <h1>Experiences:</h1>
//       {experiences.map((experience) => {
//         return (
//           <div key={experience.id}>
//             <div>{experience.position}</div>
//             <div>{experience.company}</div>
//             <div>{experience.localization}</div>
//             <div>{experience.workedFrom}</div>
//             <div>{experience.workedTo}</div>
//           </div>
//         );
//       })}
//       <p>---------------------------------</p>
//       <h1>Educations:</h1>
//       {educations.map((education) => {
//         return (
//           <div key={education.id}>
//             <div>{education.schoolName}</div>
//             <div>{education.localization}</div>
//             <div>{education.field}</div>
//             <div>{education.degree}</div>
//             <div>{education.studiedFrom}</div>
//             <div>{education.studiedTo}</div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default RenderPreview;
