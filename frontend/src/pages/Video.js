import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) videoRef.current.pause();
    else videoRef.current.play();
    setPlay(!play);
  }

  return (
    <div className="video">
      <video
        className="video__player"
        onClick={handdleStart}
        ref={videoRef}
        loop
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
      />
      <VideoFooter />
    </div>
  );
}

export default Video;
