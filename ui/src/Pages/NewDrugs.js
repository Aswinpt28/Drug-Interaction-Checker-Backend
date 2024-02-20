import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const NewDrugs = () => {
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/login");
  };
  return (
    <div>
      <Navbar
        isAuthenticated={userToken}
        handleLogout={handleLogout}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
      />
    </div>
  );
};

export default NewDrugs;
