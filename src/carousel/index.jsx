import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";
import data from "./data.json";
import Navigation from "../navigation";
const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageRef = useRef(null);

  const handlePrev = () => {
    setImageIndex((prevState) => {
      if (prevState === 0) {
        return data.length - 1;
      }
      return prevState - 1;
    });
  };

  const handleNext = useCallback(() => {
    setImageIndex((prevState) => {
      if (prevState === data.length - 1) {
        return 0;
      }

      return prevState + 1;
    });
  }, []);

  useEffect(() => {
    imageRef.current = setInterval(handleNext, 1000);
    return () => {
      clearInterval(imageRef.current);
    };
  }, [handleNext]);

  return (
    <div>
      <Navigation />

      <div
        onMouseEnter={() => clearInterval(imageRef.current)}
        onMouseLeave={() => (imageRef.current = setInterval(handleNext, 1000))}
        className="carousel-container"
        id="main">
        <button className="left-btn" onClick={handlePrev}>
          {"<"}
        </button>
        <img
          className="image-container"
          src={data[imageIndex].download_url}
          id="image"
          key={data[imageIndex]}
        />
        <button className="right-btn" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
