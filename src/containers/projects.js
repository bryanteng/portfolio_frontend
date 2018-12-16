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
        </div>
      )
        : "hi from Projects" }
      </div>
    )
  }

}
