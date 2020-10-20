import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Skills />
      <Projects />
      {/* <Resume /> */}
    </div>
  );
}

export default App;
