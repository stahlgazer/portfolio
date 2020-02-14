import React from "react";
import photo from "../images/gavin.jpg";
import { Button } from "@material-ui/core";

export default function About() {
  return (
    <section id="About">
      <img src={photo} alt="me" className="photo" />
      <div className="mydetails" style={{ width: "50%" }}>
        <h1>Gavin Stahl</h1>
        <h2>Full Stack Web Developer</h2>
        <p>Redondo Beach, CA</p>
        <p>StahlGavin@gmail.com</p>
        <p>
          Leveling up my skills in order to be the best developer I can be.
          Currently attending and working at Lambda School.
        </p>
        <br />

        <Button
          variant="contained"
          color="primary"
          rel="external noopener noreferrer"
          href="https://www.linkedin.com/in/gavin-stahl-0842b6184/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
          Linked-In
        </Button>
        <Button
          variant="contained"
          color="primary"
          rel="external noopener noreferrer"
          href="https://github.com/stahlgazer"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          Github
        </Button>
        <Button
          variant="contained"
          color="primary"
          rel="external noopener noreferrer"
          href="https://twitter.com/stahlgazer"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          Twitter
        </Button>
      </div>
    </section>
  );
}
