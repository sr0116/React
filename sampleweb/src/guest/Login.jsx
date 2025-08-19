import {useState} from "react";


export  default function Login ({userList}) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!id.trim() || !pw.trim()) return;

    const user = userList.find(u => u.id === id && u.pw === pw);
    if(user) {
      alert(`${user.id}님 환영합니다!`);
      setId("");
      setPw("");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  }

  // 이벤트 객체에 직접적으로 접근해야 되면 const
  const  handleChangeId = e => setId(e.target.value);
  const handleChangePw = e=> setPw(e.target.value);


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} onChange={handleChangeId} />
      <input type="password" value={pw} onChange={handleChangePw}/>
      <button type="submit"> 로그인 </button>
    </form>

  );
}