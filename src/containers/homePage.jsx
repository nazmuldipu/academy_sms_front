import React from "react";
import Navbar from "./../components/navbar";
import auth from "../services/authService";

const HomePage = () => {
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div>
      <Navbar isAuth={auth.isAuthenticated()} onLogout={handleLogout}></Navbar>
    </div>
  );
};

export default HomePage;
