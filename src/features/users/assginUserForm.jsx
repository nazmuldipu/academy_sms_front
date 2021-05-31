/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Joi from "joi-browser";
import { useDispatch, useSelector } from "react-redux";
import useForm from "./../../ui/forms/useForm";
import { loadCompanies } from "./../companies/companiesSlice";

const AssignUserForm = ({ user, onSubmit, onClear, onRemove }) => {
  const dispatch = useDispatch();
  const companyPage = useSelector((state) => state.entities.companies.page);
  // const paginate = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(
      loadCompanies({
        page: 1,
        limit: 100,
        sort: "name",
        order: "asc",
        param: "",
      })
    );
  }, []);

  const schema = {
    companyId: Joi.string().min(5).required().label("Company"),
  };

  const { data, renderSelect, renderButton, validateSubmit } = useForm({
    schema,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      onSubmit(data);
    }
  };

  return (
    <div className="pb-3 border rounded shadow-sm">
      <h3 className="text-center">Change Password Form</h3>

      <div className="p-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="col-form-label-sm p-0 mb-1" htmlFor="sms_quota">
              User Name
            </label>
            <label
              id="sms_quota"
              className="form-control form-control-sm bg-white"
            >
              {user.name}
            </label>
          </div>
          {/* TODO: change following select form component to type ahed component */}
          {companyPage.docs
            ? renderSelect("companyId", "Company", companyPage.docs)
            : ""}
          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            {renderButton("Update", "btn btn-sm btn-block btn-success")}
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={onRemove}
            >
              Remove Company
            </button>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={onClear}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignUserForm;
