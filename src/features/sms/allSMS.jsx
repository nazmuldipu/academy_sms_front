import React from "react";
import Joi from "joi-browser";
import useForm from "./../../ui/forms/useForm";

const AllSMS = () => {
  const schema = {
    message: Joi.string().min(5).required().label("Message"),
  };

  const { data, renderTextArea, renderButton, validateSubmit } = useForm({
    schema,
  });

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
          <h3 className="text-center">All Students SMS</h3>

          <div className="p-3">
            <form onSubmit={handleSubmit}>
              {/* TODO: change following select form component to type ahed component */}
              {renderTextArea("message", "Message", 4, 160)}
              <div className="d-grid gap-2 d-flex justify-content-end mt-3">
                {renderButton("Update", "btn btn-sm btn-success")}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSMS;
