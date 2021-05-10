import React from "react";
import Table from "./table";

const UserTable = ({ userPage, select }) => {
  const columns = [
    { path: "name", label: "Name" },
    { path: "email", label: "Email" },
    { path: "role", label: "Role" },
    {
      key: "Select",
      content: (user) => (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => select(user)}
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <div>
      {userPage.docs && (
        <Table tableName={"User Table"} columns={columns} data={userPage} />
      )}
    </div>
  );
};

export default UserTable;
