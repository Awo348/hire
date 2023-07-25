import React from "react";
import "./stepFour.css";
import UserMulti from "../../utils/user-multi/userMulti";
import Plus from "../../svg-components/plus/plus";

const StepFour = ({ add, minus }) => {
  return (
    <UserMulti fullStep={false} add={add} minus={minus}>
      <div className="step-four-container">
        <div className="step-four-wrapper">
          <h2>Other secondary Education</h2>
          <div className="other-sec-form">
            <p>Certificate</p>
            <input type="text" />
          </div>
          <div className="other-sec-form">
            <p>Examining Body</p>
            <input type="text" />
          </div>
          <div className="other-sec-form">
            <p>Country</p>
            <input type="text" />
          </div>
          <div className="other-sec-form">
            <p>Year (mm/year)</p>
            <input type="text" />
          </div>
          <div className="other-sec-grade">
            <div className="other-sec-form">
              <p>Passed</p>
              <input type="checkbox" />
            </div>
            <div className="other-sec-form">
              <p>Fail</p>
              <input type="checkbox" />
            </div>
          </div>
          <div className="add-new-cert">
            <Plus />
            <p>Add another certificate</p>
          </div>
        </div>
        <div className="step-four-wrapper">
          <h2>Technical Vocational Education</h2>
          <div className="other-tech-form">
            <p>University/Awarding Body</p>
            <input type="text" />
          </div>
          <div className="techni-double">
            <div className="other-tech-form">
              <p>Qualification Obtained</p>
              <input type="text" />
            </div>
            <div className="other-tech-form">
              <p>Year</p>
              <input type="text" />
            </div>
          </div>
          <div className="other-tech-form">
            <p>Class/Level/Division</p>
            <div className="other-tech-duration">
              <div>
                <p>From</p>
                <input type="text" placeholder="month/year" />
              </div>
              <div>
                <p>To</p>
                <input type="text" placeholder="month/year" />
              </div>
            </div>
          </div>
          <div className="other-tech-form">
            <p>Class/Level/Division</p>
            <input type="text" />
          </div>
          <div className="add-new-cert">
            <Plus />
            <p>Add another certificate</p>
          </div>
        </div>
      </div>
    </UserMulti>
  );
};

export default StepFour;
