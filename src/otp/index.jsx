import { useEffect, useRef, useState } from "react";
import Navigation from "../navigation";
import "./index.css";

// eslint-disable-next-line react/prop-types
const OTPComponent = ({ size }) => {
  const inputRef = useRef([]);
  const [otpInputBox, setOtpInputBox] = useState(
    Array.from({ length: size }, () => "")
  );

  console.log(otpInputBox.length);
  const handleResend = () => {
    setOtpInputBox(Array.from({ length: size }, () => ""));
  };

  const handleKeyPress = (e, index) => {
    const value = e.key;

    // move left

    if (value === "ArrowLeft") {
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
    // move right

    if (value === "ArrowRight") {
      if (index + 1 < otpInputBox.length) {
        inputRef.current[index + 1].focus();
      }
    }

    const shallowCopyOtp = [...otpInputBox];

    // delete
    if (value == "Backspace") {
      shallowCopyOtp[index] = "";
      if (inputRef.current && index > 0) {
        inputRef.current[index - 1].focus();
      }
      setOtpInputBox(shallowCopyOtp);
    }

    if (isNaN(value)) {
      return;
    }

    // enter otp
    shallowCopyOtp[index] = value;
    if (inputRef.current && index + 1 < otpInputBox.length) {
      inputRef.current[index + 1].focus();
    }
    setOtpInputBox(shallowCopyOtp);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current[0].focus();
    }
  }, [inputRef]);

  return (
    <div>
      <Navigation />
      <div className="otp-container">
        <div>Enter the otp here...</div>
        <div className="input-container">
          {otpInputBox.map((otpValue, index) => (
            <input
              type="text"
              ref={(currentRef) => (inputRef.current[index] = currentRef)}
              key={index}
              value={otpValue}
              className="otp-input"
              onKeyDown={(e) => handleKeyPress(e, index)}
            />
          ))}
        </div>
        <button onClick={handleResend}>Resend</button>
      </div>
    </div>
  );
};

export default OTPComponent;
