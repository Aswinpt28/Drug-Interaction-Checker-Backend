import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminForm.css";
import Logo from "../assets/Group 13.png";

const AdminForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/admin/login",
        {
          username,
          password,
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log(response.data);

        navigate("/");
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during admin login:", error);
    }
  };

  return (
    <div className="admin-page">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="admin-container">
        <h2 className="admin-title">Admin Login</h2>
        <form className="admin-form">
          <div className="admin-input-field">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="admin-input-field">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn admin-btn" onClick={handleLogin}>
            Login
          </button>
        </form>
        <Link to="/login" className="back-link">
          User login here
        </Link>
      </div>
    </div>
  );
};

export default AdminForm;
