// import useFetch from "../hooks/use-fetch";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/use-debounce";
import Navigation from "../navigation";
import useFetch from "../hooks/use-fetch";
import "./index.css";
import useLocalStorage from "../hooks/use-localStorage";
import { useDispatch, useSelector } from "react-redux";
import UseRefvsUseState from "./useRef_useState-useRefvsUseState";
import ShoppingCart from "./useReducer-shopping-cart";
import FancyInput from "./useImperativeHandle-fancyinput";
import CheckoutPage from "./useTransition-checkout-page";

const HookePage = () => {
  const inputRef = useRef(null);
  const fancyRef = useRef(null);
  const [input, setInput] = useState("");
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const { storedValue, setStoredValue } = useLocalStorage("name");

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  /*
  useEffect(() => {
    console.log('This is useEffect')
    return () => {
      console.log('This is unmount of useEffect')
    }
  }, []);

  useLayoutEffect(() => {
    console.log('This is useLayoutEffect');
    return () => {
      console.log('This is unmount of useLayoutEffect')
    }
  }, [])
  */

  const { loading, data } = useFetch(
    "https://api.thecatapi.com/v1/images/search"
  );

  const debounceValue = useDebounce(input, 500);

  return (
    <div className="hooks-container">
      <Navigation />
      <div>
        <h4>Custom Hook Fetch</h4>
        {loading ? (
          <h6>Loading....</h6>
        ) : (
          <img src={data[0]?.url} alt="cat" className="image-container"></img>
        )}
      </div>

      <div className="debounce-container">
        <h4>Custom Hook Debouncing</h4>
        <input
          type="text"
          className="debounce-text"
          placeholder="Type to search"
          onChange={(e) => {
            setInput(e.target.value);
            setInput(e.target.value);
          }}
        />
        <button onClick={() => setStoredValue(debounceValue)}>
          Enter Data to localStorage
        </button>
        <h3>{storedValue}</h3>
      </div>

      <div className="counter-container">
        <h4>Redux</h4>
        <h2>{count}</h2>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
          INC
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
          DEC
        </button>
      </div>

      <div className="ref-container">
        <h4>useRef</h4>
        <input
          type="text"
          className="ref-text"
          placeholder="Type to search"
          // ref={inputRef}
        />
      </div>

      <div className="ref-vs-usestate-container">
        <UseRefvsUseState />
      </div>

      <div className="use-reduce-container">
        <ShoppingCart />
      </div>

      <div className="use-imperative-container">
        <h4>useImperativeHandle</h4>
        <FancyInput ref={fancyRef} />
        {/* The "fancyRef has power to call the child ref methods focus and clear"*/}
        {console.log(fancyRef.current)}
        <button onClick={() => fancyRef.current.focus()}>Focus</button>
        <button onClick={() => fancyRef.current.clear()}>Clear</button>
      </div>

      <div>
        <h4>useTransition</h4>
        <CheckoutPage />
      </div>
    </div>
  );
};

export default HookePage;
