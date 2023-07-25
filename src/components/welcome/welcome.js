import React from "react";
import "./welcome.css";
import Logo from "../../assets/home-logo.png";
import Place from "../../assets/place.png";
import Type from "../../assets/jobs-types.png";
import { NavLink } from "react-router-dom";
import Layout from "../../utils/layout/layout";
import { advert } from "../../utils/data/data";
import SingleAdvert from "../single-advert/singleAdvert";
import MoreJobs from "../more-jobs/moreJobs";
import FeaturedCircular from "../featured-circular/featuredCircular";
import Profilling from "../profilling/profilling";

const Welcome = () => {
  return (
    <>
      <Layout>
        <div className="welcome-container">
          <div className="welcome-header">
            <div className="welcome-logo">
              <img src={Logo} alt="logog" />
            </div>
            <div className="welcome-nav">
              <NavLink to="/vacancies">Vacanies</NavLink>
              <NavLink to="/career">Career Advice</NavLink>
              <NavLink to="/about">About us</NavLink>
              <NavLink to="/advertise">Advertise</NavLink>
            </div>
            <div className="welcome-shapes">
              <div className="rectangle"></div>
              <div className="two-rectangle">
                <div className="rectangle"></div>
                <div className="rectangle"></div>
              </div>
              <div className="oval"></div>
            </div>
          </div>
          <div className="welcome-place">
            <img src={Place} alt="place" />
          </div>
          <div className="welcome-advert">
            {advert?.map((item, index) => {
              return <SingleAdvert position={item} key={index} />;
            })}
            <div className="welcome-advert-search">
              <input type="text" placeholder="Search all recent Adverts" />
              <button>Register</button>
            </div>
          </div>
          <MoreJobs />
          <div className="welcome-type">
            <img src={Type} alt="type" />
          </div>
          <FeaturedCircular />
          <Profilling />
        </div>
      </Layout>
      <div className="subscribe-container">
        <div className="subscribe-wrapper">
          <h2>
            Never Want to Miss <br /> Any <span>Job News?</span>
          </h2>
          <div>
            {/* <input type="text"  /> */}
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="welcome-footer">
        <h2>CopyRight Hireme.mu</h2>
      </div>
    </>
  );
};

export default Welcome;
