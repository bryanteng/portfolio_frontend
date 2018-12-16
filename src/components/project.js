import React from 'react';
import PictureCarousel from './pictureCarousel'

const Project = ({project}) => (
  <div>
    <h1>{project.title} </h1>
    <h4>{project.details} </h4>
    <ul>
    {project.tools ? project.tools.map(tool => <li>{tool} </li>) : null}
    </ul>
    <ul>
    {project.pictures ? <PictureCarousel pictures={project.pictures} />  : null}
    </ul>
  </div>
);

export default Project;
