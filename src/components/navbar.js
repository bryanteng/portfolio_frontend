import React, { Component, Fragment } from 'react';
import bt2 from '../images/logo.png'
import './navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends Component{

  render(){

    return(
      <Fragment>
        <div class="ui five item menu">
          <div class="header item" id="icon">
            <img alt="logo" src={bt2} />
          </div>
          <a class="item">
            <Link to="/projects">| Projects |</Link>
          </a>
          <a class="item">
            <Link to="/projects">| Projects |</Link>
          </a>
          <a class="item">
            <Link to="/projects">| Projects |</Link>
          </a>
          <a class="item">
            <Link to="/projects">| Projects |</Link>
          </a>
        </div>
      </Fragment>
    )
  }
}

export default Navbar
