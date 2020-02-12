import React from "react";
import "./App.css";
import GitHubCalendar from "react-github-calendar";
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
        <Navigation/>
      <div className="calendar" id="calendar">
        <GitHubCalendar username="stahlgazer" color="hsl(203, 82%, 33%)"/>
      </div>
    </div>
  );
}

export default App;
