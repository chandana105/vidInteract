import React from "react";

const LiveComment = ({ name, message }) => {
  return (
    <div className="flex  justify-center shadow-sm p-2 bg-white mb-1">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="thumbnail"
        className="rounded-full h-8 "
      />
      <div className="ml-2">
        <span className=" tex-lg text-slate-400 mr-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default LiveComment;
