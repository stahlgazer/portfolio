import React from "react";
import resume from "../images/Resume.pdf";

export default function Resume() {
  return (
    <section id="Contact">
      <div className="nav-fix">
        <h2>Resume</h2>
        <embed
          src={resume}
          type="application/pdf"
          width="50%"
          height="1200px"
          view="Fit"
        ></embed>
      </div>
    </section>
  );
}
