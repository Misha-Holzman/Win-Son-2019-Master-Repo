import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../About';
import Press from '../Press';
import HeaderPhoto from '../HeaderPhoto';
import Reservations from '../Reservations';
import Nav from '../Nav';
import Menu from '../Menu';
import Contact from '../Contact';
import Footer from '../Footer';
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HeaderPhoto />
        <About />
        <Menu />
        <br/>
        <Reservations />
        <Press />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
