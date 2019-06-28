import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../components/login/login";
import Register from "../components/register/register";
import Forgot from "../components/forgot/forgot";
import FileUpload from "../components/upload/upload";

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
      path="/upload"
      render={props =>
        localStorage.getItem("token") ? (
          <FileUpload {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  </Switch>
);

export default Router;
