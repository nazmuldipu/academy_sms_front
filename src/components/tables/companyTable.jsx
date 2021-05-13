import React from "react";
import Table from "../../ui/tables/table";

const CompanyTable = ({ companyPage, select, onPagination }) => {
  const columns = [
    { path: "name", label: "Name" },
    { path: "phone", label: "Phone" },
    { path: "max_entity", label: "Max" },
    { path: "sms_quota", label: "SMS" },
    { path: "per_month", label: "Per Month" },
    {
      key: "Select",
      content: (company) => (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => select(company)}
        >
          Edit
        </button>
      ),
    },
  ];



  return (
    <div className="shadow-sm">
      {companyPage.docs && (
        <Table
          tableName={"User Table"}
          columns={columns}
          data={companyPage}
          onPagination={onPagination}
        />
      )}
    </div>
  );
};

export default CompanyTable;
