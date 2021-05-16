/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { isAuth, loggedOut } from "../../features/auth/authSlice";

const Navbar = () => {
  // const onLogout = () => {
  //   auth.logout();
  // };
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => isAuth(dispatch, state));

  useEffect(() => {
    if (!auth) {
      history.push("/login");
    }
  }, [auth]);

  const handleLogout = () => {
    dispatch(loggedOut());
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark homeNavbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          AcademySMS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/companies" className="nav-link">
                Companies
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <div onClick={handleLogout} className="nav-link">
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
