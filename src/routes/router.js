import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../components/account/login/login";
import Register from "../components/account/register/register";
import Forgot from "../components/account/forgot/forgot";
import Validation from "../components/account/validation/validation";
import Profile from "../components/account/profile/profile";
import FileUpload from "../components/upload/upload";
import UsersList from "../components/users/users";

const Router = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props =>
        !localStorage.getItem("token") ? (
          <Login {...props} />
        ) : (
          <Redirect to="/upload" />
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
          <Redirect to="/upload" />
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
          <Redirect to="/upload" />
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
          <Redirect to="/upload" />
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
  </Switch>
);

export default Router;
