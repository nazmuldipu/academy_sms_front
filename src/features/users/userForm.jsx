/* eslint-disable react-hooks/exhaustive-deps */
import Joi from "joi-browser";
import React, { useEffect } from "react";

import useForm from "./../../ui/forms/useForm";

const UserForm = ({ user, onSubmit, onClear }) => {
  const schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
  };

  const { data, initForm, renderInput, renderButton, validateSubmit } = useForm({ schema, });

  useEffect(() => {
    if (user && user.name) {
      const { name, email } = user;
      initForm({ name, email, password: "" });
    } else {
      initForm({});
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      onSubmit(data);
    }
  };

  return (
    <div className="pb-3 border rounded shadow-sm">
      <h3 className="text-center">User Form</h3>

      <div className="p-3">
        <form onSubmit={handleSubmit}>
          {renderInput("name", "Name")}
          {renderInput("email", "Email")}
          {renderInput("password", "Password")}

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

export default UserForm;
