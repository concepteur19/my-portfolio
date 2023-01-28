import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import images from "../images";
import ProjectCard from "../components/Project-card";
import '../styles/projects.css'
import Title from "../components/Title";

const projects = [
  {
    name: "My portfolio",
    image: images[0],
    description: "Work exp, education, projects",
    link: "https://www.CJS-portfolio.com",
  },
  {
    name: "CSMedia",
    image: images[1],
    description: "My personal social media",
    link: "https://www.CSMedia.com",
  },
  // additional projects

  {
    name: "CJS-Todo",
    image: images[2],
    description: "My personal Todo list",
    link: "https://www.CJS-Todo.com",
  },
  
  {
    name: "CJS-Ecom",
    image: images[3],
    description: "My personal e-commerce",
    link: "https://www.CJS-Ecom.com",
  },
];

function Projects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="container">
      <Title 
        title = "My Projects"
      />

      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {projects.map((projectDetails) => (
            <motion.div className="item">
              <ProjectCard
                src={projectDetails.image}
                alt={projectDetails.name}
                name={projectDetails.name}
                description={projectDetails.description}
                link={projectDetails.link}
                className="project-card"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;
