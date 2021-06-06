import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CompanyNavbar from "./navbar";
import CompanyIndex from "./index";
import BuySMS from "./buySMS";
import EntityLimit from './entityLimit';

const CompanyRoutes = () => {
  return (
    <div>
      <CompanyNavbar />
      <Switch>
        <Route exact path="/dashboard/companies/buySMS" component={BuySMS} />
        <Route exact path="/dashboard/companies/entityLimit" component={EntityLimit} />
        <Route exact path="/dashboard/companies" component={CompanyIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default CompanyRoutes;
