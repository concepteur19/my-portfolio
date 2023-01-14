import React from "react";
import TypingText from "../components/TypingText";

import Button from "../components/Button";
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
          textArea="Contact"
          style={{
            top: "57.66%",
            left: "18.5%",
          }}
        />
      </a>

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
  );
}

export default Home;
