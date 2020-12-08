import React from "react";
const Project = (props) => {
    return (
        <div className="col-6-md col-12 projects">
            <img className="portfolio-image" src={props.image} alt={props.image}/>
            <h3>{props.title}</h3>
            <p><a href={props.deployed}>Deployed link</a></p>
            <p><a href={props.repoLink}>Repo Link</a></p>
            <p className="description">{props.description}</p>
        </div>
    )
};
export default Project;