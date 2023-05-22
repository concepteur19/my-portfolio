import React, { useState, useEffect } from "react";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../styles/App.css";

import Navbar from "./Navbar";
import Lateralbar from "./Lateralbar";

import Home from "../pages/home";
import Projects from "../pages/projects";
import About from "../pages/about";
import Contact from "../pages/contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isOver, setIsOver] = useState(false);

  function handleMouseOver() {
    setIsOver(true);
  }

  function handleMouseDown() {
    setIsOver(false);
  }

  function handleClick() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // gestion de de la classe active lors du scroll ou lors des cliques
  const [pathname, setHash] = useState(window.location.hash);
  useEffect(() => {
    function handleHash() {
      setHash(window.location.hash);
    }

    function handleScroll() {
      const sections = document.querySelectorAll("section");

      const scrollPosition =
        window.pageXOffset || document.documentElement.scrollTop;
      let currentSection = "#home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop - 150) {
          currentSection = `#${section.id}`;
        }
      });

      setHash(currentSection);
    }

    window.addEventListener("popstate", handleHash);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("popstate", handleHash);
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  // fin de gestion

  const style = { display: "flex", flexDirection: "column" };
  return (
    <div className={`App ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <div className="header">
        <Navbar
          click={handleClick}
          ligthOrDarkMode={!isDarkMode}
          pathname={pathname}
        />
      </div>

      <div className="main" style={style}>
        <Lateralbar pathname={pathname} />
        <section id="home">
          <div className="section-portfolio">
            <Home 
              isDarkMode={isDarkMode} 
              isOver={isOver}
              handleMouseDown={handleMouseDown}
              handleMouseOver={handleMouseOver}
            />
          </div>
        </section>
        <section id="about">
          <div className="section-portfolio">
            <About />
          </div>
        </section>
        <section id="projects">
          <div className="section-portfolio">
            <Projects />
          </div>
        </section>
        <section id="contact">
          <div className="section-portfolio">
            <Contact 
              isOver={isOver}
              handleMouseDown={handleMouseDown}
              handleMouseOver={handleMouseOver}
            />
          </div>
        </section>

        {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />.
                </Routes>
            </BrowserRouter> */}
      </div>
      <div className="footer">
        <footer>je suis le footer</footer>
      </div>
    </div>
  );
}

export default App;
