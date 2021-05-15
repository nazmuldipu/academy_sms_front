import React from "react";

import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import TableFotter from "./tableFotter";

const Table = ({ tableName, columns, data, onPagination }) => {
  
  return (
    <table className="table table-sm border m-0">
      <TableHeader columns={columns} tableName={tableName} />
      <TableBody data={data.docs} columns={columns} />
      <TableFotter data={data} columns={columns} onPagination={onPagination}/>
    </table>
  );
};

export default Table;
