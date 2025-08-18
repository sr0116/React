import React from "react";
import {useState} from "react";


export default function Nav(props) {
  const text1 = props.text1;
  const [content, setContent] = useState('');
  // const {text1} = props; props 안에 text1이 있을때만 사용 가능
  // 1. 맵
  const handleShow = (content) => {
    setContent(content);
  };

  const textList = text1.map(t => (
    <li key={t.id}>
      <a href="/" onClick={(e) => {
        e.preventDefault();
        handleShow(t.content);
      }}>
        {t.name}
      </a>
    </li>
  ));



  // for문
  const lis = [];
  for (let i = 0; i < text1.length; i++) {
    let t = text1[i];
    lis.push( <li key={t.id}> <a href="/">{t.name}</a></li>);
  }

  return (
    <div>
      <ol>
        {/*{ props.text1.map(t =>*/}
        {/*  <li key={t.id}> <a href="/">{t.name}</a></li>*/}
        {/*)}*/}
        {/*{lis}*/}
        {textList}
        {content}

      </ol>

    </div>
  )
}