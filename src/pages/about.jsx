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
// import nest from "../assets/icons/nest.png";
import laravel from "../assets/icons/icons8-laravel-100 (1).png";
import sql from "../assets/icons/icons8-mysql-logo-96.png";
import mongo from "../assets/icons/icons8-mongodb-144.png";
// import mongos from "../assets/icons/icons8-mongoose-48.png";

// //others
// import xd from "../assets/icons/icons8-adobe-xd-48.png";
// import gitlab from "../assets/icons/gitlab_original_logo_icon_146503.png";
// import postman from "../assets/icons/logo-postman.png";
// import office from "../assets/icons/msoffice.png";
// import github from "../assets/icons/icons8-github-48.png";
// import power from "../assets/icons/power.png";

function About() {
  return (
    <div id="about-section" >
      <div className="about-container">
        <span className="before-title">Get to know</span>
        <Title title="About Me" class="titles-about"></Title>
        <div className="ex-cl-pr">
          <div className="card card-stats ">
            <span></span>
            <span className="text-stat-1">Experience</span><br />
            <span>1+ Year Working</span>
          </div>

          <div className="card card-stats">
            <span></span>
            <span className="text-stat-1">Clients</span> <br />
            <span>Just 5 Actually</span>
          </div>

          <div className="card card-stats">
            <span></span>
            <span className="text-stat-1">Projects</span> <br />
            <span>6+ Completed</span>
          </div>
        </div>
        <div className="edu-work">
          <div className="work">
            <Title title="Work experience" class="title-left" > </Title>
            <div className="education-container">
              {/* <div className="line"> */}
                <div className="year">
                  <span>
                    08-2023 to Now <br />
                    <span className="opacity">Bonamoussadi, Douala</span>
                  </span>
                </div>

                <div className="certification">
                  <span>
                    {" "}
                    Frontend Web developper <br />
                    <sapn className="opacity">2SI-inc</sapn>
                  </span>{" "}
                </div>
              {/* </div> */}
              {/* <div className="line"> */}
                <div className="year">
                  <span>
                    02-2023 to 06-2023 <br />
                    <span className="opacity">Bonamoussadi, Douala</span>
                  </span>
                </div>

                <div className="certification">
                  <span>
                    {" "}
                    Intern web and mobile developper <br />
                    <sapn className="opacity">2SI-inc</sapn>
                  </span>{" "}
                </div>
              {/* </div> */}
              {/* <div className="line"> */}
                <div className="year">
                  <span>
                    07-2022 to 08-2022 <br />
                    <span className="opacity"> Banganté, West - CMR</span>
                  </span>
                </div>

                <div className="certification">
                  <span>
                    {" "}
                    Intern web developper <br />
                    <sapn className="opacity">GLOOM SARL</sapn>
                  </span>{" "}
                </div>
              {/* </div>
              <div className="line"> */}
                <div className="year">
                  <span>
                    07-2021 to 08-2021 <br />
                    <span className="opacity"> Bonapriso, Douala</span>
                  </span>
                </div>

                <div className="certification">
                  <span>
                    {" "}
                    Intern web developper <br />
                    <sapn className="opacity">LUGAR SARL</sapn>
                  </span>{" "}
                </div>
              {/* </div> */}
            </div>
          </div>

          <div className="education">
            <Title title="Education" class="title-left" />
            <div className="education-container">
              {/* <div className="line"> */}
                <div className="year">
                  <span>
                    2023 <br />
                    <span className="opacity">Douala, Cameroun</span>
                  </span>
                </div>

                <div className="certification">
                  <span>
                    {" "}
                    Computer Engineering <br />
                    <sapn className="opacity">
                      Ecole Nationale Supérieure Polytechnique de Douala
                    </sapn>
                  </span>{" "}
                </div>
              {/* </div>

              <div className="line"> */}
                <div className="year">
                  <span>
                    2016 <br />
                    <span className="opacity">Bonaberi, Douala</span>
                  </span>
                </div>

                <div className="certification">
                  <span>
                    {" "}
                    Baccalauréat C(scientifique) <br />
                    <sapn className="opacity">GBHS of Bonaberi</sapn>
                  </span>{" "}
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="about-container">
          <span className="before-title">What skills i have</span>
          <Title title="Skills" class="title title-s" > </Title>

          <div className="skillsSection"> 
            <div className="card card-skills">
              <Title title="Front-end Development" class="titles-skills" />

              
              <div style={{textAlign: 'left', display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '50px', gridRowGap: '10px'}}>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={html} alt="" /> HTML</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={css} alt="" /> CSS</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={javascript} alt="" /> Javascript</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={typescript} alt="" /> Typescript</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={bootstrap} alt="" /> Bootstrap </div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={tailwind} alt="" /> Tailwind</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={angular} alt="" />Angular</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={react} alt="" /> React Js</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={next} alt="" />Next Js</div>
              </div>
            </div>

            <div className="card card-skills">
              <Title title="Backend Development" class="titles-skills"> </Title>

              <div style={{textAlign: 'left', display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '50px', gridRowGap: '10px'}}>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={node} alt="" /> Node Js</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={ex} alt="" /> Express Js</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={laravel} alt="" /> Laravel</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={sql} alt="" /> MySQL</div>
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}> <img className="taille-img" src={mongo} alt="" />Mongo DB</div>
              </div>
                
            </div>
          </div>
          
        </div>

        {/* <div className="about-container" >
          <span className="before-title">Which services i provide</span>
          <Title title="Services" class="title title-s" />
          animation: fade-in-contact 1s ease-in forwards animation:
          fade-in-contact 1s ease-in forwards; animation: fade-in-contact 1s
          ease-in forwards; animation: fade-in-contact 1s ease-in forwards;
          ease-in forwards;
        </div> */}
      </div>
    </div>
  );
}

export default About;
