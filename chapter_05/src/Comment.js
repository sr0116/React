import React from "react";
import Avatar from "./Avatar";
// import formatDate  from './utils'; // 따로 import 해줘도 가능한지 여러 개 할 때는 {}/ .js 생략 // 많이 사용하면 따로 만들고
// function  formatDate(date) { // 자바스크립트 선언이랑 똑같은
// //   // 선언만 해줘도 됨 소문자는 자바스크립트
//   // 이렇게도 정의 가능
//   return date.toLocaleDateString();
// }
import TextComment from "./TextComment";


export default function  Comment(props) { // 컴퍼넌트
  return (
    <div className="comment">
      <div className="user-info">
        <Avatar author={props.author} />
        <div className="user-info-name">
          {props.author.name}
        </div>
      </div>
      <div>
      <TextComment text = {props.text} date = {props.date} />
      </div>
    </div>
  );
}
