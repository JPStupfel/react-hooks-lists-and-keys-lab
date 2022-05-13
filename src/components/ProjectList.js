import React from "react";
import ProjectItem from "./ProjectItem";



function ProjectList(projects) {
  console.log(projects.projects)
   const projArray = projects.projects.map(e => <ProjectItem key={e.id} id={e.id} name={e.name} technologies={e.technologies}/> )


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projArray}
      
      </div>
    </div>
  );
}

export default ProjectList;
