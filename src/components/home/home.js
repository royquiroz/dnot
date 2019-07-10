import React, { Component } from "react";
import { options } from "../../utils/options";

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
            className="rounded mx-auto d-block home-logo"
            alt="logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="card-deck">
              {options.map((option, i) => (
                <div key={i} className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <i
                        className="fa fa-file-text-o fa-5x"
                        aria-hidden="true"
                      />
                    </div>
                    <h5 className="card-title text-center margin-title-card">
                      {option.name}
                    </h5>
                    <p className="card-text">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
