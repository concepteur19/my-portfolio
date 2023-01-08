import React from "react";
import Button from "../components/Button";
import "../styles/home.css";

function Home() {
  return (
    <div>
      <h1 className="title">Software Engineer</h1>
      <h2 className="another-title-h2-1">Fullstack web Developper</h2>
      <h2 className="another-title-h2-2">Junior web Designer</h2>
      <Button
        textArea="Contact"
        style={{
          top: "57.66%",
          left: "16%",
        }}
      />
      <h2 className="h22">Hey ther i'm <h1 className="h11"> Zobel </h1></h2>
      <Button
        textArea="About"
        style={{
          top: "42.63%",
          left: "75%",
        }}
      />
    </div>
  );
}

export default Home;
