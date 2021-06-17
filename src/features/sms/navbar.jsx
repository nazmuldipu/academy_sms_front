import React from "react";
import { Link, useLocation } from "react-router-dom";

const SMSNavbar = () => {
  const location = useLocation();

  const smsNav = [
    { path: "/dashboard/sms", icon: "fa-globe", label: "All" },
    {
      path: "/dashboard/sms/class",
      icon: "fa-users",
      label: "Class",
    },
    {
      path: "/dashboard/sms/result",
      icon: "fa-list-alt",
      label: "Result",
    },
    {
      path: "/dashboard/sms/absent",
      icon: "fa-calendar-minus-o",
      label: "Absent",
    },
    {
      path: "/dashboard/sms/late",
      icon: "fa-clock-o",
      label: "Late",
    },
    {
      path: "/dashboard/sms/manual",
      icon: "fa-user",
      label: "Manual",
    },
    {
      path: "/dashboard/sms/history",
      icon: "fa-history",
      label: "History",
    },
  ];

  return (
    <div className="bg-light">
      <div className="container pt-2">
        {smsNav.map((com) => (
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

export default SMSNavbar;
