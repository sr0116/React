import React from "react";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false
    }; // 변수 값이 여러 개일 때 컴마로 구분
  }
}