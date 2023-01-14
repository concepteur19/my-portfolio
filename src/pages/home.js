import React from "react";
import TypingText from "../components/TypingText";

import Button from "../components/Button";
import "../styles/home.css";

function Home() {
  return (
    <div>
      <div className="first-block">
        <h1 className="title">Software Engineer</h1>
        <h2 className="another-title-h2">Fullstack web Developper <br /> Junior web Designer</h2>
        <a href="/contact">
          <Button
            textArea="Contact"
            style={{
              top: "57.66%",
              left: "18.5%",
            }}
          />
        </a>
      </div>

      <div className="second-block">
        <div className="first-line ">Hey there I'm <span>NGUENING</span></div>
        
        <TypingText />
        <a href="/about">
          <Button
            textArea="About"
            style={{
              top: "46%",
              left: "68%",
            }}
          />
        </a>
      </div>

    </div>
  );
}

export default Home;
