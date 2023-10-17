import React from "react";

//import TypingText from "../components/TypingText";
import Button from "../components/Button";

import img from "../assets/pro.jpeg";
import "../styles/home.css";
import cv from "../assets/cv.pdf";
// import 

function Home() {
  // const styleDark = {
  //   boxShadow: "1px 1px 8px rgb(20, 1, 188)",
  // };

  // const styleLight = {
  //   boxShadow: "1px 1px 8px #747474",
  // };

  return (
    <div className="fade-in-home home" id="home">
      <div className="section-social">

        <div className="vertical-line"></div>
        <div className="social-media">

          <a href="/twiter"> <i class="icn fa fa-twitter" aria-hidden="true"></i></a>
          <a href="/in"> <i class="icn fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="/wame"> <i class="icn fa fa-whatsapp" aria-hidden="true"></i></a>
          <a href="/g+"> <i class="icn fa fa-google-plus" aria-hidden="true"></i></a>

        </div>
        <div className="vertical-line"></div>
      </div>

      <div className="home-container">
        <div className="section-up">
          <div className="left">
            <div className="fadeIn-text">
              Hey there It's <br /> <span>Zobel Nguening</span>
            </div>

            <div className="fadeIn-text2">
              And I'm <span>Front-end Developper</span>
            </div>

            <div className="resume">
              As a Sofware Engineer specializing in front-end
              development, I create aesthetic and functional websites using principally Angular
              and React. With a passion for improving my skills and working in
              teams, I aim to deliver a great user experience. Check out my
              portfolio to learn more.
            </div> <br />

            <a href={cv} target="_blank" rel="noreferrer" >
              <Button
                text="Get resume"
                icon = {
                <i class="fa fa-arrow-circle-right" aria-hidden="true" style={{marginLeft: '10px', cursor: 'pointer', }}></i>}
              // mouseOver={props.handleMouseOver}
              // mouseDown={props.handleMouseDown}
              // style={props.isDarkMode ? styleDark : styleLight}
              />
            </a> <br />

          </div>

          <div className="img1 right">
            <img src={img} alt="professional_image" className="profile-img" />
          </div>
        </div>

        <div className="citation">
          <div className="citation-container">
            <span className="quote-left">❝</span> <br />
            <span className="content">
              Tu te mens en t'disant que tu vas tout niquer, un athée qui taffe quasi tous les jours, aura toujours plus d’opportunités ...
            </span><br />
            <span className="quote-right">❞</span> <br />
            <span className="author">
              M. Damso
            </span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
