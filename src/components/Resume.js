import React from "react";
import resume from "../images/GavinStahlResume.pdf";

export default function Resume() {
  return (
    <section id="Resume">
      <div className="nav-fix">
        <h2>Resume</h2>
        <embed
          className="resume"
          src={resume}
          type="application/pdf"
          width="70%"
          height="1200px"
          view="Fit"
        ></embed>
      </div>
    </section>
  );
}
