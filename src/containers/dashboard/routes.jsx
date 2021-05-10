import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Index from ".";
import Navbar from "./navbar";
import Users from "./users";
import Companies from "./companies";

const DashboardRouter = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/dashboard/users" component={Users} />
        <Route exact path="/dashboard/companies" component={Companies} />
        <Route exact path="/dashboard" component={Index} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default DashboardRouter;
