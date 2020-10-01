import React from "react";
import resume from "../images/GavinStahlResume.pdf";

export default function Resume() {
  return (
    <section id="Resume">
      <div className="nav-fix">
        <h2>Resume</h2>
        <embed
          src={resume}
          type="application/pdf"
          width="60%"
          height="1200px"
          view="Fit"
        ></embed>
      </div>
    </section>
  );
}
