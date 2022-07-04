import Button from "../common/Button";
import React, { useRef } from "react";
function VideoPlayer() {
  const ref = useRef(null);

  const start = () => {
    ref.current.play();
  };

  const stop = () => {
    ref.current.pause();
  };
  const skipSecond = () => {
    ref.current.currentTime += 30;
  };
  return (
    <div>
      <video ref={ref} data-testid="video-container" width="400" controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button onClick={start}>Play</Button>
        <Button onClick={stop}>PAUSE</Button>
        <Button onClick={skipSecond}>SKIP 30 SECONDS</Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
