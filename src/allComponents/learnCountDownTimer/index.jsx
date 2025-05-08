import { useEffect, useState } from "react";
import Navigation from "../../navigation";
import "./index.css";
import { useRef } from "react";

const LearnCountDownTimer = () => {
  const [isStarted, setIsStarted] = useState(false);
  const useRefInterval = useRef(null);
  const [timer, setTimer] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    if (isStarted) {
      if (
        timer.hours.length == 0 &&
        timer.minutes.length == 0 &&
        timer.seconds.length == 0
      ) {
        return;
      }

      useRefInterval.current = setInterval(() => {
        setTimer((prevTimer) => {
          const copyTimer = { ...prevTimer };
          copyTimer.seconds--;
          if (copyTimer.seconds < 0) {
            copyTimer.minutes--;
            copyTimer.seconds = 59;
            if (copyTimer.minutes < 0) {
              copyTimer.hours--;
              copyTimer.minutes = 59;
              if (copyTimer.hours < 0) {
                clearInterval(useRefInterval.current);
                return { hours: "00", minutes: "00", seconds: "00" };
              }
            }
          }

          return copyTimer;
        });
      }, 1000);
    }
  }, [isStarted]);

  const onHandleChange = (e, type) => {
    e.preventDefault();

    const value = parseInt(e.target.value, 10) || 0;
    const copyTime = { ...timer };

    copyTime[type] = value;

    // minutes:second
    copyTime.minutes += Math.floor(copyTime.seconds / 60);
    copyTime.seconds = copyTime.seconds % 60;

    //hours:minutes

    copyTime.hours = parseInt(copyTime.hours, 10) || 0;
    copyTime.hours += Math.floor(copyTime.minutes / 60);
    copyTime.minutes = copyTime.minutes % 60;

    setTimer(copyTime);
  };

  const hasCountDownStop = () => {
    setIsStarted(false);
    clearInterval(useRefInterval.current);
  };
  const handleResetTimer = () => {
    setTimer({ hours: "00", minutes: "00", seconds: "00" });
  };

  return (
    <div>
      <Navigation />
      <div className="main-container">
        <h2>Count Down Timer</h2>
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
            value={timer.hours}
            onChange={(e) => onHandleChange(e, "hours")}
          />
          <input
            className="hours"
            placeholder="HH"
            type="text"
            value={timer.minutes}
            onChange={(e) => onHandleChange(e, "minutes")}
          />
          <input
            className="hours"
            placeholder="HH"
            type="text"
            value={timer.seconds}
            onChange={(e) => onHandleChange(e, "seconds")}
          />
        </div>
        <div className="button-container">
          <button onClick={() => setIsStarted(true)} disabled={isStarted}>
            Start
          </button>
          <button onClick={hasCountDownStop} disabled={!isStarted}>
            End
          </button>
          <button onClick={handleResetTimer} disabled={isStarted}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnCountDownTimer;
