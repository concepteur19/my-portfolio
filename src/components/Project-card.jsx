import React from "react";

function ProjectCard(props) {
  return (
    <div className={props.className}>
      <img src={props.src} alt={props.alt} />
      <p>
        {" "}
        <span className="name-project">{props.name}</span> <br />{" "}
        {/* <span className="description"> {props.description}</span> <br />{" "} */}
        <div className="link-div">
          <i class="fa fa-link" aria-hidden="true"></i>
          <a href={props.link} className="link-a" >Visit Here</a>{" "}
        </div>
        {props.children}

        {/* <div>
          <i class="fa fa-github" aria-hidden="true"></i>
        </div> */}
        
      </p>
    </div>
  );
}

export default ProjectCard;
