import React from "react";
import "./registerLayout.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const RegisterLayout = ({ children }) => {
  return (
    <div className="register-layout-container">
      <div className="register-layout-img">
        <div>
          <img src={Logo} alt="home-logo" />
        </div>
      </div>
      <div className="register-layout-head">
        <h2>Candidate Signup</h2>
        <p>
          <NavLink to="/">Home</NavLink> /Login
        </p>
      </div>
      {children}
    </div>
  );
};

export default RegisterLayout;
