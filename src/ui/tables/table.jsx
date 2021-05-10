import React from "react";

import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ tableName, columns, data }) => {
  return (
    <table className="table table-sm border">
      <TableHeader columns={columns} tableName={tableName} />
      <TableBody data={data.docs} columns={columns} />
    </table>
  );
};

export default Table;
