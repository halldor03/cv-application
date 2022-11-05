import React, { PureComponent } from "react";

export default class ProjectsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        name: this.props.name,
        description: this.props.description,
      },
      projects: this.props,
    };
  }

  handleChange = (e) => {
    const projectNameInput = document.getElementById("projectNameInput");
    const projectDescriptionInput = document.getElementById(
      "projectDescriptionInput"
    );
    this.setState({
      project: {
        name: projectNameInput.value,
        description: projectDescriptionInput.value,
        id: this.state.project.id,
      },
    });
    console.table(this.state.projects);
  };

  render() {
    const { projects } = this.props;

    return (
      <>
        {projects.map((project) => {
          return (
            <div className="projectForm" key={project.id}>
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
              <button>Delete project</button>
            </div>
          );
        })}
      </>
    );
  }
}
