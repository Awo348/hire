import React from "react";
import "./pricingPlan.css";
import Line from "../../svg-components/line/line";
import Popular from "../../assets/popular.svg";

const PricingPlan = () => {
  return (
    <div className="pricing-plan-container">
      <div className="pricing-plan-header">
        <h2>Select Pricing Plan</h2>
        <div>
          <Line />
        </div>
      </div>
      <div className="pricing-plan-table">
        <div className="pricing-table-head">
          <div>
            <p>Number of Jobs</p>
          </div>
          <div>
            <p>1 Month with CV access</p>
          </div>
          <div>
            <p>1 month with NO CV Access</p>
          </div>
          <div>
            <img src={Popular} alt="popular" />
            <p>1 year with CV Access</p>
          </div>
          <div>
            <p>1 year with NO CV Access</p>
          </div>
          <div>
            <p>Hire Me in House Selection</p>
          </div>
        </div>
        <div className="pricing-table-body">
          <div className="pricing-table-single">
            <div>
              <p>1</p>
            </div>
            <div className="green">
              <p>9000</p>
            </div>
            <div className="onions">
              <p>6000</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div className="red">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>2</p>
            </div>
            <div>
              <p>18000</p>
            </div>
            <div>
              <p>12000</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>3</p>
            </div>
            <div>
              <p>27000</p>
            </div>
            <div>
              <p>18000</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>4</p>
            </div>
            <div>
              <p>36000</p>
            </div>
            <div>
              <p>24000</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>5</p>
            </div>
            <div>
              <p>45000</p>
            </div>
            <div>
              <p>30000</p>
            </div>
            <div className="orange">
              <p>RS 40,000</p>
            </div>
            <div className="yellow">
              <p>RS 25,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>6</p>
            </div>
            <div>
              <p>54000</p>
            </div>
            <div>
              <p>36000</p>
            </div>
            <div>
              <p>48,000</p>
            </div>
            <div>
              <p>30,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>7</p>
            </div>
            <div>
              <p>63000</p>
            </div>
            <div>
              <p>42000</p>
            </div>
            <div>
              <p>56,000</p>
            </div>
            <div>
              <p>35,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>8</p>
            </div>
            <div>
              <p>72000</p>
            </div>
            <div>
              <p>48000</p>
            </div>
            <div>
              <p>64,000</p>
            </div>
            <div>
              <p>40,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>9</p>
            </div>
            <div>
              <p>81000</p>
            </div>
            <div>
              <p>54000</p>
            </div>
            <div>
              <p>72,000</p>
            </div>
            <div>
              <p>45,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>10</p>
            </div>
            <div>
              <p>90000</p>
            </div>
            <div>
              <p>60000</p>
            </div>
            <div className="orange">
              <p>Rs 80,000</p>
            </div>
            <div className="yellow">
              <p>Rs 50,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
