import { useEffect, useState } from "react";
import Navigation from "../navigation";

const DigitalClock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [meridian, setMeridian] = useState("AM");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setHours(currentTime.split(":")[0]);
      setMinutes(currentTime.split(":")[1]);
      setSeconds(currentTime.split(":")[2]);
    }, 1000);

    if (hours > 12) {
      setMeridian("PM");
    }
    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  return (
    <div>
      <Navigation />
      <h1>
        {`${hours}:${minutes}:${seconds}`} {meridian}
      </h1>
    </div>
  );
};

export default DigitalClock;
