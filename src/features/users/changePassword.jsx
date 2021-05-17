/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import UserTable from "./userTable";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, changePassword } from "./usersSlice";
import ChangePasswordForm from "./changePasswordForm";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const userPage = useSelector((state) => state.entities.users.page);
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(loadUsers(1));
  }, []);

  const handlePagination = (page) => {
    if (page && userPage.page !== page) dispatch(loadUsers(page));
  };

  const handleSelect = async (user) => {
    setUser(user);
  };

  const handleSubmit = async (event) => {
    console.log(event);
    // if (edit) {
    dispatch(changePassword(user._id, event));
    // } else {
    //   dispatch(saveUser(event));
    // }
    setUser({});
  };

  const handleClear = async () => {
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
            onPagination={handlePagination}
          ></UserTable>
        </div>

        <div className="col-md-5">
          {user.name ? (
            <ChangePasswordForm
              user={user}
              onSubmit={handleSubmit}
              onClear={handleClear}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
