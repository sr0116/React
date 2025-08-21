import React, {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function Modify() {
  const navigate = useNavigate();
  const [dto, setDto] = useState(null);
  const {bno} = useParams();
  const initDto = useRef(null);


  // 날짜 포맷 함수
  const formatDate = (dataString) => {
    if (!dataString) return '';
    const data = new Date(dataString);
    if (isNaN(data.getTime())) return '';

    const year = data.getFullYear();
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const day = String(data.getDate()).padStart(2, '0');
    const hour = String(data.getHours()).padStart(2, '0');
    const minute = String(data.getMinutes()).padStart(2, '0');
    const second = String(data.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/boardrest/read/${bno}`)
      .then( res => {
        setDto(res.data);
        // Reset버튼을 위한 initDto
        initDto.current = JSON.parse(JSON.stringify(res.data));
      })
      .catch((e) => {
        console.log("에러! : ", e);
      });
  }, [bno]);


  // 글수정
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/boardrest/modify`, dto)
      .then((res) => {
        alert(res.data + ' 번 글 수정이 완료되었습니다');
        navigate('/');
      })
      .catch((res) => console.log('error: ', res));
  };

  // 입력값 변경
  const handleChange2 = (e) => {
    const {name, value} = e.target;
    setDto(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 초기화
  const handleReset = () => {
    setDto({
      bno: dto.bno,
      title: "",
      content: "",
      writerName: dto.writerName,
      regDate: dto.regDate,
      modDate: dto.modDate
    });
  };
  // 삭제

  const handleRemove = async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return; // 먼저 질문 해보기
    axios.delete(`http://localhost:8080/boardrest/${bno}`)
      .then(() => {
        alert("삭제되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("삭제 중 오류가 발생했습니다.");
      });
  };

  return (
    <div className="m-6 bg-white rounded-2xl shadow-md p-6 max-w-4xl mx-auto border border-gray-500">
      <form onSubmit={handleSubmit} className="space-y-5">
        {dto && (
          <div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Board Modify
            </h1>

            {/* bno */}
            <div>
              <label htmlFor="bno" className="block text-sm font-medium text-gray-600 mb-1">
                글 번호
              </label>
              <input
                type="text"
                id="bno"
                name="bno"
                value={dto.bno}
                readOnly
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700"
              />
            </div>

            {/* title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-1">
                제목
              </label>
              <input
                onChange={handleChange2}
                type="text"
                id="title"
                name="title"
                value={dto.title}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-600 mb-1">
                내용
              </label>
              <textarea
                onChange={handleChange2}
                id="content"
                name="content"
                value={dto.content}
                rows="5"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* writer */}
            <div>
              <label htmlFor="writer" className="block text-sm font-medium text-gray-600 mb-1">
                작성자
              </label>
              <input
                type="text"
                id="writer"
                name="writer"
                value={dto.writerName}
                readOnly
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700"
              />
            </div>

            {/* regDate */}
            <div>
              <label htmlFor="regDate" className="block text-sm font-medium text-gray-600 mb-1">
                등록일
              </label>
              <input
                type="text"
                id="regDate"
                name="regDate"
                value={formatDate(dto.regDate)}
                readOnly
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700"
              />
            </div>

            {/* modDate */}
            <div>
              <label htmlFor="modDate" className="block text-sm font-medium text-gray-600 mb-1">
                수정일
              </label>
              <input
                type="text"
                id="modDate"
                name="modDate"
                value={formatDate(dto.modDate)}
                readOnly
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700"
              />
            </div>
          </div>
        )}

        {/* 버튼 영역 */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"   className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg px-5 py-2 shadow-md transition"
            onClick={() => {
              if (initDto.current) {
                setDto(JSON.parse(JSON.stringify(initDto.current))); // 새 객체로 복원
              }
            }}>수정 전</button>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-5 py-2 shadow-md transition"
          >
            글 수정
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg px-5 py-2 shadow-md transition"
          >
            메인
          </button>

          <button
            type="button"
            onClick={handleReset} className="bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg px-5 py-2 shadow-md transition">
            초기화
          </button>
          <button
            onClick={handleRemove}
            className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 shadow-md transition">
            글 삭제
          </button>
        </div>
      </form>
    </div>

  );
}
