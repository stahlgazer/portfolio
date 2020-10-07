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
          React.js developer with a passion for the future and bringing new ideas to life. Decided to pursue a career in software development after realizing I was much more interested in technology and design. Feel free to reach out to me for any collaboration/opportunities. Thanks for stopping by!
        </p>
      </div>
    </section>
  );
}
