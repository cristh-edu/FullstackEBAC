import React, { useRef, useState } from "react";
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
        src="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"
      />
    </div>
  );
}

export default Video;
