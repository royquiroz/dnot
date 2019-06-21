import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import FileUpload from "../components/upload/upload";
import Login from "../components/login/login";

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
