/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { isAuth, loggedOut } from "../features/auth/authSlice";
import Navbar from "./../components/navbar";

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => isAuth(dispatch, state));

  const handleLogout = () => {
    dispatch(loggedOut());
    history.push("/login");
  };

  return (
    <div>
      <Navbar isAuth={auth} onLogout={handleLogout}></Navbar>
    </div>
  );
};

export default HomePage;
