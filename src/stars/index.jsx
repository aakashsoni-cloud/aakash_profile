// import React from 'react'
import { useState } from "react";
import "./index.css";
import Navigation from "../navigation";

// eslint-disable-next-line react/prop-types
const StarComponent = ({ startCount = 5 }) => {
  const [startValue, setStartValue] = useState();
  const [hoverValue, setHoverValue] = useState();
  const star = new Array(startCount).fill(0);

  const handleMouseEnter = (index) => {
    setHoverValue(index);
  };

  const handleStarSelect = (index) => {
    setStartValue(index + 1);
  };

  return (
    <div className="main-container">
      <Navigation />

      <span className="heading">
        Give Rating <span>&#9889;</span>
      </span>
      <div className="star-container">
        {star.map((item, index) => {
          return (
            <span
              key={index}
              className={index < startValue || index < hoverValue ? "gold" : ""}
              onClick={() => handleStarSelect(index)}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={() => setHoverValue(0)}>
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StarComponent;
