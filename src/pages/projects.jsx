import React from "react";
// import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

import images from "../images";
import ProjectCard from "../components/Project-card";
import "../styles/projects.css";
import Title from "../components/Title";

const projects = [
  {
    name: "My portfolio",
    image: images[0],
    description: "Work exp, education, projects",
    link: "https://www.CJS-portfolio.com",
  },
  // {
  //   name: "CSMedia",
  //   image: images[1],
  //   description: "My personal social media",
  //   link: "https://www.CSMedia.com",
  // },
  // additional projects

  {
    name: "Kahak",
    image: images[2],
    description: "loging and vehicule localtion",
    link: "https://www.kahak.com",
  },
  {
    name: "Loterie EC",
    image: images[3],
    description: "dv loterie registering candidate",
    link: "https://www.dvloteriec.com",
  },
  {
    name: "My best follow up",
    image: images[2],
    description: "app for dabetic patient follow",
    link: "https://www.dvloteriec.com",
  },
  {
    name: "Ma tension",
    image: images[2],
    description: "app for dabetic patient follow",
    link: "https://www.matension.com",
  },

  // {
  //   name: "CJS-Ecom",
  //   image: images[3],
  //   description: "My personal e-commerce",
  //   link: "https://www.CJS-Ecom.com",
  // },
];

function Projects() {
  // const [width, setWidth] = useState(0);
  // const carousel = useRef();

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (
    <div className="container" id="projects">
      <div>
        <Title title="My Projects" class="title" />
      </div>
      <div className="project-container">
        {/* <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        > */}
          {/* <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          > */}
            {projects.map((projectDetails) => (
              // <motion.div className="item">
                <ProjectCard
                  src={projectDetails.image}
                  alt={projectDetails.name}
                  name={projectDetails.name}
                  description={projectDetails.description}
                  link={projectDetails.link}
                  // children={ <i class="fa fa-github" aria-hidden="true"></i>}
                  className="project-card"
                />
              // </motion.div>
            ))}
          {/* </motion.div> */}
        {/* </motion.div> */}
      </div>
    </div>
  );
}

export default Projects;
