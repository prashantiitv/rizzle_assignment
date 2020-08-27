import React, { useRef, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import "./Video.css";

function Video({
  title,
  connector,
  name,
  coverImageUrl,
  originalUrl,
  smallUrl,
  encodeUrl,
  episodeNum,
  viewCount,
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <SwipeableViews enableMouseEvents>
      <div className="video">
        <video
          className="videoPlayer"
          loop
          onClick={onVideoPress}
          ref={videoRef}
          src={originalUrl}
        />
      </div>
      <div className="video">
        <h1 className="name">{name}</h1>
      </div>
    </SwipeableViews>
  );
}

export default Video;
