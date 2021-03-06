import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { message } from "antd";
import { userInformation, changeUserInformation } from "../../../services/user";

import Navbar from "../../navbar/navbar";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentWillUnmount() {
    let userId = { id: JSON.parse(localStorage.getItem("user")).usuario_id };

    userInformation(userId).then(res =>
      localStorage.setItem("user", JSON.stringify(res.data.result[0]))
    );
  }

  componentWillMount() {
    this.setState({ user: JSON.parse(localStorage.getItem("user")) });
  }

  handleChange = e => {
    const { user } = this.state;
    let field = e.target.name;
    user[field] = e.target.value;

    this.setState({ user });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let user = await changeUserInformation(this.state.user);

    //console.log(user);
    if (user.status !== 200) {
      for (const key in user.data) {
        message.error(`${key}: ${user.data[key]}`);
      }
    }

    if (user.response === true) {
      message.success(user.message, 3);
    }
  };

  render() {
    //console.log(this.state.user);

    const { user } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="offset-md-4 col-md-4">
              <div className="card bg-light text-center">
                <div className="card-body">
                  <form className="form-sigin" onSubmit={this.handleSubmit}>
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
                      value={user.usuario}
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
                      value={user.email}
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
                      Actualizar Información
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
