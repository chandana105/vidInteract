import React from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
