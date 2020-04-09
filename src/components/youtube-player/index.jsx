/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./styles.css";

function VideoPlayer(props) {
  return (
    <div className={`video-responsive ${props.className || ""}`}>
      <iframe
        src={props.src}
        frameBorder="0"
        allowFullScreen="allowfullscreen"
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
