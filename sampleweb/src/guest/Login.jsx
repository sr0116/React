import {useState} from "react";


export  default function Login () {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function handleSubmit(e) {
    if(!id.trim() || !pw.trim()) return;
    e.preventDefault();
    setId("");
    setPw("");
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