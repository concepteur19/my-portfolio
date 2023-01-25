import React from "react";

function ProjectCard(props) {
  return (
    <div className={props.className}>
      <img src={props.src} alt={props.alt} />
      <p>
        {" "}
        <span className="name">{props.name}</span> <br />{" "}
        <span className="description"> {props.description}</span> <br />{" "}
        <a href={props.link}>Visit Here</a>{" "}
      </p>
    </div>
  );
}

export default ProjectCard;
