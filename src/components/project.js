import React from 'react';

const Project = ({project}) => (
  <div>
    <h1>{project.title} </h1>
    <h4>{project.details} </h4>
    <ul>
    {project.tools ? project.tools.map(tool => <li>{tool} </li>) : null}
    </ul>
    <ul>
    {project.pictures ? project.pictures.map(picture => <li>{picture.context} <img alt={picture.context} src={picture.picture} /> </li>) : null}
    </ul>
  </div>
);

export default Project;
