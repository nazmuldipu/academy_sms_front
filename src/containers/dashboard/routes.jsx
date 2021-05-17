import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import DashboardIndex from ".";

import Navbar from "./navbar";
import CompanyRoutes from "../../features/companies/routes";
import UsersRoutes from "../../features/users/routes";
import RoleRoute from "../../services/roleRoutes";

const DashboardRouter = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <RoleRoute
          path="/dashboard/users"
          component={UsersRoutes}
          roles={["ADMIN"]}
        />
        <RoleRoute
          path="/dashboard/companies"
          component={CompanyRoutes}
          roles={["ADMIN"]}
        />
        {/* <Route path="/dashboard/users" component={UsersRoutes} /> */}
        {/* <Route path="/dashboard/companies" component={CompanyRoutes} /> */}
        <Route exact path="/dashboard" component={DashboardIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default DashboardRouter;
