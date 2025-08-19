import React from "react";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Sample from "./Sample";

export default function MainPage () {
  return (
    <Wrapper>
      <Title >
        안녕, 리액트
        <h1 className="text-3xl font-bold  text-white">
           Tailwind 설치 확인!
        </h1>
      </Title>
    </Wrapper>
  )
} ;