import React, { PureComponent } from "react";
import "./styles.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <MainContent />
        </main>
        <Footer />
      </>
    );
  }
}
