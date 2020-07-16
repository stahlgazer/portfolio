import React from "react";
import GitHubCalendar from "react-github-calendar";
import tipsease from "../images/tipsease.PNG";
import todo from "../images/todoapp2.PNG";
import ReactTooltip from 'react-tooltip'

export default function Projects() {
  const exampleTheme = {
    background: "transparent",
    text: "#000",
    grade4: "hsl(338, 78%, 30%)",
    grade3: "hsl(338, 78%, 44%)",
    grade2: "hsl(338, 78%, 58%)",
    grade1: "hsl(338, 78%, 72%)",
    grade0: "#eee",
  };

  return (
    <section id="Projects">
      <div className="nav-fix">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        <div className="single-project">
          <h2>Tipsease</h2>
          <a target="blank" href="https://awesome-jackson-f31166.netlify.com/">
            <img src={tipsease} alt="project1" />
          </a>
          <h3>Project Details</h3>
          <p>Role: test</p>
        </div>
        <div className="single-project">
          <h2>To Do List</h2>
          <a target="blank" href="https://react-todo-sigma.now.sh/">
            <img src={todo} alt="project2" />
          </a>
          <h3>Project Details</h3>
          <p>Role: test</p>
        </div>
      </div>
      <div className="calendar" id="Contributions">
        <GitHubCalendar username="stahlgazer" theme={exampleTheme}>
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </div>
    </section>
  );
}
