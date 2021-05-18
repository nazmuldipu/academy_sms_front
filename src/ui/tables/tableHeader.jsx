import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortChanged } from "../../store/paginateSlice";

const TableHeader = ({ tableName, columns }) => {
  const [sort, setSort] = useState("name");
  const [order, setOrder] = useState("asc");

  const dispatch = useDispatch();

  const handleSort = (event) => {
    let orderL;
    if (event === sort) {
      orderL = order === "asc" ? "desc" : "asc";
      setOrder(orderL);
    } else {
      setSort(event);
      setOrder("asc");
    }
    dispatch(sortChanged({ sort: event, order }));
  };

  return (
    <thead>
      <tr>
        <th colSpan={columns.length} className="table-head text-white">
          {tableName}
        </th>
      </tr>
      <tr>
        {columns.map((column) => (
          <th
            onClick={() => handleSort(column.path)}
            className="clickable"
            key={column.path || column.key}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
