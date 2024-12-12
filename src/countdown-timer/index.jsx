import { useEffect, useRef, useState } from "react";
import "./index.css";
import Navigation from "../navigation";
const CountDownTimer = () => {
  const [isStarted, setIsStarted] = useState(false);
  const useRefInterval = useRef(null);
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    if (isStarted) {
      if (
        time.hours.length === 0 &&
        time.minutes.length === 0 &&
        time.seconds.length === 0
      ) {
        return;
      }

      useRefInterval.current = setInterval(() => {
        setTime((prevTime) => {
          const copyPrevTime = { ...prevTime };
          copyPrevTime.seconds--;
          if (copyPrevTime.seconds < 0) {
            copyPrevTime.minutes--;
            copyPrevTime.seconds = 59;
            if (copyPrevTime.minutes < 0) {
              copyPrevTime.hours--;
              copyPrevTime.minutes = 59;
              if (copyPrevTime.hours < 0) {
                clearInterval(useRefInterval.current);
                return { hours: "00", minutes: "00", seconds: "00" };
              }
            }
          }
          return copyPrevTime;
          //   if (prev.seconds > 0) {
          //     return { ...prev, seconds: prev.seconds - 1 };
          //   } else if (prev.minutes > 0) {
          //     return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          //   } else if (prev.hours > 0) {
          //     return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
          //   } else {
          //     setIsStarted((prev) => !prev);
          //     return { ...prev, hours: "", minutes: "", seconds: "" };
          //   }
        });
      }, 1000);
    }
    return () => clearInterval(useRefInterval.current);
  }, [isStarted]);

  const handleCountDownStop = () => {
    setIsStarted(false);
    setTime({ hours: "00", minutes: "00", seconds: "00" });
  };

  const handleCountDownStartAndPause = () => {
    setIsStarted((prev) => !prev);
  };

  const handleChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0;

    let copyTime = { ...time };
    copyTime[field] = value;

    // For formatting the timer across minutes:seconds
    copyTime.minutes += Math.floor(copyTime.seconds / 60);
    copyTime.seconds = copyTime.seconds % 60;

    // For formatting the timer across hours:minutes
    copyTime.hours = parseInt(copyTime.hours, 10) || 0;
    copyTime.hours += Math.floor(copyTime.minutes / 60);
    copyTime.minutes = copyTime.minutes % 60;

    setTime(copyTime);
  };

  return (
    <div>
      <Navigation />

      <h3>Count Down Timer</h3>
      <div className="countdown-timer-container">
        <div className="timer-heading-container">
          <h3 className="heading">Hours</h3>
          <h3 className="heading">Minutes</h3>
          <h3 className="heading">Seconds</h3>
        </div>
        <div className="timer-container">
          <input
            className="hours"
            placeholder="HH"
            type="text"
            value={time.hours}
            onChange={(e) => handleChange(e, "hours")}
          />
          {":"}
          <input
            className="minutes"
            placeholder="MM"
            type="text"
            value={time.minutes}
            onChange={(e) => handleChange(e, "minutes")}
          />
          {":"}
          <input
            className="seconds"
            placeholder="SS"
            type="text"
            value={time.seconds || "00"}
            onChange={(e) => handleChange(e, "seconds")}
          />
        </div>
        <div className="button-container">
          <button onClick={handleCountDownStartAndPause}>
            {isStarted ? "Pause" : "Start"}
          </button>
          <button onClick={handleCountDownStop}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
