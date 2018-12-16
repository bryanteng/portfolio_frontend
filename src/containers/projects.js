import React, { Component } from 'react';

export default class Projects extends Component{

  state={
    projects:[]
  }

  componentDidMount(){
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.setState({projects: data }) )
  }

  render(){
    return(
      <div>
      { this.state.projects ? this.state.projects.map(project =>
        <div>
          <h1>{project.title} </h1>
          <h4>{project.details} </h4>
          <ul>
          {project.tools ? project.tools.map(tool => <li>{tool} </li>) : null}
          </ul>
          <ul>
          {project.pictures ? project.pictures.map(picture => <li>{picture.context} <img src={picture.picture} /> </li>) : null}
          </ul>
        </div>
      )
        : "WHERE ME PROJECTS M8" }
      </div>
    )
  }

}
