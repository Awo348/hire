import React from "react";
import "./aboutUs.css";
import Banner from "../../assets/CARTOON.png";
import Line from "../../svg-components/line/line";
import SmallCircle from "../../svg-components/small-circle/smallCircle";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-wrapper">
        <div className="aboutus-banner">
          <div className="aboutus-banner-img">
            <img src={Banner} alt="banner" />
          </div>
          <div className="aboutus-banner-text">
            <h2>Stop wasting time</h2>
            <h3>in meetings</h3>
            <p>Boost efficiency, save time & money with post meeting surveys. </p>
            <div>
              <button>Get Started</button>
              <button>Sign up with Google</button>
            </div>
          </div>
        </div>
        <div className="about-us">
          <h2>About us</h2>
          <Line />
          <div className="about-us-cont">
            <div>
              <p>Picture this….you’re in your weekly meeting and you ask a question.</p>
              <p>No one responds. Whether they’re zoned out or are responding to emails or chatting on slack, it can feel defeating.</p>
            </div>
            <div className="about-us-points">
              <p> In order to have an epic meeting, you need five parts:</p>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Set a cadence for your team meetings</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Have a clear meeting objective and agenda</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Start on time and end on time</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Have the right attendees in the room</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Have clear action items [who, what, when] at the end of the meeting</p>
              </div>
            </div>
            <div>
              <p>Rate It was created to help leaders and managers have epic meetings that aren’t wasting anyone’s time.</p>
              <p>With timely feedback on how meetings can be productive, you will soon be holding world-class and super effective meetings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
