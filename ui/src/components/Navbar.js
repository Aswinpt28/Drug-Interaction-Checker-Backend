/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import "./Navbar.css";

const Navbar = ({
  isAuthenticated,
  handleLogout,
  handleSignIn,
  handleSignUp,
}) => {
  const linkStyle = {
    display: "flex",
    alignItems: "center",
    color: "#23408E",
    fontWeight: "bold",
    marginLeft: "20px",
  };

  const lastLinkStyle = {
    ...linkStyle,
    marginLeft: "auto",
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "white" }}
      className="navbar"
    >
      <Toolbar style={{ display: "flex" }}>
        <Link to="/" className="link" style={linkStyle}>
          <span style={{ marginRight: "8px", color: "#23408E" }}>GUARDIAN</span>
          <span style={{ color: "#E80000" }}>MED</span>
          <span style={{ marginLeft: "250px", color: "#23408E" }}>DRUGS</span>
        </Link>
        <Link to="/" className="link" style={linkStyle}>
          INTERACTION CHECKER
        </Link>
        <Link to="/" className="link" style={linkStyle}>
          PILL IDENTIFIER
        </Link>
        <Link to="/" className="link" style={linkStyle}>
          NEW DRUGS
        </Link>
        <Link to="/" className="link" style={linkStyle}>
          SIDE EFFECTS
        </Link>
        {isAuthenticated ? (
          <Button
            color="primary"
            style={{ marginLeft: "300px" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <>
            <Button
              color="primary"
              style={{ marginLeft: "225px" }}
              onClick={handleSignIn}
            >
              Login
            </Button>
            <Button color="primary" onClick={handleSignUp}>
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;