import Joi from 'joi-browser';
import React from 'react';

import useForm from './../../ui/forms/useForm';

const UserForm = ({ user, onSubmit, error }) => {
  const schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
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
    <div className="bg-light pb-3 border rounded">
      <h3 className="text-center">User Form</h3>

      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit}>
          {renderInput("name", "Name")}
          {renderInput("email", "Email")}
          {renderInput("password", "Password")}

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            {renderButton("Save", "btn btn-sm btn-block btn-success")}
          </div>          
        </form>
      </div>
    </div>
  );
};

export default UserForm;
