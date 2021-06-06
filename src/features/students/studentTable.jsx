import React from "react";
import Table from "./../../ui/tables/table";

const StudentTable = ({ studentPage, select }) => {
  const columns = [
    { path: "serial", label: "Serial" },
    { path: "name", label: "Name" },
    { path: "group.name", label: "Class" },
    {
      key: "Select",
      className: "text-end",
      content: (student) => (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => select(student)}
        >
          Select
        </button>
      ),
    },
  ];

  return (
    <div className="shadow-sm">
      {studentPage.docs && (
        <Table
          tableName={"Student Table"}
          columns={columns}
          data={studentPage}
        />
      )}
    </div>
  );
};

export default StudentTable;
