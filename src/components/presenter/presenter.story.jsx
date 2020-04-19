import React from "react";
import Presenter from "./index";

import slides from "./slides.json";

export default {
  title: "Presenter",
};

export const Slideshow = () => (
  <div>
    <h3>Presenter</h3>
    <p>Creates a presentation of slides with efects</p>
    <Presenter slides={slides} />
  </div>
);
