import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { YOUTUBE_FETCH_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  const getVideoList = async () => {
    const response = await fetch(YOUTUBE_FETCH_URL);

    const json = await response.json();

    setVideos(json?.items);
  };

  useEffect(() => {
    getVideoList();
  }, []);

  if (!videos) return null;

  return (
    <div className="flex flex-wrap gap-7 p-8">
      <AdVideoCard video={videos[0]} />
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
