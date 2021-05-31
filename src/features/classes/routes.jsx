import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ClassesIndex from './index';

const ClassesRoutes = () => {
  return (
    <div className="container">
      {/* <CompanyNavbar /> */}
      <Switch>
        <Route exact path="/dashboard/classes" component={ClassesIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default ClassesRoutes;
