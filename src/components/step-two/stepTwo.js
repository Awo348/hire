import React from "react";
import "./stepTwo.css";
import UserMulti from "../../utils/user-multi/userMulti";
import Step from "../../assets/step-2.png";

const StepTwo = ({ add, minus }) => {
  return (
    <UserMulti page="Personal Details" img={Step} add={add} minus={minus}>
      <div className="personal-details-cont">
        <div className="personal-details-form">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Surname</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Maiden name</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Status</label>
          <div className="personal-details-status">
            <div>
              <label>Single</label>
              <input type="text" />
            </div>
            <div>
              <label>Married</label>
              <input type="text" />
            </div>
            <div>
              <label>Other</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="personal-details-form full">
          <label>Address</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Phone</label>
          <div className="personal-details-phone">
            <div>
              <label>Home</label>
              <input type="text" />
            </div>
            <div>
              <label>Mobile</label>
              <input type="text" />
            </div>
            <div>
              <label>Office</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="personal-details-form">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Date of Birth</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Place of Birth</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Nationality</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Age</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>National ID Number</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Skype ID</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Driving License</label>
          <div className="personal-details-status">
            <div>
              <label>Yes</label>
              <input type="text" />
            </div>
            <div>
              <label>No</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="personal-details-form full">
          <label>Security Question</label>
          <input type="text" placeholder="Enter mother’s maiden name/pet name/ football team" />
        </div>
      </div>
    </UserMulti>
  );
};

export default StepTwo;
