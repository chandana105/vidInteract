import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import useGetVideoList from "../../hooks/useGetVideoList";

const VideoContainer = () => {
  const { videos } = useGetVideoList();

  if (!videos) return null;

  return (
    <div className="flex flex-wrap gap-7 p-8 pt-2 mt-5">
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
