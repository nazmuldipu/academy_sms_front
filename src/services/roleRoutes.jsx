import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../features/auth/authSlice";

const RoleRoute = ({ path, component: Component, render, roles, ...rest }) => {
  const { role } = useSelector((state) => getCurrentUser(state));

  return (
    <Route
      {...rest}
      render={(props) => {
        const validateRole = roles.some((r) => r === role);
        if (!validateRole) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default RoleRoute;
