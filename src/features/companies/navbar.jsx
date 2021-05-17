import React from "react";
import { Link, useLocation } from "react-router-dom";

const CompanyNavbar = () => {
  const location = useLocation();

  const companyNav = [
    { path: "/dashboard/companies", icon: "fa-list", label: "List" },
    {
      path: "/dashboard/companies/buySMS",
      icon: "fa-shopping-cart",
      label: "Buy SMS",
    },
    {
      path: "/dashboard/companies/entityLimit",
      icon: "fa-compress",
      label: "Limit Entity",
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

export default CompanyNavbar;
