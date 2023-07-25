import React from "react";
import "./first.css";
import Pattern from "../../assets/pattern.svg";

const First = () => {
  return (
    <div className="first-container">
      <div className="first-text">
        <div>
          <h2>
            Send out your first <br /> Rate It today!
          </h2>
          <button>Try for free </button>
        </div>
      </div>
      <img src={Pattern} alt="pattern" />
    </div>
  );
};

export default First;
