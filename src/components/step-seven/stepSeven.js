import React from "react";
import "./stepSeven.css";
import UserMulti from "../../utils/user-multi/userMulti";
import Plus from "../../svg-components/plus/plus";
import Rectangle from "../../svg-components/rectangle/rectangle";
const StepSeven = ({ add, minus }) => {
  return (
    <UserMulti fullStep={false} add={add} minus={minus}>
      <div className="candidate-sign-up-step-25">
        <div className="rectangle-container">
          <div className="group-child2" />
          <div className="other-qualifications">Other Qualifications</div>
        </div>
        <div className="group-div">
          <div className="group-child3" />
          <div className="group-child4" />
          <div className="group-child5" />
          <div className="group-child6" />
          <div className="group-child7" />
          <div className="vector-parent">
            <Rectangle width={390} viewBox="0 0 390 49" />
            <div className="driving-license">Driving License</div>
          </div>
          <div className="vector-group">
            <Rectangle width={390} viewBox="0 0 390 49" />
            <div className="first-aid">First Aid</div>
          </div>
          <div className="rectangle-parent1">
            <div className="group-child9" />
            <div className="type-of-vehicle">Type of vehicle</div>
          </div>
          <div className="rectangle-parent2">
            <div className="group-child10" />
            <div className="level-date-institution">level-date-institution</div>
            <div className="group-child11" />
            <div className="level-date-institution1">level-date-institution</div>
            <div className="group-child12" />
            <div className="level-date-institution-qualifi">level-date-institution-qualification name</div>
            <div className="group-child13" />
            <div className="level-date-institution-qualifi1">level-date-institution-qualification name</div>
          </div>
          <div className="vector-container">
            <Rectangle width={390} viewBox="0 0 390 49" />
            <div className="it">IT</div>
          </div>
          <div className="vector-parent1">
            <Rectangle width={390} viewBox="0 0 390 49" />
            <div className="software">Software</div>
          </div>
          <div className="vector-parent2">
            <Rectangle width={390} viewBox="0 0 390 49" />
            <div className="certification">Certification</div>
          </div>
          <div className="group-wrapper">
            <div className="vector-parent3">
              <Rectangle width={390} viewBox="0 0 390 49" />
              <div className="details">Details</div>
            </div>
          </div>
        </div>
        <div className="vector-parent4">
          {/* <img className="group-child18" alt="" src="/rectangle-25368.svg" /> */}
          <Plus />
          <div className="group-child19" />
          <div className="add-another-skillexpertise">Add another Qualification</div>
        </div>
        <div className="rectangle-parent3">
          <div className="group-child20" />
          <div className="group-child21" />
          <div className="group-child22" />
          <div className="group-child23" />
          <div className="group-child24" />
          <div className="group-child25" />
          <div className="group-child26" />
          <div className="group-child27" />
          <div className="group-child28" />
          <div className="group-child29" />
          <div className="vector-parent5">
            <Rectangle width={599} viewBox="0 0 599 52" />
            <div className="details-beginnerstandardexp">Details (Beginner/standard/Expert)</div>
          </div>
        </div>
        <div className="vector-parent6">
          <Plus />
          <div className="group-child32" />
          <div className="add-another-skillexpertise">Add another Skill/Expertise</div>
        </div>
        <div className="rectangle-parent4">
          <div className="group-child33" />
          <div className="group-child34" />
          <div className="group-child35" />
          <div className="group-child36" />
          {/* <Rectangle width={390} viewBox="0 0 390 49" /> */}
          <div className="name-and-surname">Name and Surname</div>
          {/* <Rectangle width={390} viewBox="0 0 390 49" /> */}
          <div className="position">Position</div>
          {/* <Rectangle width={390} viewBox="0 0 390 49" /> */}
          <div className="company">Company</div>
          {/* <Rectangle width={390} viewBox="0 0 390 49" /> */}
          <div className="contact-number">Contact Number</div>
          {/* <Rectangle width={390} viewBox="0 0 390 49" /> */}
          <div className="email-address">Email Address</div>
          <div className="rectangle-parent5">
            <div className="group-child42" />
            <div className="references">References</div>
          </div>
          <div className="rectangle-parent6">
            <div className="group-child42" />
            <div className="skillsexpertise">Skills/Expertise</div>
          </div>
        </div>
        <div className="rectangle-parent7">
          <div className="group-child44" />
          <div className="office">Office</div>
          <Rectangle width={390} viewBox="0 0 390 49" />
          <div className="mobile">Mobile</div>
          <div className="group-child46" />
          <div className="group-child47" />
        </div>
        <div className="vector-parent7">
          <Plus />
          <div className="group-child49" />
          <div className="add-another-reference">Add another Reference</div>
        </div>
        <div className="rectangle-parent8">
          <div className="group-child50" />
          <div className="other-qualifications">Standard Cover letters/motivation letters for job application</div>
        </div>
        <div className="vector-parent8">
          <Plus />
          <div className="group-child49" />
          <div className="add-another-reference">Attach cover letter</div>
        </div>
      </div>
    </UserMulti>
  );
};

export default StepSeven;
