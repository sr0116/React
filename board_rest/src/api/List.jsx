import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function List() {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/boardrest/list`)
      .then(res => setList(res.data))
      .catch(err => console.log("err", err));
  }, []);

  return (
    <div className="m-6 bg-white rounded-2xl shadow-md p-6 max-w-4xl mx-auto border border-gray-500">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        📋 게시판 목록
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
            <th className="px-6 py-3 text-center border-b">글 번호</th>
            <th className="px-6 py-3 text-left border-b">제목</th>
            <th className="px-6 py-3 text-center border-b">작성자</th>
          </tr>
          </thead>
          <tbody className="text-gray-700">
          {Array.isArray(list?.list) &&
            list.list.map((dto, idx) => (
              <tr
                key={dto.bno}
                className="hover:bg-blue-50 transition-colors cursor-pointer"
                onClick={() => navigate(`/read/${dto.bno}`)}
              >
                <td className="px-6 py-3 text-center border-b">{dto.bno}</td>
                <td className="px-6 py-3 border-b font-medium">{dto.title}</td>
                <td className="px-6 py-3 text-center border-b">{dto.writerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 글 작성 버튼 */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-xl px-5 py-2 shadow-md transition-all">
          글 작성
        </button>
      </div>
    </div>
  );
}
