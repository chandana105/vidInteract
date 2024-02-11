import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import { timeAgo } from "../utils/reusableFuntions";

const CommentsSection = () => {
  const [comments, setComments] = useState(null);

  const getCommentsList = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=Ks-_Mh1QhMc&key=${YOUTUBE_API_KEY}`
      );
      // YOUTUBE ID

      const json = await response.json();

      console.log(json.items);
      setComments(json?.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCommentsList();
  }, []);

  if (!comments) return null;
  return (
    <div className="flex flex-col w-96">
      <h1>Comments count</h1>
      {/* map on coments */}

      {comments.map((comment) => (
        <div className="flex gap-3 py-4" key={comment.id}>
          <img
            src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
            alt="thumbnail"
            className="rounded-full w-10 h-10 "
          />
          <div className="">
            <div className="flex gap-2 items-center">
              <h2>
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
              </h2>
              <h6 className="text-sm text-slate-500">
                {timeAgo(comment.snippet.topLevelComment.snippet.publishedAt)}
              </h6>
            </div>
            <p className="w-[65rem] ">
              {comment.snippet.topLevelComment.snippet.textDisplay}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
