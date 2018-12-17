import React, { Component, Fragment } from 'react';
import bt2 from '../images/bt2inverted.png'
import './navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends Component{

  render(){

    return(
      <Fragment>
      <div class='ui inverted segment' >
        <div class="ui inverted secondary pointing menu">
          <div class="header item" id="icon">
            bt<sup>2</sup>
          </div>
          <a class="item">
            <Link to="/projects">| Projects |</Link>
          </a>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default Navbar
