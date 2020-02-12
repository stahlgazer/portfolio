import React from "react";
import { Button } from "@material-ui/core";
import logo from "../images/logo.png";

export default function Navigation() {
  return (
    <div className="navlinks-container">
      {/* <img src={logo} alt="my logo" className="logo" /> */}
      <div className="navlinks">
        <Button href="#" color="secondary" variant="contained">
          About
        </Button>
      </div>
      <div className="navlinks">
        <Button href="#Skills" color="secondary" variant="contained">
          Skills
        </Button>
      </div>
      <div className="navlinks">
        <Button href="#Projects" color="secondary" variant="contained">
          Projects
        </Button>
      </div>
      <div className="navlinks">
        <Button href="#Contributions" color="secondary" variant="contained">
          Contributions
        </Button>
      </div>
      <div className="navlinks">
        <Button href="#Contact" color="secondary" variant="contained">
          Contact
        </Button>
      </div>
    </div>
  );
}
