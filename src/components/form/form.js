import React from "react";
import "./form.css";

const Form = ({ emailChange, email, passwordChange, password, buttonText, type, buttonAction }) => {
  return (
    <div className="form-group-container">
      <div className="form-groups">
        <label>
          Email <span>*</span>
        </label>
        <input type="text" onChange={emailChange} value={email} placeholder="seeker@jobsportal.com" />
      </div>
      <div className="form-groups">
        <label>
          Password <span>*</span>
        </label>
        <input type="password" onChange={passwordChange} value={password} placeholder="••••••" />
      </div>
      {type === "login" ? <p>Forgot Password</p> : null}
      <button onClick={buttonAction}>{buttonText}</button>
      {type === "login" ? (
        <p>
          Don't have an account? <span>Sign Up</span>
        </p>
      ) : (
        <p>
          Already have an account?<span>Login</span>
        </p>
      )}
    </div>
  );
};

export default Form;
