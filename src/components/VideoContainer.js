import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_FETCH_URL } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  const getVideoList = async () => {
    const response = await fetch(YOUTUBE_FETCH_URL);

    const json = await response.json();

    console.log(json.items);
    setVideos(json?.items);
  };

  useEffect(() => {
    getVideoList();
  }, []);

  if (!videos) return null;

  return (
    <div className="flex flex-wrap gap-7 p-8">
      {videos.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
