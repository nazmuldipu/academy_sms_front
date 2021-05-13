import React from "react";
import { Link } from "react-router-dom";

const CompanyNavbar = () => {
  return (
    <div className="bg-light">
      <div className="container pt-2">
        <Link
          to="/dashboard/companies"
          className="btn btn-sm border-nav"
        >
         <i className="fa fa-list"></i> List
        </Link>
      </div>
    </div>
  );
};

export default CompanyNavbar;
