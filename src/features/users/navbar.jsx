import React from "react";
import { Link, useLocation } from "react-router-dom";

const UserNavbar = () => {
  const location = useLocation();

  const companyNav = [
    { path: "/dashboard/users", icon: "fa-list", label: "List" },
    {
      path: "/dashboard/users/assign",
      icon: "fa-user",
      label: "Assign User",
    },
    {
      path: "/dashboard/users/changePassword",
      icon: "fa-key",
      label: "Change Password",
    },
  ];
  return (
    <div className="bg-light">
      <div className="container pt-2">
        {companyNav.map((com) => (
          <Link
            key={com.path}
            to={com.path}
            className={`btn btn-sm mx-1 ${
              location.pathname === com.path ? "border-nav" : ""
            }`}
          >
            <i className={`fa ${com.icon}`}></i> {com.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserNavbar;
