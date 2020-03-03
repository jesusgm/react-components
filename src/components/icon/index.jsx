import React from "react";
import "./font-awesome/css/all.min.css";
import "./line-awesome/css/line-awesome.min.css";

function Icon({ font, name, brand, spin, size, pulse }) {
  return (
    <span
      className={`icon ${spin ? "fa-spin" : ""} ${pulse ? "fa-pulse" : ""} ${
        brand ? "fab" : "fa"
      } ${size ? `fa-${size}` : ""} ${font}-${name}`}
    />
  );
}

Icon.defaultProps = {
  font: "fa",
  brand: false,
  spin: false,
  pulse: false,
  size: ""
};

export default Icon;
