import React, { useState } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "../../assets/menu.svg";
import Logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(true);
  return (
    <>
      <div className="header-container">
        <div className="header-cont">
          <div className="header-wrapper">
            <div className="header-logo">
              <img src={Logo} alt="logo" />
              <img
                src={Menu}
                alt="menu"
                onClick={() => {
                  setClick(!click);
                }}
              />
            </div>
            {click ? (
              <div className="header-nav">
                <div className="header-nav-links">
                  <NavLink to="/">Home</NavLink>
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
                    Register Now
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
