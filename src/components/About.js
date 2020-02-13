import React from "react";
import photo from "../images/gavin.jpg";

export default function About() {
  return (
    <section id="About">
      <img src={photo} alt="me" className="photo" />
      <div className="mydetails" style={{width:'50%'}}>
        <h1>Gavin Stahl</h1>
        <h2>Full Stack Web Developer</h2>
        <p>Redondo Beach, CA</p>
        <p>StahlGavin@gmail.com</p>
        <p>Github: Stahlgazer</p>
        <p>Leveling up my skills in order to be the best developer I can be. Currently attending and working at Lambda School.</p>
      </div>
    </section>
  );
}
