import React from "react";
import GitHubCalendar from "react-github-calendar";
import tipsease from "../images/tipsease.PNG";
import todo from "../images/todoapp2.PNG";
import calc from "../images/calculator.PNG";
import game from "../images/gameoflife.PNG";
import ReactTooltip from "react-tooltip";

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
          <a target="blank" href="https://moviefinder-nine.vercel.app/">
            <img
              src="https://i.gyazo.com/b1b0bcff482224748946795e522792b2.jpg"
              alt="movie ark preview"
            />
          </a>
          <h2>The Movie Ark</h2>
          <p>Description: Coming Soon</p>
          <a
            rel="external noopener noreferrer"
            href="https://github.com/stahlgazer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        <div className="single-project">
          <a target="blank" href="https://grid-calculator.vercel.app/">
            <img src={calc} alt="calculator preview" />
          </a>
          <h2>Grid Calculator</h2>
          <p>Description: Coming Soon</p>
          <a
            rel="external noopener noreferrer"
            href="https://github.com/stahlgazer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="single-project">
          <a target="blank" href="https://game-of-life-smoky-zeta.vercel.app/">
            <img src={game} alt="game of life preview" />
          </a>
          <h2>Game of Life</h2>
          <p>Description: Coming Soon</p>
          <a
            rel="external noopener noreferrer"
            href="https://github.com/stahlgazer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="single-project">
          <a target="blank" href="https://awesome-jackson-f31166.netlify.com/">
            <img src={tipsease} alt="tipsease page preview" />
          </a>
          <h2>Tipsease</h2>
          <p>Description: Coming Soon</p>
          <a
            rel="external noopener noreferrer"
            href="https://github.com/stahlgazer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="single-project">
          <a target="blank" href="https://react-todo-sigma.now.sh/">
            <img src={todo} alt="to do list preview" />
          </a>
          <h2>To Do List</h2>
          <p>Description: Coming Soon</p>
          <a
            rel="external noopener noreferrer"
            href="https://github.com/stahlgazer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
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
