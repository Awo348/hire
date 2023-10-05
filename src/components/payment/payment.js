import React, { useState } from "react";
import "./payment.css";
import Checked from "../../svg-components/checked/checked";
import Unchecked from "../../svg-components/unchecked/unchecked";

const Payment = () => {
  const [check, setCheck] = useState("Hire Me Services");
  return (
    <div className="payment-container">
      <div
        className="payment-hireme"
        onClick={() => {
          setCheck("Hire Me Services");
        }}>
        {check === "Hire Me Services" ? <Checked /> : <Unchecked />} <h2>Hire Me Services</h2>
      </div>
      <div
        className="payment-offline"
        onClick={() => {
          setCheck("Pay Offline");
        }}>
        {check === "Pay Offline" ? <Checked /> : <Unchecked />} <h2>Pay Offline</h2>
      </div>

      <div className="payment-form">
        <label>Total Price</label>
        <input type="text" placeholder="Rs" />
      </div>

      <button>Payment</button>
    </div>
  );
};

export default Payment;
