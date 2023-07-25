import React from "react";
import "./stepFive.css";
import UserMulti from "../../utils/user-multi/userMulti";
import Plus from "../../svg-components/plus/plus";

const StepFive = ({ add, minus }) => {
  return (
    <UserMulti fullStep={false} add={add} minus={minus}>
      <div className="step-four-container">
        <div className="step-four-wrapper">
          <h2>Diploma Qualifications</h2>
          <div className="secondary-edu-type">
            <div>
              <h2>Diploma</h2>
              <input type="checkbox" />
            </div>
            <div>
              <h2>Advance/graduate Diploma</h2>
              <input type="checkbox" />
            </div>
            <div>
              <h2>Advance Diploma</h2>
              <input type="checkbox" />
            </div>
            <div>
              <h2>Post Graduate Diploma</h2>
              <input type="checkbox" />
            </div>
            <div>
              <h2>Others</h2>
              <input type="checkbox" />
            </div>
          </div>
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
            <p>Duration</p>
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
        <div className="step-four-wrapper">
          <h2>Tertiary Qualifications</h2>
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
            <p>Duration</p>
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

export default StepFive;
