/* eslint-disable react-hooks/exhaustive-deps */
import Joi from "joi-browser";
import React, { useState, useEffect } from "react";
import useForm from "./../../ui/forms/useForm";
import ConfirmModal from "./../../ui/confirmModal";

const StudentForm = ({
  classObj,
  student,
  onSubmit,
  onClear,
  onDelete,
  error,
}) => {
  const schema = {
    name: Joi.string().required().label("Name"),
    serial: Joi.number().required().label("Serial"),
  };

  const [showModal, setShowModal] = useState(false);

  const {
    data,
    initForm,
    renderInput,
    renderButton,
    renderLabel,
    validateSubmit,
  } = useForm({ schema });

  useEffect(() => {
    if (student && student.name) {
      const obj = { ...student, groupId: student.group._id };
      initForm(obj);
    } else {
      initForm({});
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      const obj = { ...data };

      Object.keys(obj).forEach(
        (k) => !obj[k] && obj[k] !== undefined && delete obj[k]
      );
      onSubmit({ ...obj, groupId: classObj._id });
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
      <h3 className="text-center">{student.name ? "Edit" : "Add"} Student </h3>

      <div className="p-3">
        <span className="form-text text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit}>
          {renderLabel(classObj.name, "Class")}
          {renderInput("serial", "Serial*", "Number")}
          {renderInput("name", "Name*")}

          <div className="d-grid gap-2 d-flex justify-content-end mt-3">
            {renderButton("Save", "btn btn-sm btn-success")}

            {student.name ? (
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

export default StudentForm;
