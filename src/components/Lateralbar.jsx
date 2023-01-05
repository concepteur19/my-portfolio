import React from "react";
import "../styles/lateralbar.css"

function Lateralbar() {
  return (
    <div>
      <nav>
        <div className="nav-button">
            <a href="/home"> <div className="lateral-button" id="1" ></div> </a>
            <a href="/projects"> <div className="lateral-button" id="2" ></div> </a>
            <a href="/contact"> <div className="lateral-button" id="3" ></div> </a>
            <a href="/about"> <div className="lateral-button" id="4" ></div> </a>
        </div>
      </nav>
    </div>
  );
}

export default Lateralbar;
