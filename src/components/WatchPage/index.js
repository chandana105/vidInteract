import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import VideoPlaying from "./VideoPlaying";
import CommentsSection from "./CommentsSection";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../store/appSlice";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="grid grid-cols-12 p-6">
      <div className="flex flex-col col-span-9    ">
        <VideoPlaying videoId={videoId} />
        <CommentsSection />
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchPage;
