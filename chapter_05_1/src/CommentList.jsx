import React from 'react';
import Comment from "./Comment";

const comments = [
  {
    name: "고양이",
    comment: "꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다"
  },
  {
    name: "고양이",
    comment: "꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다"
  },
  {
    name: "고양이",
    comment: "꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다."
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((c) =>
      {
        return (
          <Comment name={c.name} comment={c.comment}/>
        );
      }
      )}
    </div>
  );
}

export default CommentList;