import React from "react";
import photo from "../images/gavin.jpg";

export default function About() {
  return (
    <section id="About">
      <img src={photo} alt="me" className="photo" />
      <div>
        <h1>Gavin Stahl</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
    </section>
  );
}
