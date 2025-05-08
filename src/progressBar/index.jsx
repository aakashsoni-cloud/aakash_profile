import { useEffect, useState } from "react";
import "./index.css";
// eslint-disable-next-line react/prop-types
const ProgressBar = ({ progress }) => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    // setAnimationProgress(progress);
    setTimeout(() => setAnimationProgress(progress), 2000);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{ transform: `translateX(${animationProgress - 100}%)` }}
        role="progressbar"
        // aria-valuenow={animationProgress}
        // aria-valuemax="100"
        // aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
