import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { listUsers } from "../../services/users-list";

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    listUsers().then(res => this.setState({ users: res }));
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Lista de usuarios</h1>
          <ul className="list-group list-group-flush">
            {users.map((user, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between"
              >
                {user.usuario}
                <button type="button" className="btn btn-light">
                  <Link to={`/user/${user.usuario_id}`}>Editar</Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default UsersList;
