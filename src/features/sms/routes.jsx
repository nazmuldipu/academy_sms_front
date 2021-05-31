import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SMSIndex from "./index";

const SMSRoutes = () => {
  return (
    <div className="container">
      {/* <CompanyNavbar /> */}
      <Switch>
        <Route exact path="/dashboard/sms" component={SMSIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default SMSRoutes;
