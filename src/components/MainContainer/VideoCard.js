import React from "react";
import { formatViewCount, timeAgo } from "../../utils/reusableFuntions";

const VideoCard = ({ video }) => {
  return (
    <div className="cursor-pointer relative">
      <img
        src={video.snippet.thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-lg w-[100%] md:w-96"
      />
      <div className="flex gap-2 md:gap-3 w-[100%] md:w-96 pt-2 ">
        <img
          src={video.snippet.thumbnails?.default?.url}
          alt="thumbnail"
          className="rounded-full w-7 h-7 md:w-10 md:h-10 "
        />
        <div className="w-4/4">
          <h2 className="text-sm md:text-base">{video.snippet.title}</h2>
          <h3 className="text-sm md:text-base">{video.snippet.channelTitle}</h3>
          <div className="flex gap-2">
            <p className="text-sm md:text-base">{formatViewCount(video.statistics.viewCount)} views</p>
            <p className="text-sm md:text-base">{timeAgo(video.snippet.publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ video }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg z-10">
        <p className="text-white font-bold text-xl">Advertisement</p>
      </div>
      <VideoCard video={video} />
    </div>
  );
};

export default VideoCard;
