import React from "react";
import {Route, IndexRoute} from "react-router";
import Home from "./containers/home";
import Events from "./containers/events";
import Admin from "./containers/admin/index";
import {requireAuthentication} from "./containers/auth/authenticatedContainer";

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={Events}/>
    <Route path="/admin" component={requireAuthentication(Admin)}/>
  </Route>
);
