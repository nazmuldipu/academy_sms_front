import React from "react";

const TextArea = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label className="col-form-label-sm p-0 mb-1" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="form-control"
        {...rest}
        name={name}
        id={name}
      ></textarea>

      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default TextArea;
