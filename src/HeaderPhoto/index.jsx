import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class HeaderPhoto extends Component {
  render() {
    return (
      <div className="hero-container">
        <div id="hero">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
            data-interval="0"
            keyboard="true"
            data-pause="hover"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block hero1"
                  src="https://i.imgur.com/vEgONex.png"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 hero2"
                  src="https://i.imgur.com/kM9aVLd.png"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 hero3"
                  src="https://i.imgur.com/qo8Ue6L.png"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <a href="#about"><img className='arrow' src="https://i.imgur.com/pSTTXkS.png" alt="" /></a>
        </div>
      </div>
    );
  }
}

export default HeaderPhoto;
