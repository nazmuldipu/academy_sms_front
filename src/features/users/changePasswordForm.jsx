import React from "react";
import Joi from "joi-browser";
import useForm from "./../../ui/forms/useForm";

const ChangePasswordForm = ({ user, onSubmit, onClear }) => {
  const schema = {
    password: Joi.string().min(5).required().label("Password"),
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
    <div className="pb-3 border rounded shadow-sm">
      <h3 className="text-center">Change Password Form</h3>

      <div className="p-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="col-form-label-sm p-0 mb-1" htmlFor="sms_quota">
              User Name
            </label>
            <label id="sms_quota" className="form-control form-control-sm bg-white" >
              {user.name}
            </label>
          </div>

          {renderInput("password", "Password")}

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            {renderButton("Change", "btn btn-sm btn-block btn-success")}
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

export default ChangePasswordForm;
