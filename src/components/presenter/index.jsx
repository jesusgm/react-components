import React, { useEffect, useState } from "react";
import SimpleSlide from "./components/slides/simple/";

import "./styles.css";

const PREV_KEY = 37;
const NEXT_KEY = 39;

function Presenter(props) {
  const [slides] = useState(props.slides);
  const [currentPos, setCurrentPos] = useState(0);

  const next = () => {
    setCurrentPos(currentPos < slides.length - 1 ? currentPos + 1 : currentPos);
  };
  const prev = () => {
    setCurrentPos(currentPos > 0 ? currentPos - 1 : currentPos);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === NEXT_KEY) {
      next();
    } else if (event.keyCode === PREV_KEY) {
      prev();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
    // const slides = Array.from(document.querySelectorAll(".slide"));
    // slides.forEach((slide, index) => {
    //   slide.style.setProperty("--slide-rotation", `${index * 180}`);
    // });

    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [currentPos]);

  return (
    <div className="presenter-container">
      <div className="slider-changer prev" onClick={() => prev()} />
      {slides.map((slide, index) => {
        return (
          <SimpleSlide
            key={index}
            active={index === currentPos}
            viewed={index < currentPos}
            pending={index > currentPos}
            {...slide}
          >
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </SimpleSlide>
        );
      })}
      <div className="slider-changer next" onClick={() => next()} />
    </div>
  );
}

export default Presenter;
