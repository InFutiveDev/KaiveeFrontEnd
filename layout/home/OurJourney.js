import React from "react";
import YouTube from "react-youtube";

const OurJourney = () => {
  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      modestbranding: 0,
      showinfo: 0,
    },
  };

  const onReady = (event) => {
    event.target.playVideo(); // Restart the video when it ends
    event.target.mute(); // Mute the video
  };

  const onEnd = (event) => {
    event.target.playVideo(); // Restart the video when it ends
  };

  return (
    <div className="ourJourney-video">
      <YouTube
        videoId="py2s6ew09op"
        opts={opts}
        onReady={onReady}
        onEnd={onEnd}
      />
    </div>
  );
};

export default OurJourney;
