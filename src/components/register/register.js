import React, { Component } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { register } from "../../services/register";

import "./register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  handleChange = e => {
    const { user } = this.state;
    let field = e.target.name;
    user[field] = e.target.value;

    this.setState({ user });
  };

  handleLogin = async e => {
    e.preventDefault();
    let response = await register(this.state.user);

    console.log(response);

    if (response.status !== 200) {
      for (const key in response.data) {
        message.error(`${key}: ${response.data[key]}`);
      }
    } else if (!response.data.response) {
      message.error(response.data.message);
    } else {
      message.success(response.data.message);
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-4 col-md-4">
            <div className="card bg-light text-center">
              <div className="card-body">
                <img
                  src="https://mideclaranot.com/dnot/wp-content/uploads/2019/06/dnot.mx_.png"
                  className="d-inline-block align-top"
                  alt="logo"
                />
                <form className="form-sigin" onSubmit={this.handleLogin}>
                  <label htmlFor="inputUsername" className="sr-only">
                    Nombre de usuario
                  </label>
                  <input
                    type="text"
                    id="inputUsername"
                    className="form-control form-control-lg"
                    placeholder="Nombre de Usuario"
                    name="usuario"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="inputEmail" className="sr-only">
                    Email
                  </label>
                  <input
                    type="text"
                    id="inputEmail"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="inputPassword" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control form-control-lg"
                    placeholder="Contraseña"
                    name="clave"
                    onChange={this.handleChange}
                  />
                  <button
                    className="btn btn-lg btn-success btn-block"
                    type="submit"
                  >
                    Registrarse
                  </button>
                </form>
                <div className="d-flex justify-content-end">
                  <div className="letter-size">
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/" className="register-link">
                      Inicia Sesión
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
