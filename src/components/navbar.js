import React, { Component, Fragment } from 'react';
import bt2 from '../images/logo.png'
import './navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends Component{

  render(){

    return(
      <Fragment>

        <div id="navbar">
          <a class="item">
            <Link to="/about"> About </Link>
          </a>
          <a class="item">
            <Link to="/projects"> Projects </Link>
          </a>
          <a class="item">
            <a href="https://github.com/bryanteng"> GitHub </a>
          </a>
          <a class="item">
            <a href="https://www.linkedin.com/in/bryan-teng/"> LinkedIn </a>
          </a>
          <a class="item">
            <a href="https://medium.com/@bryantteng"> Blogs </a>
          </a>
          <a class="item">
            <a href="https://www.codewars.com/users/yellowishbronze"> CodeWars </a>
          </a>
        </div>
      </Fragment>
    )
  }
}

export default Navbar
