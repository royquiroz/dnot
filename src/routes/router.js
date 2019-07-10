import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../components/account/login/login";
import Register from "../components/account/register/register";
import Forgot from "../components/account/forgot/forgot";
import Validation from "../components/account/validation/validation";
import Profile from "../components/account/profile/profile";

import Home from "../components/home/home";
import FileUpload from "../components/upload/upload";
import UsersList from "../components/users/users";
import EditUser from "../components/users/edit";

const Router = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props =>
        !localStorage.getItem("token") ? (
          <Login {...props} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
    <Route
      exact
      path="/register"
      render={props =>
        !localStorage.getItem("token") ? (
          <Register {...props} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
    <Route
      exact
      path="/forgot-password"
      render={props =>
        !localStorage.getItem("token") ? (
          <Forgot {...props} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
    <Route
      exact
      path="/validation-email"
      render={props =>
        !localStorage.getItem("token") ? (
          <Validation {...props} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
    <Route
      exact
      path="/home"
      render={props =>
        localStorage.getItem("token") ? (
          <Home {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
    <Route
      exact
      path="/upload"
      render={props =>
        localStorage.getItem("token") ? (
          <FileUpload {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
    <Route
      exact
      path="/profile"
      render={props =>
        localStorage.getItem("token") ? (
          <Profile {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
    <Route
      exact
      path="/users-list"
      render={props =>
        localStorage.getItem("token") ? (
          <UsersList {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
    <Route
      exact
      path="/user/:id"
      render={props =>
        localStorage.getItem("token") ? (
          <EditUser {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  </Switch>
);

export default Router;
