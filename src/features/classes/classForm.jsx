/* eslint-disable react-hooks/exhaustive-deps */
import Joi from "joi-browser";
import React, { useState, useEffect } from "react";
import useForm from "./../../ui/forms/useForm";
import ConfirmModal from "./../../ui/confirmModal";

const ClassForm = ({ classObj, onSubmit, onClear, onDelete, error }) => {
  const schema = {
    name: Joi.string().required().label("Name"),
    serial: Joi.number().required().label("Serial"),
  };

  const [showModal, setShowModal] = useState(false);

  const { data, initForm, renderInput, renderButton, validateSubmit } = useForm(
    { schema }
  );

  useEffect(() => {
    if (classObj && classObj.name) {
      initForm(classObj);
    } else {
      initForm({});
    }
  }, [classObj]);

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

  const handleDelete = () => {
    setShowModal(false);
    onDelete();
  };

  return (
    <div className="pb-3 border rounded shadow-sm ">
      <ConfirmModal
        show={showModal}
        onConfirm={handleDelete}
        onClose={() => setShowModal(false)}
      />
      <h3 className="text-center">{classObj.name ? "Edit" : "Add"} Class </h3>

      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit}>
          {renderInput("serial", "Serial*", "Number")}
          {renderInput("name", "Name*")}

          <div className="d-grid gap-2 d-flex justify-content-end mt-3">
            {renderButton("Save", "btn btn-sm btn-success")}

            {classObj.name ? (
              <>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => setShowModal(true)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={onClear}
                >
                  Clear
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassForm;
