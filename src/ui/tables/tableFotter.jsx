import React from "react";
import { Link } from "react-router-dom";

const TableFotter = ({ data, columns, onPagination }) => {
  const counter = (currentPage, totalPages) => {
    let startPage = 1;
    let length = 10;
    if (totalPages < 10) {
      length = totalPages;
    } else {
      if (currentPage < 5) {
        startPage = 1;
      } else if (currentPage + 5 >= totalPages) {
        startPage = totalPages - 9;
      } else {
        startPage = currentPage - 4;
      }
    }
    return Array.from({ length }, (v, k) => k + startPage);
  };

  return (
    <tfoot>
      <tr>
        <td colSpan={columns.length}>
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-sm">
              <li
                onClick={() => onPagination(1)}
                className={data.page === 1 ? "page-item disabled" : "page-item"}
              >
                <Link className="page-link" to="#">
                  First
                </Link>
              </li>
              <li
                onClick={() => onPagination(data.prevPage)}
                className={
                  data.hasPrevPage ? "page-item" : "page-item disabled"
                }
              >
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>

              {counter(data.page, data.totalPages).map((p) => (
                <li className="page-item" key={p}>
                  <Link
                    className="page-link"
                    to="#"
                    onClick={() => onPagination(p)}
                  >
                    {p}
                  </Link>
                </li>
              ))}

              <li  onClick={() => onPagination(data.nextPage)}
                className={
                  data.hasNextPage ? "page-item" : "page-item disabled"
                }
              >
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
              <li onClick={() => onPagination(data.totalPages)}
                className={
                  data.hasNextPage ? "page-item" : "page-item disabled"
                }
              >
                <Link className="page-link" to="#">
                  Last
                </Link>
              </li>
            </ul>
          </nav>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFotter;
