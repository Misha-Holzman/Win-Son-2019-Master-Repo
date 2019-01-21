import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="subscribeToUs">
            <p>Subscribe to Our Mailing List</p>
            <button type="button">Subscribe</button>
          </div>
          <div className="socialIcons">
            <a href="https://www.yelp.com/biz/win-son-brooklyn-4">
              <img src="https://i.imgur.com/fLTGhEk.png" />
            </a>
            <a href="https://www.instagram.com/explore/locations/1020770799/win-son/?hl=en">
              <img src="https://i.imgur.com/A8m2QhL.png" />
            </a>
            <a href="https://www.facebook.com/pages/Win-Son/196863394276454">
              <img src="https://i.imgur.com/t1J9Oxc.png" />
            </a>
          </div>
        </div>
        <div>
          <p className="copyRight"><span>©</span> 2018 Win Son Restaurant</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
