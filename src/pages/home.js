import React from "react";

//import SocialMedia from "../components/SocialMedia";
import TypingText from "../components/TypingText";
import Button from "../components/Button";

import img from "../assets/pro.jpeg";
//import cv from "../assets/cv.pdf";

import "../styles/home.css";

function Home() {
  // const [showPDF, setShowPDF] = useState(false);

  // function handleClick() {
  //   setShowPDF(!showPDF);
  //   //window.open(CV, "_blank");
  // }

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

      <a href="src/assets/cv.pdf" target="_blank" rel="noreferrer">
        <Button
          // click={handleClick}
          textArea="Resume"
          style={{
            top: "650px",
            left: "37%",
          }}
        />
      </a>

      {/* {showPDF && (
        <div className="pdf">
          <Document file={cv}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )} */}

      <img className="img1" src={img} alt="profile" />
    </div>
  );
}

export default Home;
