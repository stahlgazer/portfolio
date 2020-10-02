import React from "react";
import Link from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="navlinks-container">
      <div className="navlinks">
        <Link activeStyle to="#">
          About
        </Link>
      </div>
      <div className="navlinks">
        <Link to="#Skills">
          Skills
        </Link>
      </div>
      <div className="navlinks">
        <Link to="#Projects">
          Projects
        </Link>
      </div>
      <div className="navlinks">
        <Link to="#Resume">
          Resume
        </Link>
      </div>
    </div>
  );
}
