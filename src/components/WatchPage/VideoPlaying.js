import React from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { formatViewCount, timeAgo } from "../../utils/reusableFuntions";
import useGetVideoDetails from "../../hooks/useGetVideoDetails";

const VideoPlaying = ({ videoId }) => {
  const { videoDetail } = useGetVideoDetails(videoId);

  if (!videoDetail) return null;

  return (
    <div className="">
      <iframe
        className="w-full aspect-video rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?si=KhIl3AScMnGVeXzV&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="pt-3">
        <h2 className="text-xl font-bold">{videoDetail?.snippet?.title}</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3 w-96 pt-2 ">
          <img
            src={"https://i.ytimg.com/vi/Ks-_Mh1QhMc/default.jpg"}
            alt="thumbnail"
            className="rounded-full w-10 h-10 "
          />
          <div className="w-4/4">
            <h2 className="text-base font-semibold">
              {videoDetail?.snippet?.channelTitle}
            </h2>
            <p>channel subscriber count</p>
          </div>
        </div>

        <div className="items-center justify-center flex">
          <div className="w-[80%] flex items-center justify-center">
            <button className="flex gap-2 rounded-l-3xl border-r-2 border-slate-100   p-2  px-5 bg-slate-200">
              <SlLike size={24} />{" "}
              {formatViewCount(videoDetail?.statistics?.likeCount)}
            </button>
            <button className="rounded-r-3xl   p-2  px-5 bg-slate-200">
              <SlDislike size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* descripton */}
      <div className="bg-black bg-opacity-20 w-full rounded-lg p-2 my-2">
        <p>
          {formatViewCount(videoDetail?.statistics?.viewCount)} views{" "}
          {timeAgo(videoDetail?.snippet?.publishedAt)}
        </p>
        <p>{videoDetail?.snippet?.description}</p>
      </div>
    </div>
  );
};

export default VideoPlaying;
