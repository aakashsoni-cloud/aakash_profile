import { useRef, useState } from "react";

const UseRefvsUseState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  const handleIncrementRefCount = () => {
    countRef.current += 1;
    console.log('Ref count: ', countRef.current);
  };
  return (
    <div>
      <h4>useRef vs useState</h4>
      <h5>Count: {count}</h5>
      <button onClick={handleIncrementCount}>Increment</button>

      <h5>Count (check console) :{countRef.current}</h5>
      <button onClick={handleIncrementRefCount}>
        Increment
      </button>
    </div>
  );
};

export default UseRefvsUseState;
