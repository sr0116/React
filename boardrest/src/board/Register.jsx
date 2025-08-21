import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register() {
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

  // 글작성2
  const handleChange2 = (e) => {
    const {name, value} = e.target;
    // 기존 폼 데이터를 복제하고  값을 변경 후
    // setform을 통해 변경된 전체 데이터를 넣어준다
  setForm(prevFrom => ({
    ...prevFrom,
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
        alert(res.data + ' 번 글 등록이 완료되었습니다');
      })
      .catch((e) => {
        console.log('error: ', e);
      });
  };

  // 제출 2
  const handleSubmit2 = (e) => {
    e.preventDefault();// 리액트에서는 폼 action으로 이동하지 않고
    // react-dom-router를 통해서 페이지 이동
    if(!form.title || !form.content || !form.writerEmail ){
      alert('모든 내용을 입력해 주세요')
      return ;
    }

    axios.post(`/boardrest/register`, form) // 스트링에 있는 주소로
    .then((res) => {
      // 성공시
      setData(res.data);
      console.log("받은 데이터" ,res.data);
      alert(res.data + ' 번 글 등록이 완료되었습니다');
    })
      .catch((err) => {
        // 실패시
        console.log('error: ', err); 
      });
    navigate('/'); // 성공시 리스트로
  }

  return (
    <div className="mx-auto ">
      <h1>Board Register</h1>

      <form onSubmit={handleSubmit2}>
        <div className="mb-3 mt-3">
          <label htmlFor="title" className="form-label">제목:</label>
          <input
            type="text"
            className="form-control border border-dark"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange2}
            placeholder="제목 입력"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">내용:</label>
          <textarea
            className="form-control border border-dark"
            id="content"
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="내용 입력"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="writerEmail" className="form-label">이메일:</label>
          <input
            type="email"
            className="form-control border border-dark"
            id="writerEmail"
            name="writerEmail"
            value={form.writerEmail}
            onChange={handleChange}
            placeholder="이메일 입력"
          />
        </div>

        <button type="submit" className="btn btn-dark">글 등록</button>
      </form>
      {/* 이동 버튼 */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-300 hover:bg-gray-400 text-white font-semibold rounded-xl px-4 py-2">
           메인
        </button>
      </div>

    </div>
  )
}