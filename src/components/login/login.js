import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <input type="submit" value="ingresar" />
        </form>
      </div>
    );
  }
}

export default Login;
