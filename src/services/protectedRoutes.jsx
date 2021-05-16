import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../features/auth/authSlice";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => isAuth(dispatch, state));
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
