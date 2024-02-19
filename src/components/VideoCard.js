import React from "react";
import { formatViewCount, timeAgo } from "../utils/reusableFuntions";

const VideoCard = ({ video }) => {
  return (
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
            <p>{formatViewCount(video.statistics.viewCount)} views</p>
            <p>{timeAgo(video.snippet.publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ video }) => {
  return (
    <div className=" border-2 border-gray-800">
      <VideoCard video={video} />
    </div>
  );
};

export default VideoCard;

// higher-order component is a FUNCTION that takes a component and returns a new component.

// why needed HOC :- sup[pose u need a small  thing over a video card , suppose with border or an advertisemnt like in youtube it shows
// hoc basically takes an excitign comp and modifies a little 