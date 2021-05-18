import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { limitchanged, pageChanged } from "../../store/paginateSlice";

const TableFotter = ({ data, columns }) => {
  const dispatch = useDispatch();

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

  const handleLimitChange = (event) => {
    dispatch(limitchanged(event.target.value));
  };

  const handlePageChange = (event) => {
    dispatch(pageChanged(event));
  };

  return (
    <tfoot>
      <tr>
        <td colSpan={columns.length}>
          <div className="row">
            <div className="col">
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-sm">
                  <li
                    onClick={() => handlePageChange(1)}
                    className={
                      data.page === 1 ? "page-item disabled" : "page-item"
                    }
                  >
                    <Link className="page-link" to="#">
                      First
                    </Link>
                  </li>
                  <li
                    onClick={() => handlePageChange(data.prevPage)}
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
                        onClick={() => handlePageChange(p)}
                      >
                        {p}
                      </Link>
                    </li>
                  ))}

                  <li
                    onClick={() => handlePageChange(data.nextPage)}
                    className={
                      data.hasNextPage ? "page-item" : "page-item disabled"
                    }
                  >
                    <Link className="page-link" to="#">
                      Next
                    </Link>
                  </li>
                  <li
                    onClick={() => handlePageChange(data.totalPages)}
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
            </div>
            <div className="col-auto pe-0">
              <small>Page</small>
            </div>
            <div className="col-auto">
              <select
                onChange={handleLimitChange}
                className="form-select form-select-sm"
                aria-label="Default select example"
              >
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
              </select>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFotter;
