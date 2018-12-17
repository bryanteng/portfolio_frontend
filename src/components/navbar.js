import React, { Component, Fragment } from 'react';
import bt2 from '../images/bt2.png'
import {Link} from 'react-router-dom'

class Navbar extends Component{

  render(){

    return(
      <Fragment>
        <div class="ui menu">
          <div class="header item">
            <img src={bt2} />
          </div>
          <a class="item">
            <Link to="/projects">Projects</Link>
          </a>
        </div>
      </Fragment>
    )
  }
}

export default Navbar
