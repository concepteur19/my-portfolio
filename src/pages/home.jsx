import React from "react";

//import TypingText from "../components/TypingText";
import Button from "../components/Button";

import img from "../assets/pro.jpeg";
import "../styles/home.css";
import SocialMedia from "../components/SocialMedia";

function Home(props) {
  const styleDark = {
    boxShadow: "1px 1px 8px rgb(20, 1, 188)",
  };

  const styleLight = {
    boxShadow: "1px 1px 8px #747474",
  };

  const stylesHome = {
    display: "flex",
    justifyContent: "center"
  }

  return (
    <div className="fade-in-home home" id="home">
      <div className="left">
        <div className="fadeIn-text">
          Hey there It's <br /> <span>Zobel Nguening</span>
        </div>

        <div className="fadeIn-text2">
          And I'm <span>Front-end Developper</span>
        </div>

        {/* <div className="fadeIn-text">
          <TypingText />
        </div> */}
        <br />
        <div className="resume">
          As a Sofware Engineer specializing in front-end
          development, I create aesthetic and functional websites using principally Angular
          and React. With a passion for improving my skills and working in
          teams, I aim to deliver a great user experience. Check out my
          portfolio to learn more.
        </div>  <br />
        <div className="social-media">
            <SocialMedia 
              style = {stylesHome}
            />
          </div> <br />
          <a href="#cv" target="_blank">
            <Button
              text="Download cv"
              mouseOver={props.handleMouseOver}
              mouseDown={props.handleMouseDown}
              style={props.isDarkMode ? styleDark : styleLight}
            />
          </a> <br />
        
      </div>

      <div className="img1 right">
        <img src={img} alt="professional_image" className="profile-img" />
      </div>
    </div>
  );
}

export default Home;