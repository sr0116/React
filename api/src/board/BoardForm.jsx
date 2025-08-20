import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function BoardForm() {
  const [data, setData] = useState(null);
  const [form, setForm] = useState({
    title: '',
    content: '',
    writerEmail: ''
  });

  const navigate = useNavigate();

  // 글 작성
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  // 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    axios.post(`/boardrest/register`, form)
      .then((res) => {
        setData(res.data);
        console.log("데이터 등록" , res.data);
        alert('글 등록 완료');
      })
      .catch((e) => {
        console.log('error: ', e);
      });
  };

  return (
    <div className="mx-auto ">
      <h1 >Board Register</h1>

      <form onSubmit={handleSubmit} className="mx-auto flex flex-col " >
        <input type="text" onChange={handleChange}
               value={form.title} name="title"
               placeholder="제목" className="text-align-center"/>
        <textarea onChange={handleChange} type="text" name="content" value={form.content}
                  placeholder="내용 입력"></textarea>
        <input type="text"  name="writerEmail" onChange={handleChange}
               value={form.writerEmail} placeholder="writerEmail"></input>
        <div className="mx-auto gap-3 flex  ">
          <button className="bg-blue-200 rounded-xl p-1" onClick={() => {
            navigate("/");
          }}> 글 등록</button>
        </div>
      </form>




    </div>
  )
}