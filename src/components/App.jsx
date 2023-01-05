import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import "../styles/App.css";

//import img from "../assets/pexels-marta-branco-1194713.jpg";

import Navbar from "./Navbar";
//import Lateralbar from "./Lateralbar";

import Home from "../pages/home";
import Projects from "../pages/projects";
import About from "../pages/about";
import Contact from "../pages/contact"


function App() {

  return (
    <div className="App">
      {/* <img src={img} alt="Background" className="img" /> */}
      <div className="img"></div>
      <Navbar />
      {/* <Lateralbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
