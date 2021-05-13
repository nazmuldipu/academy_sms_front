import React, { useState, useEffect } from "react";
import { getAll } from "../../services/userService";
import UserTable from "../../components/tables/userTable";
import UserForm from "../../components/forms/userForm";

const Users = () => {
  const [userPage, setUserPage] = useState({});
  const [user, setUser] = useState({});
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const handleSelect = async (user) => {
    console.log(user);
    setUser(user);
  };

  const getUsers = async () => {
    try {
      const resp = await getAll();
      setUserPage(resp.data);
    } catch (err) {
      if (err.response && err.response.data) {
        setErrMsg(err.response.data.error_description);
      }
    }
  };
  return (
    <div className="container">
      <div>{errMsg}</div>
      <div className="row my-3">
        <div className="col-md-7">
          <UserTable userPage={userPage} select={handleSelect}></UserTable>
        </div>
        <div className="col-md-5">
          <UserForm user={user} />
        </div>
      </div>
    </div>
  );
};

export default Users;
