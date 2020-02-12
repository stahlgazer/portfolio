import React from "react";
import { Button } from "@material-ui/core";
import GitHubCalendar from "react-github-calendar";

export default function Contributions() {
  return (
    <div className="calendar" id="Contributions">
      <GitHubCalendar username="stahlgazer" color="hsl(203, 82%, 33%)" />
    </div>
  );
}
