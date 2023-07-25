import React from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-nav-links">
          <NavLink to="/vacancies">Vacanies</NavLink>
          <NavLink to="/career">Career Advice</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/advertise">Advertise</NavLink>
        </div>
        <div className="header-buttons">
          <button>Login</button>
          <button
            onClick={() => {
              navigate("/register");
            }}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
