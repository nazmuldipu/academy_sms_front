import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import BartaIndex from "./index";

const BartaRoutes = () => {
  return (
    <div className="container">
      {/* <CompanyNavbar /> */}
      <Switch>
        <Route exact path="/dashboard/barta" component={BartaIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default BartaRoutes;
