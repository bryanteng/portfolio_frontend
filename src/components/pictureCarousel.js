import React, { Component } from 'react';
import '../styles/pictureCarousel.css'
import Popup from 'reactjs-popup'

const PictureCarousel = ({pictures}) => (
  <Popup trigger={<button className="ui button"> Click to see Project pictures </button>} modal>
    {close => (
      <div className="ui red segment" >
        <div className="header"> Project Pictures </div>
        <ul className="content" id='carousel'>
        {pictures ? pictures.map(picture => <li>{picture.context} <img id="carousel-image" alt={picture.context} src={picture.picture} /></li>) : "hi" }
        </ul>
      </div>
    )}
  </Popup>
);

export default PictureCarousel
