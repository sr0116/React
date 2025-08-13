import React from "react";

function UserGreeting() {
  return <h1>다시 오셨군요!!</h1>;
}

function GuestGreeting() {
  return <h1>회원가입을 해주세요!!</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

export default Greeting;
