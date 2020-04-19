import React from "react";
import "./styles.css";

function SimpleSlide(props) {
  const { active, children, bgColor, color, viewed, pending } = props;

  const activeClass = active ? "active" : "";
  const viewedClass = viewed ? "viewed" : "";
  const pendingClass = pending ? "pending" : "";

  return (
    <div
      className={`slide simple-slide ${activeClass} ${viewedClass} ${pendingClass}`}
      style={{ backgroundColor: bgColor, color }}
    >
      {children}
    </div>
  );
}

export default SimpleSlide;
