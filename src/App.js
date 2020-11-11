import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
