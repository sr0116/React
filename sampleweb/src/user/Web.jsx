// Web.jsx
import {useState} from "react";
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Create from "./Create";
import Update from "./Update";


// 지금 사용 안 함
const article = [
  {
    id: 1,
    title: 'Hi',
    content: 'JavaScript',
  },
  {
    id: 2,
    title: 'Hello',
    content: 'Java',
  },
]; // 리스트로 만들때 가능

//함수형 컴포넌트
// 컴포넌트의 이름의 첫 글자는 대문자로 작성
function Web(props) {
  // Header
  // Nav
  //Article
  // 글을 읽거나 수정할 때 id
  const [id, setId] = useState(0); // id가 숫자여도 문자열 (자료형마다 다름)
  const [mode, setMode] = useState('Welcome');
  let content = null; // Article 컴포넌트 내용 저장 변수
  const [nextId, setNextId] = useState(4);
  const [text1, setText1] = useState([
    {id: 1, title: 'JavaScript', content: "JavaScript is ..........",},
    {id: 2, title: 'React', content: "React is ..........",},
    {id: 3, title: 'java', content: "java is ..........",},]);
  if (mode === 'Welcome') {
    content = <Article title='Hi' content='JavaScript'/>;
  } else if (mode === 'Read') {
    // 클릭한 내용 출력
    // 아이디 일치하는걸로 보이게
    for (let i = 0; i < text1.length; i++) {
      if (text1[i].id === id) {
        // content = <Article title={text1[i].title} content={text1[i].content}  />;
        content = <Article {...text1[i]} />; // 모든 요소 갖고 옴
      }
    }
  } else if (mode === 'Create') {
    content = <Create onCreate={(_title, _content) => {
      const newText1 = {id: nextId, title: _title, content: _content};
      const newText2 = [...text1];
      newText2.push(newText1);
      setText1((newText2));
      setNextId(nextId + 1);
      setId(newText1.id);
      setMode('Read');
    }}/>
  }
  else if (mode === 'Update') {
    for (let i = 0; i < text1.length; i++) {
      if (text1[i].id === id) {
        content = (
          <Update
            {...text1[i]}
            onUpdate={(_title, _content) => {
              const updateText1 = { id: id, title: _title, content: _content };
              const updateText2 = [...text1];
              for (let j = 0; j < updateText2.length; j++) {
                if (updateText2[j].id === id) {
                  updateText2[j] = updateText1;
                  break;
                }
              }
              setText1(updateText2);
              setMode('Read');
            }}
          />
        );
        break;
      }
    }
  }



  return (
    // 최상단 element는 하나여야 한다
    <div className="container">

      <Header title="WEB" onChangeMode={() => {
        setMode('Welcome');
      }}/>

      <Nav text1={text1} onChangeMode={(_id) => {
        setMode('Read'); // id nav에서 파라미터 전달되는 값e.target.id
        setId(_id);
      }}/>
      {/*<Article title='Hello' content='Java' />*/}
      {/*<Article title='Hi' content='JavaScript' />*/}
      {content }

      <ul style={{ listStyle: "none" }}>
        <li>
          <a  href="/create" onClick={(e) => {
            e.preventDefault();
            setMode('Create')
          }}>
            Create</a>
        </li>
        {mode ==='Read' && <li><a href="/" ><button onClick={(e) => {
          e.preventDefault();
          setMode('Update')
        }}>Update</button></a></li>}

        {mode ==='Read' && <li><a href="/" > <button onClick={(e) => {
          e.preventDefault();
          const newText = [];
          for (let i = 0; i< text1.length; i++) {
            if (text1[i].id !== id) {
              newText.push(text1[i]);
            }
          }
          setText1(newText);
          setMode('Welcome');
        }}> Delete</button></a></li>}
      </ul>
    </div>
  );
}

// 다른 컴포넌트에서 사용할 수 있도록 하기 위한 선언
export default Web;
