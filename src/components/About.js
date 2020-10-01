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
          <i class="fa fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gavin-stahl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          variant="contained"
          color="primary"
          rel="external noopener noreferrer"
          href="https://github.com/stahlgazer"
          target="_blank"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          variant="contained"
          color="primary"
          rel="external noopener noreferrer"
          href="https://twitter.com/stahlgazer"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <p>
          Leveling up my skills in order to be the best developer I can be.
          Currently attending and working at
          <p>
            <a
              href="https://lambdaschool.com"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                textDecoration: "none",
                backgroundColor: "inherit",
                color: "white",
              }}
            >
              Lambda School
            </a>
          </p>
        </p>
      </div>
    </section>
  );
}
