import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Contributions() {
  return (
    <div className="calendar" id="Contributions">
      <GitHubCalendar username="stahlgazer" color="hsl(203, 82%, 33%)" />
    </div>
  );
}
