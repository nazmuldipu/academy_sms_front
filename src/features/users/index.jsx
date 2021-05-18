/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, updateUser, saveUser } from "./usersSlice";

import UserTable from "./userTable";
import UserForm from "./userForm";

const UsersIndex = () => {
  const dispatch = useDispatch();
  const userPage = useSelector((state) => state.entities.users.page);
  const paginate = useSelector((state) => state.pagination);
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(loadUsers(paginate));
  }, [paginate]);

  const handleSelect = async (user) => {
    setEdit(true);
    setUser(user);
  };

  const handleSubmit = async (event) => {
    console.log(event);
    if (edit) {
      dispatch(updateUser(user._id, event));
    } else {
      dispatch(saveUser(event));
    }
    setUser({});
  };

  const handleClear = async () => {
    setEdit(false);
    setUser({});
  };

  return (
    <div className="container">
      {/* <div>{errMsg}</div> */}
      <div className="row my-3">
        <div className="col-md-7">
          <UserTable
            userPage={userPage}
            select={handleSelect}            
          ></UserTable>
        </div>

        <div className="col-md-5">
          <UserForm user={user} onSubmit={handleSubmit} onClear={handleClear} />
        </div>
      </div>
    </div>
  );
};

export default UsersIndex;
