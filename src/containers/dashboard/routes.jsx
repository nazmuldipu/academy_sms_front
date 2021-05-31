import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import DashboardIndex from ".";

import Navbar from "./navbar";
import CompanyRoutes from "../../features/companies/routes";
import UsersRoutes from "../../features/users/routes";
import RoleRoute from "../../services/roleRoutes";
import ClassesRoutes from "../../features/classes/routes";
import StudentsRoutes from "../../features/students/routes";
import SMSRoutes from "./../../features/sms/routes";
import BartaRoutes from "./../../features/barta/routes";

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
        <RoleRoute
          path="/dashboard/classes"
          component={ClassesRoutes}
          roles={["COMPANY"]}
        />
        <RoleRoute
          path="/dashboard/students"
          component={StudentsRoutes}
          roles={["COMPANY"]}
        />
        <RoleRoute
          path="/dashboard/sms"
          component={SMSRoutes}
          roles={["COMPANY"]}
        />
        <RoleRoute
          path="/dashboard/barta"
          component={BartaRoutes}
          roles={["COMPANY"]}
        />
        <Route exact path="/dashboard" component={DashboardIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default DashboardRouter;
