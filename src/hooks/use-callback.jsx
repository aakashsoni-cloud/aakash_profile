// import { useCallback } from "react";
import { useCallback } from "react";
import userInfo from "../mockData/userInfo.json";

const LargeList = () => {
  // Using useCallback to prevent recreating handleClick on every render
  const handleClick = useCallback((id) => {
    console.log("Clicked item:", id);
  },[]);

  console.log('handleClick');
  return (
    <ul>
      {userInfo.map((item) => (
        <li key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
export default LargeList;
