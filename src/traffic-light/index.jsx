/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Signal from "./signal";
import "./index.css";
import Navigation from "../navigation";

const TrafficLight = () => {
  const trafficLight = ["red", "yellow", "green"];
  const [active, setActive] = useState(0);

  useEffect(() => {
    let intervalId = setTimeout(() => {
      setActive((prev) => (prev + 1) % trafficLight.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [trafficLight]);

  return (
    <div>
      <Navigation />

      <div className="traffic-light-container">
        <h3>Traffic Light</h3>
        {trafficLight.map((color, index) => {
          return (
            <Signal key={index} isActive={active === index} color={color} />
          );
        })}
      </div>
    </div>
  );
};

export default TrafficLight;
