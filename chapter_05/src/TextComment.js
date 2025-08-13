import React from "react";
function formatDate(date) {
  // 이렇게도 정의 가능
  return date.toLocaleDateString();
}

function TextComment (props) {
  return (
    <div>
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
export default TextComment;
