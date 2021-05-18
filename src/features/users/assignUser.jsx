/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import UserTable from "./userTable";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, changePassword } from "./usersSlice";

const AssignUser = () => {
  const dispatch = useDispatch();
  const userPage = useSelector((state) => state.entities.users.page);
  const paginate = useSelector((state) => state.pagination);
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(loadUsers(paginate));
  }, [paginate]);
  
  const handleSelect = async (user) => {
    setUser(user);
  };

  const handleSubmit = async (event) => {
    dispatch(changePassword(user._id, event));
    setUser({});
  };

  const handleClear = async () => {
    setUser({});
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-7">
          <UserTable
            userPage={userPage}
            select={handleSelect}
          ></UserTable>
        </div>

        <div className="col-md-5">
          {user.name ? (
            <div>Assing User </div>
          ) : (
            // <ChangePasswordForm
            //   user={user}
            //   onSubmit={handleSubmit}
            //   onClear={handleClear}
            // />
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignUser;
