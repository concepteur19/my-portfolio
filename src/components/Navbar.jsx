import React, { useState } from "react";
import "../styles/navbar.css";
import src from "../assets/icons/icons8-sun-15.png";
import src2 from "../assets/icons/icons8-moon-30.png";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const ligthOrDarkMode = props.ligthOrDarkMode;

  const [gotClicked, setGotClicked] = useState(false);
  function handleClick() {
    setGotClicked(!gotClicked);
  }

  // const [pathname, setPathname] = useState(window.location.hash);
  // useEffect(() => {
  //   function handlePathname() {
  //     setPathname(window.location.hash);
  //   }
  //   window.addEventListener("popstate", handlePathname);

  //   return () => {
  //     window.removeEventListener("popstate", handlePathname);
  //   };
  // }, []);

  return (
    <div className="container-navbar">
      <nav className="nav-bar">
        <a href="/" className="logo">
          {" "}
          TCHOMGUI{" "}
        </a>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 hambuger"
            viewBox="0 0 20 20"
            fill="#111"
            onClick={handleClick}
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        

        <button
          className="theme-button"
          onClick={props.click}
          style={
            ligthOrDarkMode
              ? {
                  backgroundColor: "#f5f5f5",
                  color: "#111",
                  border: "1px solid #d9d9d9",
                }
              : {
                  backgroundColor: "#111",
                  color: "#f5f5f5",
                  border: "1px solid #d9d9d9",
                }
          }
        >
          {!ligthOrDarkMode ? (
            <div className="button-div">
              <span>
                <img src={src} alt="" />
              </span>
              <span className="button-text">Light mode</span>
            </div>
          ) : (
            <div className="button-div">
              <span>
                <img src={src2} alt="" />
              </span>
              <span className="button-text">Dark mode</span>
            </div>
          )}
        </button>

        <div className={`nav-menu ${gotClicked ? "expanded" : ""}`}>
          <ul>
            <li>
            {/* <NavLink to="#home">Home</NavLink> */}
              <a
                className={props.pathname === "#home" ? "active" : ""}
                href="#home"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className={props.pathname === "#about" ? "active" : ""}
              >
                About
              </a>
            </li>

            <li>
              <a
                className={props.pathname === "#projects" ? "active" : ""}
                href="#projects"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={props.pathname === "#contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
