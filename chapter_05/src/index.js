import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';
import Welcome1 from './Welcome1';
import Comment from "./Comment";
import Users from './UserInfo';
import Avatar from "./Avatar";
import avatar from "./Avatar";

// json 이랑 비슷
const author = {
  avatarUrl: "../image/avatar.jpg",
  name: "chobo",
  text: "Hello",
  date: new Date("2025-08-07")
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Comment author={author} text="영화" date={author.date} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
