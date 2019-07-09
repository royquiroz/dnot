import React, { Component } from "react";

import Navbar from "../navbar/navbar";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="img-home d-flex align-content-center flex-wrap">
          <img
            src="https://mideclaranot.com/dnot/wp-content/uploads/2019/06/dnot.mx_.png"
            class="rounded mx-auto d-block home-logo"
            alt="logo"
          />
        </div>
      </div>
    );
  }
}

export default Home;
