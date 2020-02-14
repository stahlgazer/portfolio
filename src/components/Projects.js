import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="nav-fix">
        <h2>Projects</h2>
      </div>
      <div className="calendar" id="Contributions">
        <GitHubCalendar username="stahlgazer" color="hsl(203, 82%, 33%)" />
      </div>
    </section>
  );
}
