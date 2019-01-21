import React, { Component } from "react";
import "bulma";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <header className="has-navbar-fixed-top">
        <nav className="navbar is-fixed-top">
          <div className="navbar-brand">
            <a href="#home">
              <img id="winson-logo" src="https://i.imgur.com/xFKk3Cf.png" />
            </a>
            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <a
                className="navbar-item"
                href="#about"
              >
                About
              </a>
              <a
                className="navbar-item"
                href="#menu"
              >
                Menu
              </a>
              <a
                className="navbar-item"
                href="#reservations"
              >
                Reservations
              </a>
              <a
                className="navbar-item"
                href="#press"
              >
                Press
              </a>
              <a
                className="navbar-item"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item" />
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
