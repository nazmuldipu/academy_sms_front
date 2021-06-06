/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadClasses,
  updateClass,
  saveClass,
  deleteClass,
} from "./classesSlice";
import ClassTable from "./classTable";
import ClassForm from "./classForm";

const ClassesIndex = () => {
  const dispatch = useDispatch();
  const classPage = useSelector((state) => state.entities.classes.page);
  const paginate = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(loadClasses(paginate));
  }, [paginate]);

  const [classObj, setClass] = useState({});
  const [edit, setEdit] = useState(false);

  const handleSelect = async (classOb) => {
    setClass(classOb);
    setEdit(true);
  };

  const handleClear = async () => {
    setEdit(false);
    setClass({});
  };

  const handleSubmit = async (event) => {
    if (edit) {
      dispatch(updateClass(classObj._id, event));
    } else {
      dispatch(saveClass(event));
    }
    setClass({});
  };

  const handleDelete = async (event) => {
    dispatch(deleteClass(classObj._id));
    setClass({});
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6">
          <ClassForm
            classObj={classObj}
            onSubmit={handleSubmit}
            onClear={handleClear}
            onDelete={handleDelete}
          />
        </div>
        <div className="col-md-6 pt-4 pt-md-0">
          <ClassTable classPage={classPage} select={handleSelect} />
        </div>
      </div>
    </div>
  );
};

export default ClassesIndex;
