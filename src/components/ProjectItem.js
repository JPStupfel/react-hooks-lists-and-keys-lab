import React from "react";

function ProjectItem({ id, name, about, technologies }) {
  //console.log(technologies)
  let tecArray = technologies.map(e=><span key={e+id}>{e}</span>)
  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tecArray}
      </div>
    </div>
  );
}

export default ProjectItem;
