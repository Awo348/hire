import React, { useState } from "react";
import "./registerForm.css";
import Form from "../form/form";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [state, setState] = useState("Candidate");
  const navigate = useNavigate();
  return (
    <div className="register-form-container">
      <div className="register-form-head">
        <button
          className={state === "Candidate" ? "register-form-active" : "register-form-button"}
          onClick={() => {
            setState("Candidate");
          }}>
          Candidate
        </button>
        <button
          className={state === "Employer" ? "register-form-active" : "register-form-button"}
          onClick={() => {
            setState("Employer");
          }}>
          Employer
        </button>
      </div>
      <Form
        buttonText="Register"
        buttonAction={() => {
          navigate("/register-multi");
        }}
      />
    </div>
  );
};

export default RegisterForm;
