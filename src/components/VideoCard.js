import React from "react";
import { formatViewCount, timeAgo } from "../utils/reusableFuntions";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch?v=${video.id}`}>
      <div className="cursor-pointer">
        <img
          src={video.snippet.thumbnails?.medium?.url}
          alt="thumbnail"
          className="rounded-lg w-96"
        />
        <div className="flex gap-3 w-96 pt-2 ">
          <img
            src={video.snippet.thumbnails?.default?.url}
            alt="thumbnail"
            className="rounded-full w-10 h-10 "
          />
          <div className="w-4/4">
            <h2>{video.snippet.title}</h2>
            <h3>{video.snippet.channelTitle}</h3>
            <div className="flex gap-2">
              <p>{formatViewCount(video.statistics.viewCount)}</p>
              <p>{timeAgo(video.snippet.publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
