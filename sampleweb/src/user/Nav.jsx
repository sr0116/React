import React from "react";
import {useState} from "react";



export default function Nav(props) {
  const text1 = props.text1;
  const [content, setContent] = useState('');
  // const {text1} = props; props 안에 text1이 있을때만 사용 가능


  const handleShow = (content) => {
    setContent(content);
  }; // -> 내가 한거


  // 1. 맵
  const textList = text1.map(t => (
    <li key={t.id}>
      <a href="/" onClick={(e) => {
        e.preventDefault();
        handleShow(t.content);
      }}>
        {t.title}
      </a>
    </li>
  ));


  // for문
  const lis = [];
  for (let i = 0; i < text1.length; i++) {
    let t = text1[i]; // id={t.id} 텍스트마다 아이디 설정해 주시 위해
    lis.push(<li key={t.id}><a id={t.id} href="/" onClick={(e) => {
      e.preventDefault();
      props.onChangeMode(Number(e.target.id)); //숫자로 변환 또는 나누기 1 해주면 자동 변환 시켜줌
    }}>{t.title}</a></li>);
  }

  return (
    <div>
      <ol>
        {/*{ props.text1.map(t =>*/}
        {/*  <li key={t.id}> <a href="/">{t.name}</a></li>*/}
        {/*)}*/}
        {lis}
        {/*{textList}*/}
        {/*{content}*/}

      </ol>

    </div>
  )
}