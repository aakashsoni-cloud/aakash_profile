/* eslint-disable react/prop-types */
import "./index.css";
const Signal = (props) => {
  const { color, isActive } = props;

  return (
    <div
      className="signal"
      style={{ backgroundColor: `${isActive ? color : "lightgrey"}` }}
    />
  );
};

export default Signal;
