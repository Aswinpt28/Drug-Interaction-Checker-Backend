import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./AuthForm.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      navigate("/");
    }
  }, [navigate]);

  const handleToggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const showAlert = (message) => {
    alert(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUpMode
      ? "http://localhost:3000/auth/register"
      : "http://localhost:3000/auth/user/login";

    try {
      const response = await axios.post(url, { username, email, password });

      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        localStorage.setItem("userToken", response.data.token);
        navigate("/");
      } else {
        console.error(response.data.message);
        showAlert(response.data.message);
      }
    } catch (error) {
      console.error("Error during Axios request:", error);
      showAlert("Error during Axios request");
    }
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="logo-container-left">
        <img
          src={require("../assets/Group 13.png")}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>

          <Link to="/admin" className="admin-link">
            Admin Login
          </Link>
        </div>
      </div>

      <div className="logo-container right">
        <img
          src={require("../assets/Group 13.png")}
          alt="Logo"
          className="logo"
        />
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New to our community ?</h3>
            <p>
              Discover a world of possibilities! Join us and explore a vibrant
              community where ideas flourish and connections thrive.
            </p>
            <button className="btn transparent" onClick={handleToggleMode}>
              Sign up
            </button>
          </div>
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of Our Valued Members</h3>
            <p>
              Thank you for being part of our community. Your presence enriches
              our shared experiences. Let's continue this journey together!
            </p>
            <button className="btn transparent" onClick={handleToggleMode}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
