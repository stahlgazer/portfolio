import React from "react";

export default function Skills() {
  return (
    <section id="Skills" className="nav-fix">
      <div>
        <h2>Skills / Languages</h2>
      </div>
      <div
        data-aos="fade-down-right"
        data-aos-duration="1000"
        data-aos-delay="300"
        className="icons-container"
        data-aos-mirror='true'
      >
        <div className="icondiv">
          <i className="fab fa-html5"></i>
          <p>Html5</p>
        </div>
        <div className="icondiv">
          <i className="fab fa-css3-alt"></i>
          <p>CSS3</p>
        </div>
        <div className="icondiv">
          <i className="fab fa-js-square"></i>
          <p>JavaScript</p>
        </div>
        <div className="icondiv">
          <i className="fab fa-sass"></i>
          <p>SCSS</p>
        </div>
      </div>
      <div
        data-aos="fade-up-left"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="icons-container"
        data-aos-mirror='true'
      >
        <div className="icondiv">
          <i className="fab fa-react"></i>
          <p>React.js</p>
        </div>
        <div className="icondiv">
          <i className="fab fa-python"></i>
          <p>Python</p>
        </div>
        <div className="icondiv">
          <i className="fab fa-bootstrap"></i>
          <p>Reactstrap</p>
        </div>
        <div className="icondiv">
          <i className="fab fa-node-js"></i>
          <p>Node.js</p>
        </div>
      </div>
    </section>
  );
}
