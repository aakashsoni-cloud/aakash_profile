import { useImperativeHandle, useRef, useState } from "react";
/* eslint-disable react/prop-types */

// `useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`.

const FancyInput = ({ ref }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  // This is generally we do 
  // useEffect(() => {
  //   inputRef.current && inputRef.current.focus();
  // }, [inputRef]);

  // use to take the child pass to parent
  useImperativeHandle(ref, () => ({

    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return (
    <div>
      <input
        type="text"
        className="ref-text"
        placeholder="Type to search"
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>You typed: {input} </p>
    </div>
  );
};

export default FancyInput;
