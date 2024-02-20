import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import guardianMedLogo from "../assets/Group 13.png";

import "./Navbar.css";

const Navbar = ({
  isAuthenticated,
  handleLogout,
  handleSignIn,
  handleSignUp,
  userName,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const avatarStyle = {
    marginLeft: "220px",
    width: "30px",
    height: "30px",
    backgroundColor: "#23386f",
    cursor: "pointer",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    color: isScrolled ? "#fff" : "#23408E",
    fontWeight: "small",
    marginLeft: "30px",
    fontSize: "12px",
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: isScrolled ? "#000000" : "transparent",
        transition: "background-color 0.1s ease",
      }}
      className="navbar"
    >
      <Toolbar style={{ display: "flex" }}>
        <Link to="/" className="link" style={linkStyle}>
          <img
            src={guardianMedLogo}
            alt="Guardian Med Logo"
            style={{
              width: "170px",
              height: "25px",
              margin: "10px 0px 10px 5px",
            }}
          />
          <span style={{ marginLeft: "250px" }}>DRUGS</span>
        </Link>
        <Link to="/check" className="link" style={linkStyle}>
          INTERACTION CHECKER
        </Link>
        <Link to="/pill" className="link" style={linkStyle}>
          PILL IDENTIFIER
        </Link>
        <Link to="/newdrugs" className="link" style={linkStyle}>
          NEW DRUGS
        </Link>
        <Link to="/side" className="link" style={linkStyle}>
          SIDE EFFECTS
        </Link>
        {isAuthenticated ? (
          <>
            <Avatar alt="User Avatar" style={avatarStyle}>
              {userName ? userName.charAt(0).toUpperCase() : ""}
            </Avatar>
            <Button
              color="primary"
              style={{ marginLeft: "25px" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              color="primary"
              style={{ marginLeft: "215px", color: "#2c2c2c" }}
              onClick={handleSignIn}
            >
              Login/Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
