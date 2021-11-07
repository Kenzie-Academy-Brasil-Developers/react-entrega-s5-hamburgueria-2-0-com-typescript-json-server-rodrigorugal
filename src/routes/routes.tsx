import React from "react";
import { Switch, Route } from "react-router";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route>
        <Register />
      </Route>

      <Route path="/Home">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
