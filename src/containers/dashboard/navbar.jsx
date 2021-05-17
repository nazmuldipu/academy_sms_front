/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  isAuth,
  loggedOut,
  getCurrentUser,
} from "../../features/auth/authSlice";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => isAuth(dispatch, state));
  const { role } = useSelector((state) => getCurrentUser(state));

  useEffect(() => {
    if (!auth) {
      history.push("/login");
    }
  }, [auth]);

  const dashNav = [
    {
      path: "/dashboard",
      label: "Dashboard",
      roles: ["ADMIN", "USER", "COMPANY"],
    },
    { path: "/dashboard/users", label: "Users", roles: ["ADMIN"] },
    { path: "/dashboard/companies", label: "Companies", roles: ["ADMIN"] },
  ];

  const handleLogout = () => {
    dispatch(loggedOut());
    history.push("/login");
  };

  const validateRole = (roles) => {
    const value =  roles.some((r) => r === role);
    return value;
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
            {dashNav.map(
              (nav) =>
                validateRole(nav.roles) && (
                  <li key={nav.path} className="nav-item">
                    <Link to={nav.path} className="nav-link">
                      {nav.label}
                    </Link>
                  </li>
                )
            )}
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
