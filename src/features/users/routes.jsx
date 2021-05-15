import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UsersIndex from "./index";

const UsersRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/dashboard/users" component={UsersIndex} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default UsersRoutes;
