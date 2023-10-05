import React from "react";
import "./stepTwo.css";
import UserMulti from "../../utils/user-multi/userMulti";
import Step from "../../assets/step-2.png";

const StepTwo = ({ add, minus, formData }) => {
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
          <input
            type="text"
            placeholder="Enter mother’s maiden name/pet name/ football team"
          />
        </div>
      </div>

      <div className="personal-details-body">
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>Full Name</label>
            <input type="text" value={formData?.name} />
          </div>
          <div className="add-profile-group">
            <label>Title</label>
            <input
              type="text"
              // {...register("positionHeld", {
              //   required: "Please enter  position held",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              name="positionHeld"
              placeholder="Mr./Mrs/Miss"
            />
            {/* <p className="add-profile-error">{errors?.positionHeld?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>Phone (Home)</label>
            <input type="text" placeholder="+1234567890" />
          </div>
          <div className="add-profile-group">
            <label>Phone (Mobile)</label>
            <input
              type="text"
              // {...register("positionHeld", {
              //   required: "Please enter  position held",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              name="positionHeld"
              placeholder="+1234567890"
            />
            {/* <p className="add-profile-error">{errors?.positionHeld?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>Gender</label>
            <input type="text" placeholder="Male" />
          </div>
          <div className="add-profile-group">
            <label>Martial Status</label>
            <input
              type="text"
              // {...register("positionHeld", {
              //   required: "Please enter  position held",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              name="positionHeld"
              placeholder="Single"
            />
            {/* <p className="add-profile-error">{errors?.positionHeld?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>State/Province</label>
            <input
              type="text"
              // {...register("state", {
              //   required: "Please enter State/Province",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
            />
            {/* <p className="add-profile-error">{errors?.state?.message}</p> */}
          </div>
          <div className="add-profile-group">
            <label>District</label>
            <select
            // {...register("district", {
            //   required: "Please choose Address",
            // })}
            >
              <option value="">Washington</option>
              <option value="Washington">Washington</option>
            </select>
            {/* <p className="add-profile-error">{errors?.district?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>Country</label>
            <input
              type="text"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
          <div className="add-profile-group">
            <label>Street Address</label>
            <input
              type="text"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              placeholder="Dummy Street Address 123 USA"
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>Age</label>
            <input
              type="text"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
          <div className="add-profile-group">
            <label>Date of Birth</label>
            <input
              type="date"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              placeholder="06/09/2009"
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>National ID Number</label>
            <input
              type="text"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
          <div className="add-profile-group">
            <label>Security Question</label>
            <input
              type="text"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              placeholder="Enter Name of Pet Name"
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
        </div>
      </div>
    </UserMulti>
  );
};

export default StepTwo;
