import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WelcomeDialog from "./chapter_13/WelcomeDialog";
import WelcomeDialog2 from "./chapter_13/WelcomeDialog2";
import SignUpDialog from "./chapter_13/SignUpDialog";
import ProfileCard from "./chapter_13/ProfileCard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
