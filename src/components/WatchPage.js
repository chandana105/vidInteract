import React from "react";
import { useSearchParams } from "react-router-dom";
import VideoPlaying from "./VideoPlaying";
import CommentsSection from "./CommentsSection";
import SuggestionsSection from "./SuggestionsSection";

const WatchPage = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");

  return (
    <div className="grid grid-flow-col p-6">
      {/* vide playing */}
      <div className="flex flex-col col-span-8   ">
        <VideoPlaying videoId={videoId} />
        {/* comments */}
        <CommentsSection />
      </div>
      {/* suggestions of videos */}
      <SuggestionsSection />
    </div>
  );
};

export default WatchPage;
