import React from "react";

//import TypingText from "../components/TypingText";
import Button from "../components/Button";

import img from "../assets/pro.jpeg";
import "../styles/home.css";
import SocialMedia from "../components/SocialMedia";

function Home(props) {

  const styleDark = {
    boxShadow: "1px 1px 8px rgb(20, 1, 188)"
  };

  const styleLight = {
    boxShadow: "1px 1px 8px #747474"
  }

  return (
    <div className="fade-in-home home" id="home">
      
      <div className="left">
        <div className="fadeIn-text">
          Hey there It's <br /> <span>Zobel Nguening</span>
        </div>

        <div className="fadeIn-text2">
          And I'm <span>Front-end Web Developper</span>
        </div>

        {/* <div className="fadeIn-text">
          <TypingText />
        </div> */}
        <br />
        <div className="resume">
          As a final year computer engineering student specializing in front-end development, 
          I create aesthetic and functional websites using Angular and React. With a passion 
          for improving my skills and working in teams, I aim to deliver a great user experience. 
          Check out my portfolio to learn more.
        </div>
        <br />

        <a href="/cv" target="_blank">
          <Button
            textArea="Download cv"
            style={props.isDarkMode? styleDark : styleLight}
          />
        </a>
      </div>

      <div className="img1 right">
        <img src={img} alt="professional_image" className="profile-img"/>
      </div>
    </div>
  );
}

export default Home;
