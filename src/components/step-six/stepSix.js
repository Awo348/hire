import React from "react";
import "./stepSix.css";
import Step from "../../assets/step4.png";
import UserMulti from "../../utils/user-multi/userMulti";

const StepSix = ({ add, minus }) => {
  return (
    <UserMulti img={Step} page={null} add={add} minus={minus}>
      <div className="candidate-sign-up-step-23">
        <div className="candidate-sign-up-step-23-child" />
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="reason-for-leaving">Reason For Leaving</div>
        </div>
        <div className="vector-parent">
          <img className="rectangle-icon" alt="" src="/rectangle-25368.svg" />
          <div className="group-child3" />
          <div className="add-another-certificate">Add another certificate</div>
        </div>
        {/* <div className="vector-group">
        <img className="group-child4" alt="" src="/rectangle-25306.svg" />
        <div className="step-4-employment-container">
          <p className="employment-history">Step 4</p>
          <p className="employment-history">Employment History</p>
        </div>
        <div className="ellipse-div" />
        <div className="register-candidate">
          <p className="employment-history">REGISTER</p>
          <p className="employment-history">Candidate</p>
        </div>
      </div> */}
        <div className="group-div">
          <div className="group-child5" />
          <div className="rectangle-parent1">
            <div className="group-child6" />
            <div className="group-child7" />
            <div className="group-child8" />
            <div className="group-child9" />
            <div className="rectangle-parent2">
              <div className="group-child10" />
              <div className="no-employment-history">No Employment History</div>
            </div>
            <div className="rectangle-parent3">
              <div className="group-child10" />
              <div className="no-employment-history">Present Employment</div>
            </div>
            <div className="group-child12" />
            <div className="group-child13" />
            <div className="group-child14" />
            <div className="group-child15" />
            <div className="group-child16" />
            <div className="rectangle-parent4">
              <div className="group-child" />
              <div className="duties">Duties</div>
            </div>
            <div className="rectangle-parent5">
              <div className="group-child" />
              <div className="reason-for-leaving">Employment type</div>
            </div>
            <div className="rectangle-parent6">
              <div className="group-child" />
              <div className="reason-for-leaving">Company Address</div>
            </div>
            <div className="rectangle-parent7">
              <div className="group-child" />
              <div className="reason-for-leaving">Start Date</div>
            </div>
            <div className="rectangle-parent8">
              <div className="group-child21" />
              <div className="reason-for-leaving">End Date</div>
            </div>
            <div className="rectangle-parent9">
              <div className="group-child" />
              <div className="reason-for-leaving">Company/Institution</div>
            </div>
            <div className="rectangle-parent10">
              <div className="group-child" />
              <div className="reason-for-leaving">Position Held</div>
            </div>
            <div className="rectangle-parent11">
              <div className="group-child" />
              <div className="reason-for-leaving">Telephone Number</div>
            </div>
            <div className="rectangle-parent12">
              <div className="group-child25" />
              <div className="duties">Permanent</div>
            </div>
            <div className="rectangle-parent13">
              <div className="group-child25" />
              <div className="temporary">Temporary</div>
            </div>
            <div className="rectangle-parent14">
              <div className="group-child27" />
              <div className="trainee">Trainee</div>
            </div>
            <div className="rectangle-parent15">
              <div className="group-child27" />
              <div className="trainee">Placement</div>
            </div>
            <div className="rectangle-parent16">
              <div className="group-child29" />
              <div className="monthyear">month/year</div>
            </div>
            <div className="rectangle-parent17">
              <div className="group-child29" />
              <div className="monthyear">month/year</div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent18">
          <div className="group-child31" />
          <div className="rectangle-parent19">
            <div className="group-child32" />
            <div className="group-child33" />
            <div className="group-child34" />
            <div className="rectangle-parent2">
              <div className="group-child10" />
              <div className="no-employment-history">Previous Employment</div>
            </div>
            <div className="group-child36" />
            <div className="group-child37" />
            <div className="group-child38" />
            <div className="group-child39" />
            <div className="group-child40" />
            <div className="rectangle-parent21">
              <div className="group-child" />
              <div className="duties">Duties</div>
            </div>
            <div className="rectangle-parent22">
              <div className="group-child" />
              <div className="reason-for-leaving">Employment type</div>
            </div>
            <div className="rectangle-parent23">
              <div className="group-child" />
              <div className="reason-for-leaving">Company Address</div>
            </div>
            <div className="rectangle-parent24">
              <div className="group-child" />
              <div className="reason-for-leaving">Start Date</div>
            </div>
            <div className="rectangle-parent25">
              <div className="group-child21" />
              <div className="reason-for-leaving">End Date</div>
            </div>
            <div className="rectangle-parent26">
              <div className="group-child" />
              <div className="reason-for-leaving">Company/Institution</div>
            </div>
            <div className="rectangle-parent27">
              <div className="group-child" />
              <div className="reason-for-leaving">Position Held</div>
            </div>
            <div className="rectangle-parent28">
              <div className="group-child" />
              <div className="reason-for-leaving">Telephone Number</div>
            </div>
            <div className="rectangle-parent29">
              <div className="group-child25" />
              <div className="duties">Permanent</div>
            </div>
            <div className="rectangle-parent30">
              <div className="group-child25" />
              <div className="temporary">Temporary</div>
            </div>
            <div className="rectangle-parent31">
              <div className="group-child27" />
              <div className="trainee">Trainee</div>
            </div>
            <div className="rectangle-parent32">
              <div className="group-child27" />
              <div className="trainee">Placement</div>
            </div>
            <div className="rectangle-parent33">
              <div className="group-child29" />
              <div className="monthyear">month/year</div>
            </div>
            <div className="rectangle-parent34">
              <div className="group-child29" />
              <div className="monthyear">month/year</div>
            </div>
          </div>
        </div>
      </div>
    </UserMulti>
  );
};

export default StepSix;
