import {useState} from "react";

export default function MemberForm({onAdd}){
  const [name, setName] = useState("");

  const handleName = (e =>
  setName(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name.trim() ) return;
    onAdd({name});
   setName("")
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type= "text"
      value={name}
      onChange={handleName}/>
      <button type="submit"> 이름 입력</button>
      
    </form>
  )
}
