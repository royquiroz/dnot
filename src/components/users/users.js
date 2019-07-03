import React, { Component } from "react";
import Navbar from "../navbar/navbar";

class UsersList extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Lista de usuarios</h1>
        </div>
      </div>
    );
  }
}

export default UsersList;
