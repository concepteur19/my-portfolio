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

    function handleClick() {
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setIsDarkMode(true);
        }
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");

        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const style = { display: "flex", flexDirection: "column", }
    return (
        <div className={`App ${isDarkMode ? "dark-theme" : "light-theme"}`}>
            <div className="header">
                <Navbar click={handleClick} ligthOrDarkMode={!isDarkMode} />
            </div>

            <div className="main" style={style}>

                {/* <Lateralbar /> */}
                <div className="section-portfolio"><Home /></div>
                <div className="section-portfolio"><Projects /></div>
                <div className="section-portfolio"><About /></div>
                <div className="section-portfolio"><Contact /></div>

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
