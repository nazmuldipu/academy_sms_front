import React from "react";

const TableHeader = ({ tableName, columns }) => {
  return (
    <thead>
      <tr>
        <th colSpan={columns.length} className="table-head text-white">
          {tableName}
        </th>
      </tr>
      <tr>
        {columns.map((column) => (
          <th className="clickable" key={column.path || column.key}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
