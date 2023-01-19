import React, {useState} from "react";

//import SocialMedia from "../components/SocialMedia";
import TypingText from "../components/TypingText";
import Button from "../components/Button";
import { Document, Page } from "react-pdf";

import img from "../assets/pro.jpeg";
import CV from "../assets/CV_2023_Eng.pdf";

import "../styles/home.css";

function Home() {
  const [showPDF, setShowPDF] = useState(false);

  function handleClick() {
    setShowPDF(!showPDF);
    //window.open(CV, "_blank");
  }

  return (
    <div className="fade-in-home ">
      {/* <h1 className="title">Software Engineer</h1>
        <h2 className="another-title-h2">Fullstack web Developper <br /> Junior web Designer</h2> */}

      <div className="fadeIn-text">
        Hey there I'm <span>NGUENING</span>
      </div>

      <span className="multiText"></span>

      <TypingText />

      <a href="/contact">
        <Button
          textArea="Hire me"
          style={{
            top: "650px",
            left: "15.5%",
          }}
        />
      </a>

      <Button
        click={handleClick}
        textArea="Resume"
        style={{ 
          top: "650px",
          left: "37%",
        }}
      />
      {showPDF && (
        <div className="pdf">
          <Document file={CV}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}

      <img className="img1" src={img} alt="profile" />

      {/* <SocialMedia
        style={{
          listStyleType: "none",
          fontSize: "10px",
          
          textAlign: "center",
          zIndex: "4",
          color: "#f5f5f5",
          margin: "10px",
        }}
      /> */}
    </div>
  );
}

export default Home;
