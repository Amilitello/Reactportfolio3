import React from "react";
import Project from "../components/Project";
import Workout from "../images/workouttracker.jpg";
import Campify from "../images/camppro.JPG";
import TacoParty from "../images/tacoparty.png";

function Portfolio() {
  return (
    <div>
  <header>
    <h1>Portfolio</h1>
  </header>
  <br></br>
  <div className="container-fluid ">
    <section className="row">
      <Project
        title="Fitness Tracker"
        deployed="https://powerful-beyond-51778.herokuapp.com/"
        repoLink="https://github.com/Amilitello/fitnesstracker"
        description="Fitness Tacking App"
        className ="portfolio-image"image={Workout}
      />
      <Project
        title="Campify"
        deployed="https://campifygroupproject.herokuapp.com/"
        repoLink="https://github.com/andreaives/campify.git"
        description="Social Media app for the outdoors"
        className ="portfolio-image"image={Campify}
      />
      <Project
        title="Taco Party"
        deployed="https://lauracole1900.github.io/tacoParty"
        repoLink="https://github.com/LauraCole1900/tacoParty"
        description="Taco Party generating App"
        className ="portfolio-image"image={TacoParty}
      />
    </section>
  </div>
</div>
)
}
export default Portfolio;