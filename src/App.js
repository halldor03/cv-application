import React from "react";
import "./styles.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
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
