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
        data-aos-mirror="true"
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
        <div className="icondiv">
          <i class="fab fa-less"></i>
          <p>LESS</p>
        </div>
        <div className="icondiv">
          <i className="fab fa-bootstrap"></i>
          <p>Bootstrap</p>
        </div>
        <div className="icondiv">
          <img
            alt="MaterialUI Logo"
            src="https://img.icons8.com/color/124/000000/material-ui.png"
          />
          <p>Material-UI</p>
        </div>
      </div>
      <div
        data-aos="fade-up-left"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="icons-container"
        data-aos-mirror="true"
      >
        <div className="icondiv">
          <i className="fab fa-python"></i>
          <p>Python</p>
        </div>
        <div className="icondiv">
          <i className="fab fa-react"></i>
          <p>React.js</p>
        </div>
        <div className="icondiv">
          <img
            alt="Redux Logo"
            src="https://img.icons8.com/color/124/000000/redux.png"
          />
          <p>Redux.js</p>
        </div>
        <div className="icondiv">
          <i className="fab fa-node-js"></i>
          <p>Node.js</p>
        </div>
        <div className="icondiv">
          <img
            alt="GraphQL Logo"
            src="https://img.icons8.com/color/124/000000/graphql.png"
          />
          <p>GraphQL</p>
        </div>

        <div className="icondiv">
          <img
            alt="SQL Logo"
            src="https://img.icons8.com/ultraviolet/124/000000/sql.png"
          />
          <p>SQL</p>
        </div>
        <div className="icondiv">
          <img
            alt="Git Logo"
            src="https://img.icons8.com/color/124/000000/git.png"
          />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
}
