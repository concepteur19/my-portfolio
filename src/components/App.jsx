import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import "../styles/App.css";

import Navbar from "./Navbar";
import Lateralbar from "./Lateralbar";

import Home from "../pages/home";
import Projects from "../pages/projects";
import About from "../pages/about";
import Contact from "../pages/contact"

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleLightClick() {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.add("light-theme"); 
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode? 'dark-theme' : 'light-theme' }`} >
      <Navbar 
        click = {handleLightClick}
        ligthOrDarkMode = {isDarkMode}
      />
      <Lateralbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />.
        </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
