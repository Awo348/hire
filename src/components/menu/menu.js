import React from "react";
import "./menu.css";
import Bars from "../../svg-components/bars/bars";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-wrapper">
        <Bars />
        <h2>Menu</h2>
      </div>
    </div>
  );
};

export default Menu;
