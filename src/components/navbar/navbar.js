import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand mx-auto">
          <img
            src="https://mideclaranot.com/dnot/wp-content/uploads/2019/06/dnot.mx_.png"
            width="200"
            height="auto"
            className="d-inline-block align-top"
            alt="logo"
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
