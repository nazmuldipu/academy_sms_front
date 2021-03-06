/* eslint-disable react-hooks/exhaustive-deps */
import Joi from "joi-browser";
// import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";

import useForm from "./../../ui/forms/useForm";

const CompanyForm = ({ company, onSubmit, onClear, error }) => {
  const schema = {
    name: Joi.string().required().label("Name"),
    name_bd: Joi.string().required().label("Name in Bangla"),
    contact_person: Joi.string().required().label("Contact Person"),
    phone: Joi.string()
      .required()
      .regex(/^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$/, "Phone")
      .label("Phone number"),
    web: Joi.string().allow("").allow(null).label("Web address"),
    max_entity: Joi.number().label("Maximum Entity"),
    sms_quota: Joi.number().label("SMS Quota"),
    per_month: Joi.number().required().label("Per Month"),
  };

  const {
    data,
    initForm,
    renderInput,
    renderButton,
    validateSubmit,
  } = useForm({ schema });

  useEffect(() => {
    if (company && company.name) {
      initForm(company);
    } else {
      initForm({});
    }
  }, [company]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      const obj = { ...data };

      Object.keys(obj).forEach(
        (k) => !obj[k] && obj[k] !== undefined && delete obj[k]
      );
      onSubmit(obj);
    }
  };

  return (
    <div className="pb-3 border rounded shadow-sm ">
      <h3 className="text-center">{company.name ? "Edit" : "Add"} Form </h3>

      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit}>
          {renderInput("name", "Name*")}
          {renderInput("name_bd", "Name in Bangla*")}
          {renderInput("contact_person", "Contact Person*")}
          {renderInput("phone", "Phone*")}
          {renderInput("web", "Web Address")}
          {renderInput("max_entity", "Maximum Entity", "Number")}
          {renderInput("sms_quota", "SMS Quota", "Number")}
          {renderInput("per_month", "Per Month*", "Number")}

          <div className="d-grid gap-2 d-flex justify-content-end mt-3">
            {renderButton("Save", "btn btn-sm btn-success")}
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

export default CompanyForm;
