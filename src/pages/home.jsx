import React from "react";

import TypingText from "../components/TypingText";
import Button from "../components/Button";

import img from "../assets/pro.jpeg";
import "../styles/home.css";

function Home() {
  return (
    <div className="fade-in-home home" id="home">
      <div className="left">
        <div className="fadeIn-text">
          Hey there I'm <br /> <span>NGUENING</span>
        </div>

        <div className="fadeIn-text">
          <TypingText />
        </div>

        <div className="resume">
          For a student in their final year of computer engineering, specializing in front-end development with a passion for creating aesthetic 
          and functional websites. I've worked with frameworks like Angular and React to build modern and responsive web applications. 
          I enjoy working in teams to tackle technical challenges and improve my skills. I'm eager to explore new technologies and development methodologies. 
          My goal is to provide a pleasant user experience and satisfy my clients and end-users. If you're looking for a talented and passionate front-end developer, 
          feel free to check out my portfolio and contact me to discuss potential projects.
        </div>

        <a href="/contact">
          <Button
            textArea="Hire me"
            style={{
              top: "70%",
              left: "15.5%",
            }}
          />
        </a>

        <a href="/cv" target="_blank">
          <Button
            textArea="Resume"
            style={{
              top: "70%",
              left: "37%",
            }}
          />
        </a>
      </div>

      <div className="img1 right">
        <img src={img} alt="professional_image" />
      </div>
    </div>
  );
}

export default Home;
