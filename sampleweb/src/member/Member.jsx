
import {useState} from "react";
import MemberForm from "./MemberForm";
import MemberList from "./MemberList";

export default function Member() {
  const [list , setList] = useState([]);

  function handleAdd (member) {
    setList([...list, member]);
  }

  function handleRemove (target){
    setList(list.filter((_, i) => i !== target));
  }

  return (

    <div>
      <MemberForm onAdd={handleAdd} />
      <MemberList members= {list} onRemove={handleRemove} />
    </div>
  )
}