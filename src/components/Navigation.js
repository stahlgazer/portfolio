import React from "react";
import { Button } from "@material-ui/core";


export default function Navigation() {
  return (
    <div className="navlinks-container">
      <div className="navlinks">
        <a href="#" >
          About
        </a>
      </div>
      <div className="navlinks">
        <a href="#Skills" >
          Skills
        </a>
      </div>
      <div className="navlinks">
        <a href="#Projects" >
          Projects
        </a>
      </div>
      <div className="navlinks">
        <a href="#Resume" >
          Resume
        </a>
      </div>
    </div>
  );
}
