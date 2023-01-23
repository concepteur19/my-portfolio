import React, {useState} from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import "../styles/App.css";

import Navbar from "./Navbar";
import Lateralbar from "./Lateralbar";

import Home from "../pages/home";
import Projects from "../pages/projects";
import About from "../pages/about";
import Contact from "../pages/contact"

function App() {

  const [ligthOrDarkMode, setLigthMode] = useState(true);

  function handleLightClick() {
    setLigthMode(!ligthOrDarkMode)
  }

  return (
    <div className={`App ${ligthOrDarkMode? 'light-theme' : 'dark-theme'}`} >
      {/* <img className='img' src={img} alt="" /> */}
      <Navbar 
        click = {handleLightClick}
        ligthOrDarkMode = {ligthOrDarkMode}
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
