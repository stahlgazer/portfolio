import React from "react";
import GitHubCalendar from "react-github-calendar";
import tipsease from "../images/tipsease.PNG";
import todo from "../images/todoapp2.PNG";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="nav-fix">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        <div className="single-project">
          <h2>Tipsease</h2>
          <a target="blank" href="https://awesome-jackson-f31166.netlify.com/">
            <img src={tipsease} alt="project1" />{" "}
          </a>
        </div>
        <div className="single-project">
          <h2>To Do List</h2>
          <a target="blank" href='https://react-todo-sigma.now.sh/'>
          <img src={todo} alt="project2" /></a>
        </div>
      </div>
      <div className="calendar" id="Contributions">
        <GitHubCalendar username="stahlgazer" color="hsl(203, 82%, 33%)" />
      </div>
    </section>
  );
}
