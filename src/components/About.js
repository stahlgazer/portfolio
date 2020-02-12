import React from "react";
import logo from "../images/logo.png";

export default function About() {
    return (
      <section id="About">
        <h2>About</h2>
        <img src={logo} alt="my logo" className="logo" />
      </section>
    );
  }
