// Web.jsx

import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
const text1 = [
  {
    id:1,
    name: 'JavaScript',
    content : "JavaScript is ..........",
  },
  {
    id:2,
    name: 'React',
    content : "React is ..........",
  },
  {
    id:3,
    name: 'java',
    content : "java is ..........",
  },
];

const article = [
  {
    id:1,
    title: 'Hi',
    content: 'JavaScript',
  },
  {
    id:2,
    title: 'Hello',
    content: 'Java',
  },
]; // 리스트로 만들때 가능

//함수형 컴포넌트
// 컴포넌트의 이름의 첫 글자는 대문자로 작성
function Web (props) {
  // Header
  // Nav
  //Article
  return (
    // 최상단 element는 하나여야 한다
    <div className="container">

      <Header title="WEB" />
       <Nav text1={text1} />
      <Article title='Hello' content='Java' />
      <Article title='Hi' content='JavaScript' />
    </div>
  );
}

// 다른 컴포넌트에서 사용할 수 있도록 하기 위한 선언
export default Web;
