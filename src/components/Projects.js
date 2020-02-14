import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="nav-fix">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        <div className="single-project"><h2>Project Title</h2></div>
        <div className="single-project"><h2>Project Title</h2></div>
        <div className="single-project"><h2>Project Title</h2></div>
      </div>
      <div className="calendar" id="Contributions">
        <GitHubCalendar username="stahlgazer" color="hsl(203, 82%, 33%)" />
      </div>
    </section>
  );
}
