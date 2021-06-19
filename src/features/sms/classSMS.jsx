/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Joi from "joi-browser";
import useForm from "./../../ui/forms/useForm";
import { useDispatch, useSelector } from "react-redux";
import { loadClasses } from './../classes/classesSlice';

const ClassSMS = () => {
  const dispatch = useDispatch();
  const classPage = useSelector((state) => state.entities.classes.page);
  const paginate = useSelector((state) => state.pagination);
  const schema = {
    classId: Joi.string().required().label("Class"),
    message: Joi.string().min(5).required().label("Message"),
  };
  const { data, renderSelect, renderTextArea, renderButton, validateSubmit } = useForm({
    schema,
  });

  useEffect(() => {
    dispatch(loadClasses(paginate));
  }, [paginate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit(e)) {
      //   onSubmit(data);
      console.log(data);
    }
  };

  return (
    <div className="row my-2">
      <div className="col-md-6">
        <div className="pb-3 border rounded shadow-sm">
          <h3 className="text-center">Class Students SMS</h3>

          <div className="p-3">
            {classPage.docs &&
              <form onSubmit={handleSubmit}>
                {renderSelect('classId', 'Class', classPage.docs)}
                {renderTextArea("message", "Message", 4, 160)}
                <div className="d-grid gap-2 d-flex justify-content-end mt-3">
                  {renderButton("Update", "btn btn-sm btn-success")}
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSMS;
