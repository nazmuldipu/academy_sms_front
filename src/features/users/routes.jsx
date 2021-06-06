import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UsersIndex from "./index";
import UserNavbar from "./navbar";
import AssignUser from "./assignUser";
import ChangePassword from './changePassword';

const UsersRoutes = () => {
  return (
    <div>
      <UserNavbar />
      <Switch>
        <Route exact path="/dashboard/users" component={UsersIndex} />
        <Route exact path="/dashboard/users/assign" component={AssignUser} />
        <Route exact path="/dashboard/users/changePassword" component={ChangePassword} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default UsersRoutes;
