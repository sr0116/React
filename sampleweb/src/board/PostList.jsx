import {useState} from "react";

// props 로 사용하면 너무 길어짐 props.boards ...
export default function PostList({boards, onRemove}) {
const [clicked, setClicked] = useState(null);

  function handleClicked  (i)  {
  setClicked(i);
}

function handleRemove(i) {
  onRemove(i);
}

  return (
    <ul>
      {boards && boards.map((b, i) =>
        <li key={i}>
          <p onClick={ _ => handleClicked(i)}>{b.title}</p>
          {clicked === i && <p>{b.content}</p>}
          <button onClick={() => handleRemove(i)}> 삭제 </button>
      </li> // map 컨텐츠 내용만
      )}
    </ul>

  )
}