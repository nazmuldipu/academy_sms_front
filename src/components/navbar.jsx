import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuth, onLogout }) => {
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
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {!isAuth && (
              <React.Fragment>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </React.Fragment>
            )}
            {isAuth && (
              <React.Fragment>
                <li className="nav-item">
                  <div onClick={onLogout} className="nav-link">
                    Logout
                  </div>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
