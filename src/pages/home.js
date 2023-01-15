import React from "react";

import SocialMedia from "../components/SocialMedia";
import TypingText from "../components/TypingText";
import Button from "../components/Button";

import img from "../assets/pro.jpeg"

import "../styles/home.css";

function Home() {
  return (
    <div>
      {/* <h1 className="title">Software Engineer</h1>
        <h2 className="another-title-h2">Fullstack web Developper <br /> Junior web Designer</h2> */}

      <div className="fadeIn-text">
        Hey there I'm <span>NGUENING</span>
      </div>

      <TypingText />

      <a href="/contact">
        <Button
          textArea="Hire me"
          style={{
            top: "60%",
            left: "15.5%",
          }}
        />
      </a>

      <a href="/about">
        <Button
          textArea="Resume"
          style={{
            top: "60%",
            left: "33%",
          }}
        />
      </a>

      <img src={img} alt="profile" />

      <SocialMedia />
    </div>
  );
}

export default Home;
