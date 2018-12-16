import React, { Component } from 'react';
import Project from '../components/project'
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
      { this.state.projects ? this.state.projects.map(project => <Project project={project} />) : "WHERE ME PROJECTS M8" }
      </div>
    )
  }

}
