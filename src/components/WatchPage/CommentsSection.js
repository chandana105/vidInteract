import React from "react";
import Comment from "./Comment";
import { commentsData } from "../../utils/helper";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment comment={comment} />
      <div className="pl-5 border-2 border-l-black ml-5">
        <CommentsList comments={comment.replies} key={comment.replies.id} />
      </div>
    </div>
  ));
};

const CommentsSection = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-base md:text-lg font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsSection;
