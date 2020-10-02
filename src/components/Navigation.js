import React, {useState} from "react";

export default function Navigation() {
  const [active, setActive] = useState('1');
  return (
    <div className="navlinks-container">
      <div className="navlinks">
        <a href="#" className={active == '1' ? 'active' : ''} onClick={() => setActive('1')}>
          About
        </a>
      </div>
      <div className="navlinks">
        <a href="#Skills" className={active === '2' ? 'active' : ''} onClick={() => setActive('2')}>
          Skills
        </a>
      </div>
      <div className="navlinks">
        <a href="#Projects" className={active === '3' ? 'active' : ''} onClick={() => setActive('3')}>
          Projects
        </a>
      </div>
      <div className="navlinks">
        <a href="#Resume" className={active === '4' ? 'active' : ''} onClick={() => setActive('4')}>
          Resume
        </a>
      </div>
    </div>
  );
}
