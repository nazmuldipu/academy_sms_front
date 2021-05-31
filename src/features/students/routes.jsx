import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import StudentsIndex from './index';

const StudentsRoutes = () => {
  return (
    <div className="container">
      {/* <CompanyNavbar /> */}
      <Switch>
        <Route exact path="/dashboard/students" component={StudentsIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default StudentsRoutes;