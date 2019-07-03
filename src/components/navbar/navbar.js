import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Dropdown, Avatar } from "antd";

import { removeToken } from "../../services/login";
import "./navbar.css";

const tabs = [
  {
    name: "ISR x Enaj",
    link: "/upload"
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

const ProfileMenu = (
  <Menu>
    <Menu.Item>
      <NavLink rel="noopener noreferrer" to="/profile">
        Perfil
      </NavLink>
    </Menu.Item>
    {JSON.parse(localStorage.getItem("id")) === 2 ? (
      <Menu.Item>
        <NavLink rel="noopener noreferrer" to="/users-list">
          Lista de usuarios
        </NavLink>
      </Menu.Item>
    ) : null}
    <Menu.Divider />
    <Menu.Item>
      <div rel="noopener noreferrer" onClick={removeToken}>
        Cerrar Sesión
      </div>
    </Menu.Item>
  </Menu>
);

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
          <Dropdown overlay={ProfileMenu} placement="bottomLeft">
            <Avatar>
              {JSON.parse(localStorage.getItem("user"))
                .usuario.substr(0, 1)
                .toUpperCase()}
            </Avatar>
          </Dropdown>
        </div>
      </nav>
    );
  }
}

export default Navbar;
