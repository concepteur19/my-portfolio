import React from "react";

import TypingText from "../components/TypingText";
import Button from "../components/Button";

import img from "../assets/pro.jpeg";
import "../styles/home.css";

function Home() {

  return (
    <div className="fade-in-home ">
      <div className="fadeIn-text">
        Hey there I'm <span>NGUENING</span>
      </div>

      {/* <span className="multiText"></span> */}

      <TypingText />

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

      <img className="img1" src={img} alt="profile" />
    </div>
  );
}

export default Home;
