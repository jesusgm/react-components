import React from "react";
import VideoPlayer from "./index";

export default { title: "VideoPlayer" };

export const YouTube = () => (
  <div>
    <h3>YouTube</h3>
    <VideoPlayer src="" />
  </div>
);

export const LineAwesome = () => (
  <div>
    <h3>Vimeo</h3>
    <VideoPlayer src="https://vimeo.com/155035278" />
  </div>
);
