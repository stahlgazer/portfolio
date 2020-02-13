import React from "react";
import "./App.css";
import Navigation from './components/Navigation';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contributions from './components/Contributions';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
        <Navigation />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
