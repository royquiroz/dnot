import React, { Component } from "react";
import logo from "./logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light ">
        <img
          src={logo}
          width="52"
          height="52"
          className="d-inline-block align-top"
          alt="logo"
        />
      </nav>
    );
  }
}

export default Navbar;
