import React from "react";
import { SlLike, SlDislike } from "react-icons/sl";

const VideoPlaying = ({ videoId }) => {
  return (
    <div className="">
      <iframe
        className="w-full aspect-video rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?si=KhIl3AScMnGVeXzV&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="pt-3">
        <h2>TITLE</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3 w-96 pt-2 ">
          <img
            src={"https://i.ytimg.com/vi/Ks-_Mh1QhMc/default.jpg"}
            alt="thumbnail"
            className="rounded-full w-10 h-10 "
          />
          <div className="w-4/4">
            <h2>channel title</h2>
            <p>channel subscriber count</p>
          </div>
        </div>

        <div className="  items-center justify-center flex">
          <div className="w-[80%] flex items-center justify-center">
            <button className="flex gap-2 rounded-l-3xl border-r-2 border-slate-100   p-2  px-5 bg-slate-200">
              <SlLike size={24} /> likecount
            </button>
            <button className="rounded-r-3xl   p-2  px-5 bg-slate-200">
              <SlDislike size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* descripton */}
      <div className="bg-black bg-opacity-50 w-full rounded-lg p-2 my-2">
        <p>Views and date</p>
        <p>Description</p>
      </div>
    </div>
  );
};

export default VideoPlaying;
