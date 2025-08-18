// 메인에서 로그인하면 환영합니다.

import {useState} from "react";

export default function Main () {
  const userList = [
    {
    id: "a",
    pw: "a",
  },
    {
      id: "2",
      pw: "2",
    },
    {
      id: "3",
      pw: "3",
    },
  ];

  const [loginUser, setLoginUser] = useState(null);

  function handleLogin(user) {
    const loginUser1 = userList.filter(u => u.id === user.id && u.pw === user.pw);
    if(loginUser1 !== null || loginUser1.length !== 0) {
      setLoginUser(loginUser1);
    }
  }
  return (
    <div>


    </div>

  );
}