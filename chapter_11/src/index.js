import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NameForm from "./chapter_11/NameForm";
import RequestForm from "./chapter_11/RequestForm";
import FruitSelect from "./chapter_11/FruitSelect";
import Reservation from "./chapter_11/Reservation";
import Ex from "./chapter_11/Ex";
import UserForm from "./chapter_11/UserForm";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < UserForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
