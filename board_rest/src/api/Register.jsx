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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   console.log(form);
  //
  //   axios.post(`http://localhost:8080/boardrest/register`, form)
  //     .then((res) => {
  //       setData(res.data);
  //       console.log("데이터 등록" , res.data);
  //       alert(res.data + ' 번 글 등록이 완료되었습니다');
  //     })
  //     .catch((e) => {
  //       console.log('error: ', e);
  //     });
  // };

  // 제출 2
  const handleSubmit2 = (e) => {
    e.preventDefault();// 리액트에서는 폼 action으로 이동하지 않고
    // react-dom-router를 통해서 페이지 이동
    if(!form.title || !form.content || !form.writerEmail ){
      alert('모든 내용을 입력해 주세요')
      return ;
    }
    axios.post("http://localhost:8080/boardrest/register", form, {
      headers: { "Content-Type": "application/json" }
    }) // 스트링에 있는 주소로
    .then((res) => {
      // 성공시
      setData(res.data);
      console.log("받은 데이터" ,res.data);
      alert(res.data + ' 번 글 등록이 완료되었습니다');
      navigate('/'); // 성공시 리스트로
    })
      .catch((err) => {
        // 실패시
        console.log('error: ', err); 
      });

  }



  return (
    <div className="m-6 bg-white rounded-2xl shadow-md p-6 max-w-4xl mx-auto border border-gray-500">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Board Register
      </h1>

      <form onSubmit={handleSubmit2} className="space-y-5">
        {/* 제목 */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange2}
            placeholder="제목 입력"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* 내용 */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            내용
          </label>
          <textarea
            id="content"
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="내용 입력"
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>

        {/* 이메일 */}
        <div>
          <label htmlFor="writerEmail" className="block text-sm font-medium text-gray-700 mb-1">
            이메일
          </label>
          <input
            type="email"
            id="writerEmail"
            name="writerEmail"
            value={form.writerEmail}
            onChange={handleChange}
            placeholder="이메일 입력"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* 등록 버튼 */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-5 py-2 shadow-md transition"
          >
            글 등록
          </button>
        </div>
      </form>

      {/* 메인 버튼 */}
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg px-5 py-2 shadow-md transition"
        >
          메인
        </button>
      </div>
    </div>

  )
}