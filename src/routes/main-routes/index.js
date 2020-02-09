import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import Locations from "../../pages/locations";
import Plans from "../../pages/plans";
import Contact from "../../pages/contact";
import Subscription from "../../pages/subscription";

const MainRoutes = () => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route exact path="/home" component={Home} />
    <Route exact path="/locais/:name" component={Locations} />
    <Route exact path="/planos" component={Plans} />
    <Route exact path="/contato" component={Contact} />
    <Route exact path="/inscricao" component={Subscription} />
  </Switch>
);

export default MainRoutes;
