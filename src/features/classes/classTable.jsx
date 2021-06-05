import React from "react";
import Table from "./../../ui/tables/table";

const ClassTable = ({ classPage, select }) => {
  const columns = [
    { path: "serial", label: "Serial" },
    { path: "name", label: "Name" },
    {
      key: "Select",
      content: (classObj) => (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => select(classObj)}
        >
          Select
        </button>
      ),
    },
  ];

  return (
    <div className="shadow-sm">
      {classPage.docs && (
        <Table tableName={"Class Table"} columns={columns} data={classPage} />
      )}
    </div>
  );
};

export default ClassTable;
