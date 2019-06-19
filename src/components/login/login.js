import React, { Component } from "react";
//import { message } from "antd";
import { newToken, validateToken } from "../../services/login";

import "./login.css";

class Login extends Component {
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
    let token = await newToken(this.state.user);
    if (token.response) {
      let check = await validateToken();

      console.log(check);
    }

    console.log(token);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="offset-md-4 col-md-4">
            <div className="card bg-light text-center">
              <div className="card-body">
                <form className="form-sigin" onSubmit={this.handleLogin}>
                  <h1 className="h3 mb-3 font-weight-normal">Iniciar Sesión</h1>
                  <label htmlFor="inputUsername" className="sr-only">
                    Username
                  </label>
                  <input
                    type="text"
                    id="inputUsername"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="inputPassword" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                  />
                  <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
