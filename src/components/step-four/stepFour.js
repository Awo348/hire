import React from "react";
import "./stepFour.css";
// import UserMulti from "../../utils/user-multi/userMulti";
import Personal from "../../svg-components/personal";

// import Step from "../../assets/step3.png";
import EmploymentHistory from "../../svg-components/employmentHistory";
import Qualification from "../../svg-components/qualification";
import Legal from "../../svg-components/legal";
import Plus from "../../assets/plus.png";

const StepFour = ({ add, minus }) => {
  return (
    <div className="stepfour" fullStep={false} add={add} minus={minus}>
      <div className="personal-details-header">
        <div className="personal-details-single active">
          <Personal color="#0A65CC" />
          <h2>Personal Information</h2>
        </div>
        <div className="personal-details-single">
          <EmploymentHistory color="black" />
          <h2>Employment History</h2>
        </div>
        <div className="personal-details-single">
          <Qualification color="black" />
          <h2>Qualification</h2>
        </div>
        <div className="personal-details-single">
          <Legal color="black" />
          <h2>Legal</h2>
        </div>
      </div>
      <div className="stepfour-container">
        <div className="qualification-cont">
          <h1>OTHER QUALIFICATION</h1>
          <div className="qualification-main">
            <label className="main-label">Other Qualifications</label>
            <div className="list-qualification">
              <div className="drivers-license">
                <div className="drivers-license-main">
                  <label>Driver License</label>
                  <input type="checkbox" />
                </div>
                <input
                  className="last"
                  type="text"
                  placeholder="type of vehicle"
                />
              </div>
              <div className="first-aid">
                <div className="first-aid-main">
                  <label>First Aid</label>
                  <input type="checkbox" />
                </div>
                <input
                  className="last"
                  type="text"
                  placeholder="level-date-institution"
                />
              </div>
              <div className="it">
                <div className="it-main">
                  <label>IT</label>
                  <input type="checkbox" />
                </div>
                <input
                  className="last"
                  type="text"
                  placeholder="level-date-institution"
                />
              </div>
              <div className="software">
                <div className="software-main">
                  <label>Software</label>
                  <input type="checkbox" />
                </div>
                <input
                  type="text"
                  className="last"
                  placeholder="level-date-institution-qualification name"
                />
              </div>
              <div className="certification">
                <div className="certification-main">
                  <label>Certification</label>
                  <input type="checkbox" />
                </div>
                <input
                  type="text"
                  className="last"
                  placeholder="level-date-institution-qualification name"
                />
              </div>
            </div>
          </div>
          <div className="new-qualification-btn">
            <button>
              <img src={Plus} alt="" /> Add New Qualification
            </button>
          </div>
        </div>

        <div className="skill-expert-cont">
          <h1>SKILLS/EXPERTISE</h1>

          <div className="beginner-intermediate-expert">
            <label>Beginner/Intermediate/Expert</label>
            <div className="table-container">
              <table>
                <tbody>
                  <tr>
                    <td className="one td">Adobe Illustrator </td>
                    <td className="two td">8 Year</td>
                    <td className="three td">
                      <span className="edit"> Edit</span> <div></div>
                      <span className="delete">Delete</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="one td">Adobe Photoshop</td>
                    <td className="two td">8 Year</td>
                    <td className="three td">
                      <span className="edit"> Edit</span> <div></div>
                      <span className="delete">Delete</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="one td">Communication Skills</td>
                    <td className="two td">5 year</td>
                    <td className="three td">
                      <span className="edit"> Edit</span> <div></div>
                      <span className="delete">Delete</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="one td">CSS</td>
                    <td className="two td">8 Year</td>
                    <td className="three td">
                      <span className="edit"> Edit</span> <div></div>
                      <span className="delete">Delete</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="one td">HTML</td>
                    <td className="two td">8 Year</td>
                    <td className="three td">
                      <span className="edit"> Edit</span> <div></div>
                      <span className="delete">Delete</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="one td">JavaScript</td>
                    <td className="two td">5 Year</td>
                    <td className="three td">
                      <span className="edit"> Edit</span> <div></div>
                      <span className="delete">Delete</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="one td">Jquery</td>
                    <td className="two td">4 Year</td>
                    <td className="three td">
                      <span className="edit"> Edit</span> <div></div>
                      <span className="delete">Delete</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="one td">WordPress</td>
                    <td className="two td">3 Year</td>
                    <td className="three td">
                      <span className="edit"> Edit</span> <div></div>
                      <span className="delete">Delete</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="add-new-skill-btn">
            <button>
              <img src={Plus} alt=""></img>
              Add New Skill
            </button>
          </div>
        </div>

        <div className="references-cont">
          <h1>REFERENCES</h1>

          <div className="position-company">
            <div className="position">
              <div className="position-held-name">
                <label>Name and Surname</label>
                <input type="text" placeholder="local" />
              </div>
              <div className="company-address">
                <label>Company</label>
                <input type="text" placeholder="New York" />
              </div>
            </div>
            <div className="position-district">
              <div className="position-name">
                <label>Position</label>
                <input type="text" placeholder="" />
              </div>
              <div className="company-district">
                <label> District</label>
                <input type="text" placeholder="Washington" />
              </div>
            </div>
          </div>
          <div className="phone">
            <label>Phone (office)</label>
            <input type="text" placeholder="+134564789" />
          </div>
          <div className="email">
            <label>Email</label>
            <input type="email" placeholder="@email.com" />
          </div>
          <div className="add-new-skill-btn">
            {" "}
            <button>
              <img src={Plus} alt="" /> Add New Skill
            </button>
          </div>

          <div className="phone-mobile">
            <label>Phone(Mobile)</label>
            <input type="text" placeholder="+134564789" />
          </div>
        </div>
        <div className="motivation-cont">
          <h1>STANDARD COVER LETTER/MOTIVATION LETTER FOR JOB APPLICATION</h1>
          <div className="motivation-input">
            <label>Type your letter here</label>
            <textarea
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Proin fermentum condimentum mauris, non posuere urna consectetur quis. 
              Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla,
               non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. 
               Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, 
               vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. 
               Donec euismod accumsan sem et aliquam. D"
            ></textarea>
          </div>
          <button className="attach-upload">
            Attach or Upload Cover letter
          </button>
        </div>
        <div className="back-next-btn">
          <button type="" className="back-btn">
            BACK
          </button>
          <button type="" className="next-btn">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
