/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteStudent,
  saveStudent,
  loadStudentsByClass,
} from "./studentsSlice";
import StudentTable from "./studentTable";
import StudentForm from "./StudentForm";
import { updateStudent } from "./studentsSlice";
import Select from "./../../ui/forms/select";
import { classSelected, loadClasses } from "./../classes/classesSlice";

const StudentsIndex = () => {
  const dispatch = useDispatch();
  const classObj = useSelector((state) => state.entities.classes.classObj);
  const classPage = useSelector((state) => state.entities.classes.page);
  const studentPage = useSelector((state) => state.entities.students.page);
  const paginate = useSelector((state) => state.pagination);

  const [student, setStudent] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (classObj && classObj._id)
      dispatch(loadStudentsByClass({ groupId: classObj._id, ...paginate }));
  }, [classObj, paginate]);

  useEffect(() => {
    dispatch(
      loadClasses({
        page: 1,
        limit: 100,
        sort: "name",
        order: "asc",
        param: "",
      })
    );
  }, []);

  const handleSelect = async (classOb) => {
    setStudent(classOb);
    setEdit(true);
  };

  const handleClear = async () => {
    setEdit(false);
    setStudent({});
  };

  const handleSubmit = async (event) => {
    if (edit) {
      dispatch(updateStudent(student._id, event));
    } else {
      dispatch(saveStudent(event));
    }
    setStudent({});
  };

  const handleDelete = async (event) => {
    dispatch(deleteStudent(student._id));
    setStudent({});
  };

  const handleClassChange = (event) => {
    if (event.target.value) {
      const obj = classPage.docs.find((cl) => cl._id === event.target.value);
      dispatch(classSelected(obj));
    } else {
      dispatch(classSelected({}));
      setStudent({});
    }
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6">
          {classObj && classObj.name && (
            <StudentForm
              classObj={classObj}
              student={student}
              onSubmit={handleSubmit}
              onClear={handleClear}
              onDelete={handleDelete}
            />
          )}
        </div>
        <div className="col-md-6 pt-4 pt-md-0">
          {classPage.docs && (
            <div className="mb-2">
              <Select
                name={"groupId"}
                label={"Class"}
                value={classObj && classObj._id ? classObj._id : ""}
                options={classPage.docs}
                onChange={handleClassChange}
              />
            </div>
          )}
          <StudentTable studentPage={studentPage} select={handleSelect} />
        </div>
      </div>
    </div>
  );
};

export default StudentsIndex;
