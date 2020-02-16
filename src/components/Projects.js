import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="nav-fix">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        <div className="single-project">
          <h2>Project Title1</h2>
          <img src="../images/tipsease.PNG" alt="project1" />
        </div>
        <div className="single-project">
          <h2>Project Title2</h2>
          <img src="../images/todoapp2.PNG" alt="project2" />
        </div>
        <div className="single-project">
          <h2>Project Title3</h2>
          <img src="" alt="project3" />
        </div>
      </div>
      <div className="calendar" id="Contributions">
        <GitHubCalendar username="stahlgazer" color="hsl(203, 82%, 33%)" />
      </div>
    </section>
  );
}
