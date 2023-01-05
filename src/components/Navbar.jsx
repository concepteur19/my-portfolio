import React, {useState} from "react";
import "../styles/navbar.css";

function Navbar() {

  const [gotClicked, setGotClicked] = useState(false);
  function handleClick() {
    setGotClicked(!gotClicked);
  }

  return (
    <div className="container">
      <nav className="nav-bar">
        <a href="/" className="logo">
          {" "}
          PORTFOLIO{" "}
        </a>
        <button onclick={handleClick} className="hambuger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="rgb(20, 1, 188)"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className={`nav-menu ${gotClicked? "expanded" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contacts</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
