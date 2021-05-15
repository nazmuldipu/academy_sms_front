import Joi from "joi-browser";
import React from "react";
import { Link } from "react-router-dom";

import useForm from "../../ui/forms/useForm";

const LoginForm = ({ onSubmit, error }) => {
  const schema = {
    username: Joi.string().email({ minDomainAtoms: 2 }).required().label("Username"),
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
      <h3 className="text-center">Login</h3>
      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit}>
          {renderInput("username", "Email")}
          {renderInput("password", "Password", "password")}

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            {renderButton("Login", "btn btn-sm btn-block btn-success")}
          </div>
          <div>
            Don't have account? <Link to="/register"> Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
