import React from "react";
import Joi from "joi-browser";
import useForm from './../../ui/forms/useForm';

const EntityLimitForm = ({ company, onSubmit, onClear, error }) => {
  const schema = {
    max_entity: Joi.number().required().label("Maximum Entity"),
  };

  const { data, renderInput, renderButton, validateSubmit } = useForm({
    schema,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      onSubmit(data);
    }
  };
  return (
    <div className="pb-3 border rounded shadow-sm ">
      <h3 className="text-center">Maximum Entity </h3>

      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="col-form-label-sm p-0 mb-1" htmlFor="sms_quota">
              Company Name
            </label>
            <label
              id="sms_quota"
              className="form-control form-control-sm bg-white"
            >
              {company.name}
            </label>
          </div>

          {renderInput("max_entity", "Maximum Entity*", "Number")}

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            {renderButton("Update", "btn btn-sm btn-block btn-success")}
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

export default EntityLimitForm;
