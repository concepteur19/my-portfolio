import React from "react";

function ProjectCard(props) {
  return (
    <div className={props.className}>
      <img src={props.src} alt={props.alt} />
      <div>
        {" "}
        <span className="name-project">{props.name}</span> <br />{" "}
        {/* <span className="description"> {props.description}</span> <br />{" "} */}
        {props.children} 
        {/* <div>
          <i class="fa fa-github" aria-hidden="true"></i>
        </div> */}
        { props.tech && <span style={{ fontSize: "12px" }} > {props.tech} </span>  }
        {props.maintenance && (
          <div style={{ fontSize: "12px" }}>
            Software maintenance and updates.
          </div>
        )} 
        <div className="link-div">
          <i style={{ fontSize: "12px" }} class="fa fa-link" aria-hidden="true"></i>
          <a href={props.link} className="link-a" style={{ fontSize: "12px" }}>
            Visit Here
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
