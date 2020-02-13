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
        <p>Leveling up my skills in order to be the best developer I can be. Currently attending and working at Lambda School.</p><br/>
        <a rel="external noopener noreferrer" href="https://www.linkedin.com/in/gavin-stahl-0842b6184/" target="_blank">Linked-In</a>
        <a rel="external noopener noreferrer" href="https://github.com/stahlgazer" target="_blank">Github</a>
        <a rel="external noopener noreferrer" href="https://twitter.com/stahlgazer" target="_blank">Twitter</a>
      </div>
    </section>
  );
}
