import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import DashboardIndex from ".";

import Navbar from "./navbar";
import Users from "./users";
import CompanyRoutes from "../../features/companies";

const DashboardRouter = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/dashboard/users" component={Users} />
        <Route exact path="/dashboard/companies" component={CompanyRoutes} />
        <Route exact path="/dashboard" component={DashboardIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default DashboardRouter;
