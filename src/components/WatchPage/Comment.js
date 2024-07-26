import React from "react";
import { CgProfile } from "react-icons/cg";
import { timeAgo } from "../../utils/reusableFuntions";

const Comment = ({ comment }) => {
  return (
    <div className="flex gap-3 py-4" key={comment.id}>
      <CgProfile size={24} className="rounded-full  " />
      <div className="">
        <div className="flex gap-2 items-center">
          <h2 className="text-base">{comment.username}</h2>
          <h6 className="text-sm text-slate-500 ">
            {timeAgo("2024-02-16T10:11:20Z")}
          </h6>
        </div>
        <p className=" text-sm">{comment.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
