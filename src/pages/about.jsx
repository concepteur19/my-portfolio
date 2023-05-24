import React from "react";
import Title from "../components/Title";

import "../styles/about.css";

//front-end
import html from "../assets/icons/html5-logo-html-logo-0.png";
import css from "../assets/icons/icons8-css3-144.png";
import tailwind from "../assets/icons/icons8-tailwindcss-96.png";
import bootstrap from "../assets/icons/icons8-bootstrap-144.png";
import javascript from "../assets/icons/icons8-javascript-144.png";
import react from "../assets/icons/icons8-react-100.png";
import next from "../assets/icons/nextjs.png";
import angular from "../assets/icons/icons8-angular-96.png";
import typescript from "../assets/icons/typescript_original_logo_icon_146317.png";

//back-end
import node from "../assets/icons/icons8-nodejs-96.png";
import ex from "../assets/icons/ex.png";
import nest from "../assets/icons/nest.png";
import laravel from "../assets/icons/icons8-laravel-100 (1).png";
import sql from "../assets/icons/icons8-mysql-logo-96.png";
import mongo from "../assets/icons/icons8-mongodb-144.png";
import mongos from "../assets/icons/icons8-mongoose-48.png";

//others
import xd from "../assets/icons/icons8-adobe-xd-48.png";
import gitlab from "../assets/icons/gitlab_original_logo_icon_146503.png";
import postman from "../assets/icons/logo-postman.png";
import office from "../assets/icons/msoffice.png";
import github from "../assets/icons/icons8-github-48.png";

function About() {
  return (
    <div id="about-section">
      <div className="about-container">
        <Title title="Education" class="title" />
        animation: fade-in-contact 1s ease-in forwards animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards;
      </div>

      <div className="about-container">
        <Title title="Skills" class="title" />

        <div className="about-inner-container">
          <div className="skills-section">
            <Title title="Front-end Development" class="titleskillssection" />

            <div className="grid-three-col">
              <div className="img-txt">
                <img className="taille-img" src={html} alt="" /> <br />
                <span>HTML5</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={css} alt="" /> <br />
                <span>CSS3</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={bootstrap} alt="" /> <br />
                <span>Bootstrap</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={tailwind} alt="" /> <br />
                <span>Tailwind CSS</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={javascript} alt="" /> <br />
                <span>Javascript</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={react} alt="" /> <br />
                <span>React JS</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={next} alt="" /> <br />
                <span>Next JS</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={angular} alt="" /> <br />
                <span>Angular JS</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={typescript} alt="" /> <br />
                <span>Typescript</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <Title title="Back-end Development" class="titleskillssection" />

            <div className="grid-three-col">
              <div className="img-txt">
                <img className="taille-img" src={node} alt="" /> <br />
                <span>Node JS</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={ex} alt="" /> <br />
                <span>Express JS</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={typescript} alt="" /> <br />
                <span>Typescript</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={nest} alt="" /> <br />
                <span>Nest JS</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={laravel} alt="" /> <br />
                <span>Laravel</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={sql} alt="" /> <br />
                <span>MySQL</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={mongo} alt="" /> <br />
                <span>Mongo db</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={mongos} alt="" /> <br />
                <span>Mongoose</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
            <Title title="Others" class="titleskillssection" />

            <div className="grid-three-col">
              <div className="img-txt">
                <img className="taille-img" src={xd} alt="" /> <br />
                <span>Adobe XD</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={gitlab} alt="" /> <br />
                <span>GitLab</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={github} alt="" /> <br />
                <span>GitHub</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={postman} alt="" /> <br />
                <span>Postman</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src={office} alt="" /> <br />
                <span>Ms Office</span>
              </div>

              <div className="img-txt">
                <img className="taille-img" src='' alt="" /> <br />
                <span>Power AMC</span>
              </div>

            </div>
          </div>
      </div>

      <div className="about-container">
        <Title title="Services" class="title" />
        animation: fade-in-contact 1s ease-in forwards animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
        animation: fade-in-contact 1s ease-in forwards; animation:
        fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
        ease-in forwards;
      </div>
    </div>
  );
}

export default About;
