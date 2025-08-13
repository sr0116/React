import React from "react";
import {render} from "@testing-library/react";

function  Welcome(props) {
  return (
    <h1>안녕! {props.name}</h1> // 위의 props 매개 변수 이름 따라감 (대부분 props 사용함)
  );
}

export default Welcome;