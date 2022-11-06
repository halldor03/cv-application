import React, { PureComponent, useState } from "react";
import uniqid from "uniqid";
import RenderProjects from "./RenderProjects";

export default class ProjectsForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      name: "",
      description: "",
      id: uniqid(),
      projects: [
        { name: "", description: "", id: uniqid() },
        // { name: "111", description: "111desc", id: uniqid() },
        // { name: "222", description: "222desc", id: uniqid() },
        // { name: "333", description: "333desc", id: uniqid() },
        // { name: "444", description: "444desc", id: uniqid() },
        // { name: "555", description: "555desc", id: uniqid() },
      ],
    };
  }

  handleChangeProjects = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  addProject = (e) => {
    e.preDefault();
    this.setState({
      projects: this.state.projects.concat({
        name: "",
        description: "",
        id: uniqid(),
      }),
    });
    // console.table(this.state.projects);
  };

  render() {
    const { name, description, projects } = this.state;

    // console.log("name input: " + this.state.projectNameInput);
    // console.log("desc input: " + this.state.projectDescriptionInput);
    console.log(this.state);
    // console.log(this.state.project.name);
    // console.log(this.state.project.description);

    return (
      <>
        <form className="projForm">
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
                    name="name"
                    // value={this.state.project.name}
                  />
                  <input
                    type="text"
                    placeholder="Project description"
                    className="projectDescriptionInput"
                    onChange={this.handleChangeProjects}
                    name="description"
                    // value={this.state.project.description}
                  />
                  <button>Delete project</button>
                </div>
              );
            })}
            <button onClick={this.addProject}>Add project</button>
          </fieldset>
          <button onClick={window.print}>Print me!</button>
        </form>
        {/* <div className="previewProj">
          <RenderProjects name={name} description={description} />
        </div> */}
      </>
    );
  }
}
