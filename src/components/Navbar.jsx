import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import src from '../assets/icons/icons8-sun-15.png'
import src2 from '../assets/icons/icons8-moon-30.png'

function Navbar(props) {

  const ligthOrDarkMode = props.ligthOrDarkMode;

  const [gotClicked, setGotClicked] = useState(false);
  function handleClick() {
    setGotClicked(!gotClicked);
  }

  const [pathname, setPathname] = useState(window.location.pathname);
  useEffect(() => {
    function handlePathname() {
      setPathname(window.location.pathname);
    }
    window.addEventListener("popstate", handlePathname);

    return () => {
      window.removeEventListener("popstate", handlePathname);
    };
  }, []);

  return (
    <div className="container-navbar">
      <nav className="nav-bar">
        <a href="/" className="logo">
          {" "}
          PORTFOLIO{" "}
        </a>
        <button onClick={handleClick} className="hambuger">
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
        {/* background-color: rgb(36, 36, 36);
  color: #f5f5f5;
  border: 1px solid #d9d9d9; */}

        <button className="theme-button" onClick={props.click} style={ligthOrDarkMode? { backgroundColor: "#f5f5f5", color: "#111", border: '1px solid #d9d9d9' }: {backgroundColor: "#111", color: "#f5f5f5", border: "1px solid #d9d9d9"}  }>

          {!ligthOrDarkMode ? (
            <div className="button-div">
              <span><img src={src} alt="" /></span>
              <span>Light mode</span>
            </div>

          ) : (<div className="button-div">
            <span><img src={src2} alt="" /></span>
            <span>Dark mode</span> 
          </div>

          )}
        </button>

        <div className={`nav-menu ${gotClicked ? "expanded" : ""}`}>
          <ul>
            <li>
              <a className={pathname === "#home" ? "active" : ""} href="#home">
                Home
              </a>
            </li>
            <li>
              <a
                className={pathname === "#projects" ? "active" : ""}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={pathname === "#contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={pathname === "#about" ? "active" : ""}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
