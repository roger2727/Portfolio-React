import React from "react";
import "./ProjectsCard.css";
const ProjectsCard = (props) => {
  return (
    <div className="box">
      <div className="card">
        <img className="card_image" src={props.image} alt={props.title} />
        <div className="group-card">
          <h1 className="heading">{props.title}</h1>
          <hr />
          <p className="description">{props.description}</p>
          <h3 className="heading">{props.skillsTitle}</h3>
          <hr />
          {props.skillsList}
          <a className="resume" href={props.href}>
            Github link here
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
