import {useState} from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";


export default function Board() {
const [list, setList] = useState([]);

function handleAdd(board) {
  setList([...list, board]);
}

  function handleRemove(target) {
    setList(list.filter((_ , i) => i !== target));
  }
  return (
    <div>
      <PostForm onAdd={handleAdd}/>
      <PostList boards={list} onRemove={handleRemove} />
    </div>
  )
}

