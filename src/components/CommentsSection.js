import React from "react";
import Comment from "./Comment";
import { commentsData } from "../utils/constants";

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
      <h1 className="text-lg font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsSection;

// in original youtube :- these comments are just 2 levels deep
// one is the base level , other is the rpeliies to it
// if u reply to one of the replies , it ll just come over in the same repleis section
// its not n level nestign :- it ll show just @repliedtousername comment.

// very imp interview ques :- t obuild n level nestign comments
// eg :- in redit app it is there  (it ll focus on UI, data structure, recursion knowledge)

// i ll use recusrion to loop in rpeleis

// these rpeleis are list of comments at the end of the day

// const CommentsList = ({ comments }) => {
//   return comments.map((comment) => (
//     <div>
//       <Comment comment={comment} key={comment.id} />
//       <div className="pl-5 border-2 border-l-black ml-5">

//         <Comment comment={comment} key={comment.id} />
//         <Comment comment={comment} key={comment.id} />
//         <Comment comment={comment} key={comment.id} />
//       </div>
//     </div>
//   ));
// };
