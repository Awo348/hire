import React from "react";
import "./stepThree.css";
import UserMulti from "../../utils/user-multi/userMulti";
import Step from "../../assets/step3.png";
import Plus from "../../svg-components/plus/plus";

const StepThree = ({ add, minus }) => {
  return (
    <UserMulti img={Step} page="Education" add={add} minus={minus}>
      <div className="education-container">
        <h2>Primary Education</h2>
        <div className="primary-education">
          <div className="primary-education-single">
            <h2>CPE</h2>
            <div className="primary-education-year">
              <p>Year</p>
              <input type="text" placeholder="Month/Year" />
            </div>
            <div className="primary-education-grade">
              <div>
                <h2>Passed</h2>
                <input type="checkbox" />
              </div>
              <div>
                <h2>Fail</h2>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="primary-education-single">
            <h2>Pre Vocational</h2>
            <div className="primary-education-year">
              <p>Year</p>
              <input type="text" placeholder="Month/Year" />
            </div>
            <div className="primary-education-grade">
              <div>
                <h2>Passed</h2>
                <input type="checkbox" />
              </div>
              <div>
                <h2>Fail</h2>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="education-container">
        <h2>Secondary Education</h2>
        <div className="secondary-edu-type">
          <div>
            <h2>Form 1</h2>
            <input type="checkbox" />
          </div>
          <div>
            <h2>Form 2</h2>
            <input type="checkbox" />
          </div>
          <div>
            <h2>Form 3</h2>
            <input type="checkbox" />
          </div>
          <div>
            <h2>Form 4</h2>
            <input type="checkbox" />
          </div>
          <div>
            <h2>Form 5/SC/GSCE</h2>
            <input type="checkbox" />
          </div>
          <div>
            <h2>Form 6/lower/HSC/GSCE</h2>
            <input type="checkbox" />
          </div>
        </div>
        <div className="secondary-edu-grades">
          <div className="ssce-container">
            <div className="primary-education-year">
              <p>Year</p>
              <input type="text" placeholder="Month/Year" />
            </div>
            <div className="primary-education-year">
              <p>Subjects</p>
              <p>Grades</p>
            </div>
            <div className="secondary-edu-grade">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="secondary-edu-grade">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="secondary-edu-grade">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="secondary-edu-grade">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="secondary-edu-grade">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="secondary-edu-grade">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="secondary-edu-grade">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="secondary-edu-grade">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="secondary-edu-grade">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="secondary-edu-grade">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="add-new-cert">
              <Plus />
              <p>Add another certificate</p>
            </div>
          </div>
          <div className="hsc-container">
            <div className="primary-education-year">
              <p>Year</p>
              <input type="text" placeholder="Month/Year" />
            </div>
            <div className="hsc-subjects">
              <div className="principal-subjects">
                <div className="primary-education-year">
                  <p>Principal Subjects</p>
                  <p>Grades</p>
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
              <div className="principal-subjects">
                <div className="primary-education-year">
                  <p>Subsidiary Subjects</p>
                  <p>Grades</p>
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="secondary-edu-grade">
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="add-new-cert">
              <Plus />
              <p>Add another certificate</p>
            </div>
          </div>
        </div>
      </div>
    </UserMulti>
  );
};

export default StepThree;
