import "./projects.css"
import React from "react";  
import Works from "./works";

const Projects = () => {
  return(
    <section className="work section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className ="section__subtitle"> Most Recent works</span>
      <Works/>
    
    </section>
  )
}

export default Projects;  