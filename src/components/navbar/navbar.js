import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { removeToken } from "../../services/login";
import "./navbar.css";

const tabs = [
  {
    name: "Prueba",
    link: "/prueba"
  },
  {
    name: "Prueba",
    link: "/prueba"
  },
  {
    name: "Prueba",
    link: "/prueba"
  }
];

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: "false"
    };
  }

  showMenu = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="margin-icon">
          <img
            src="https://mideclaranot.com/dnot/wp-content/uploads/2019/06/dnot.mx_.png"
            className="d-inline-block align-top logo"
            alt="logo"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.showMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={
            this.state.show
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show"
          }
          id="navbarToggler"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {tabs.map((tab, i) => (
              <li key={i} className="nav-item">
                <NavLink className="nav-link" to={tab.link}>
                  {tab.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={removeToken}
          >
            Cerrar Sesión
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
