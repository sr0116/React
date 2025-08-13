import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar isLoggedIn={isLoggedIn}
               onClickLogin={onClickLogin}
               onClickLogout={onClickLogout}/>
      <div style={{padding: 16}}> 로그인 연습 중</div>
    </div>
  );
}
export  default LandingPage;