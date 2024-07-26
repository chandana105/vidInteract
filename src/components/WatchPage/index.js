import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import VideoPlaying from "./VideoPlaying";
import CommentsSection from "./CommentsSection";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../store/appSlice";
import LiveChat from "./LiveChat";
import { clearChat } from "../../store/chatSlice";

const WatchPage = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(clearChat());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-12 p-6">
      <div className="flex flex-col col-span-12 md:col-span-9    ">
        <VideoPlaying videoId={videoId} />
        <CommentsSection />
      </div>

      <div className="col-span-12 md:col-span-3 ml-1 mt-10 md:mt-0">
        <h1 className="col-span-12  md:hidden text-base font-bold  m-4">
          Live Chat
        </h1>
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
