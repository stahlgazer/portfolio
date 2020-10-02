import React from "react";
import photo from "../images/gavin.jpg";

export default function About() {
  return (
    <section
      data-aos="fade-down-right"
      data-aos-duration="2500"
      data-aos-mirror="true"
      id="About"
    >
      <img src={photo} alt="me" className="photo" />
      <div className="mydetails" style={{ width: "50%" }}>
        <h1>Gavin Stahl</h1>
        <h2>Full Stack Web Developer</h2>
        <p>Redondo Beach, CA</p>
        <a href="mailto:StahlGavin@gmail.com">
          <i className="fa fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gavin-stahl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          variant="contained"
          color="primary"
          rel="external noopener noreferrer"
          href="https://github.com/stahlgazer"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          variant="contained"
          color="primary"
          rel="external noopener noreferrer"
          href="https://twitter.com/stahlgazer"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <p>
          React.js/Node.js Developer, Currently leveling up my skills in order to provide unique features, custom designs, and help mine and other's business ideas come to life.
        </p>
      </div>
    </section>
  );
}
