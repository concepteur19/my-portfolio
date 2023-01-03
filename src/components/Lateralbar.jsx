import React from "react";
import "../styles/lateralbar.css"

function Lateralbar() {
  return (
    <div>
      <nav>
        <div className="nav-button">
            <a href="/home"> <div className="lateral-button" id="1" ></div> </a>
            {/* <div className="lateral-button" id="1" > <a href="/home"/> </div>
            <div className="lateral-button" id="2" ><a href="/projects"/> </div>
            <div className="lateral-button" id="3" > <a href="/contacts"/> </div>
            <div className="lateral-button" id="4" > <a href="/about"/> </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Lateralbar;
