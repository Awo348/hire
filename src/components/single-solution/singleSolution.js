import React from "react";
import "./singleSolution.css";

const SingleSolution = ({ name, img }) => {
  return (
    <div className="single-solution-container">
      <div>
        <img src={img} alt="single" />
        <div>
          <h2>{name}</h2>
          <p>237 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default SingleSolution;
