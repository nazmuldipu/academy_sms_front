/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login, getToken, getErrorMessage } from "./authSlice";

import { setToken } from "../../store/middleware/api";

import LoginForm from "./loginForm";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => getToken(dispatch, state));
  const error = useSelector((state) => getErrorMessage(state));

  useEffect(() => {
    if (token) {
      setToken(token);
      history.push("/dashboard");
    }
  }, [token]);

  async function handleSubmit(event) {
    dispatch(login(event));
  }

  return (
    <div className="container mt-md-5">
      <div className="row">
        <div className="offset-md-1 col-md-10 mt-md-5">
          <div className="row">
            <div className="col-md-7"><Link to="/">Home</Link></div>
            <div className="col-md-5">
              {/* <small className="text-danger">{error}</small> */}
              <LoginForm onSubmit={handleSubmit} error={error} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
