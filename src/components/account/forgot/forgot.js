import React, { Component } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { forgotPassword } from "../../../services/forgot";

import "./forgot.css";

class Forgot extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  handleChange = e => {
    this.setState({ email: e.target.value });
  };

  handleLogin = async e => {
    e.preventDefault();
    let response = await forgotPassword(this.state);
    //console.log(response);

    if (response.status !== 200) {
      for (const key in response.data) {
        message.error(`${key}: ${response.data[key]}`);
      }
    } else if (!response.data.response) {
      message.error(response.data.message);
    } else {
      message.success(
        `${response.data.message}, favor de revisar su bandeja de entrada`
      );
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
                  <button
                    className="btn btn-lg btn-danger btn-block"
                    type="submit"
                  >
                    Enviar link a mi correo
                  </button>
                </form>
                <div className="d-flex justify-content-end">
                  <div className="letter-size">
                    <Link to="/" className="register-link">
                      Iniciar Sesión
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

export default Forgot;
