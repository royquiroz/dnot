import React from "react";
import { Switch, Route } from "react-router-dom";

import FileUpload from "../components/upload/upload";
import Login from "../components/login/login";

const Router = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={FileUpload} />
  </Switch>
);

export default Router;
