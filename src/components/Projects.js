import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Projects() {
  return (
    <div id="Projects">
      <h2>projects</h2>
      <div className="calendar" id="Contributions">
      <GitHubCalendar username="stahlgazer" color="hsl(203, 82%, 33%)" />
    </div>
    </div>
  );
}