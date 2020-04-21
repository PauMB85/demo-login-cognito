import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import NotFound from "./containers/not-found/NotFound";
import Login from "./containers/login/Login";
import Signup from "./containers/signup/Signup";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}