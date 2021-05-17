/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Joi from "joi-browser";
import useForm from "./../../ui/forms/useForm";

const BuySMSForm = ({ company, onSubmit, onClear, error }) => {
  const schema = {
    sms_quota: Joi.number().label("Web address"),
  };

//   useEffect(() => {
//     if (company && company.name) {
//       initForm({company});
//     } else {
//       initForm({});
//     }
//   }, [company]);

  const { data, renderInput, renderButton, validateSubmit } = useForm(
    { schema }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      onSubmit(data);
    }
  };

  return (
    <div className="pb-3 border rounded shadow-sm ">
      <h3 className="text-center">Buy SMS </h3>

      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="col-form-label-sm p-0 mb-1" htmlFor="sms_quota">
              Company Name
            </label>
            <label id="sms_quota" className="form-control form-control-sm bg-white">
              {company.name}
            </label>
          </div>

          {renderInput("sms_quota", "Number of SMS to buy", "Number")}

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            {renderButton("Buy", "btn btn-sm btn-block btn-success")}
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

export default BuySMSForm;
