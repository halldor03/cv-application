import React, { PureComponent } from "react";
import "./styles.css";
import Form from "./components/Form";

export default class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}

// https://michalosman.github.io/cv-application/
