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
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function handleLogin(user) {
    const loginUser1 = userList.find (u  => u.id === user.id && u.pw === user.pw);

    if (user) {
      setLoginUser(user);
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }

    setId("");
    setPw("");
  }

  return (
    <div>
      {loginUser ? (
        <h2>{loginUser.id}님 로그인에 성공하셨습니다</h2>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>
      )}
    </div>
  );
}