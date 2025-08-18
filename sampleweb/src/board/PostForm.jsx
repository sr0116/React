import { useState } from "react";

export default function PostForm({onAdd}) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleContent = (e) => {
    setContent(e.target.value);
  }

const handleSubmit = (e) => {
  e.preventDefault();
  if(!title.trim() || !content.trim()) return;
  onAdd({title, content});
  setTitle("");
  setContent(""); // 값 초기화
}


  return (
    <div>
      <h1>게시판</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={handleTitle}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={handleContent}
        />
        <button type="submit">제출</button>
      </form>

    </div>
  );
}
