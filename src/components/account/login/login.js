import React, { Component } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { newToken, validateToken } from "../../../services/login";

import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      validationButton: false
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
    let token = await newToken(this.state.user);
    if (token.response) {
      let check = await validateToken();

      //console.log(check.message);
      if (check.response) this.props.history.push("/home");
    }

    //console.log(token);
    if (token.message === "Usuario no verificado") {
      this.setState({ validationButton: true });
      message.error(token.message, 3);
    } else if (token.response === true) {
      message.success(token.message, 3);
      window.location.reload();
    } else {
      message.error(token.message, 3);
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
                {this.state.validationButton ? (
                  <div className="d-flex justify-content-center">
                    <Link to="/validation-email" className="register-link">
                      Reenviar email para validar tu cuenta
                    </Link>
                  </div>
                ) : null}
                <form className="form-sigin" onSubmit={this.handleLogin}>
                  <label htmlFor="inputUsername" className="sr-only">
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    id="inputUsername"
                    className="form-control form-control-lg"
                    placeholder="Nombre de Usuario"
                    name="username"
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
                    name="password"
                    onChange={this.handleChange}
                  />
                  <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                  >
                    Iniciar Sesión
                  </button>
                </form>
                <div className="d-flex justify-content-between">
                  <div className="letter-size">
                    ¿Olvidaste la{" "}
                    <Link to="/forgot-password" className="register-link">
                      contraseña
                    </Link>
                    ?
                  </div>
                  <div className="letter-size">
                    <Link to="/register" className="register-link">
                      Registrate
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

export default Login;
