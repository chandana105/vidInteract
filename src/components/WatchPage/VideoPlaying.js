import React, { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { formatViewCount, timeAgo } from "../../utils/reusableFuntions";
import useGetVideoDetails from "../../hooks/useGetVideoDetails";

const VideoPlaying = ({ videoId }) => {
  const { videoDetail } = useGetVideoDetails(videoId);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!videoDetail) return null;

  const description = videoDetail?.snippet?.description || "";
  const maxLines = 3;
  const lines = description.split("\n");
  const isLongDescription = lines.length > maxLines;
  const shortDescription =
    lines.slice(0, maxLines).join("\n") + (isLongDescription ? "..." : "");

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <iframe
        className="w-full aspect-video rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?si=KhIl3AScMnGVeXzV&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="pt-3">
        <h2 className="text-base md:text-xl font-bold">
          {videoDetail?.snippet?.title}
        </h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3 w-96 pt-2 items-center">
          <img
            src={"https://i.ytimg.com/vi/Ks-_Mh1QhMc/default.jpg"}
            alt="thumbnail"
            className="rounded-full w-8 h-8 md:w-10 md:h-10"
          />
          <div className="w-4/4">
            <h2 className="text-base font-semibold">
              {videoDetail?.snippet?.channelTitle}
            </h2>
          </div>
        </div>

        <div className="items-center justify-center flex">
          <div className="w-[80%] flex items-center justify-center">
            <button className="flex gap-2 rounded-l-3xl border-r-2 border-slate-100 p-2 px-5 bg-slate-200 text-base">
              <SlLike size={24} className="w-5 md:w-full" />
              {formatViewCount(videoDetail?.statistics?.likeCount)}
            </button>
            <button className="rounded-r-3xl p-2 px-5 bg-slate-200">
              <SlDislike size={24} className="w-5 md:w-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-black bg-opacity-20 w-full rounded-lg p-2 my-2">
        <p className="font-bold text-base">
          {formatViewCount(videoDetail?.statistics?.viewCount)} views{" "}
          {timeAgo(videoDetail?.snippet?.publishedAt)}
        </p>
        <div className="h-4"></div>
        <p className="text-sm md:text-base">
          {isExpanded ? description : shortDescription}
        </p>
        {isLongDescription && (
          <button onClick={toggleDescription} className="text-blue-500 mt-2">
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPlaying;
