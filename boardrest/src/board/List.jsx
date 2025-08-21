import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function List() {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/boardrest/list`)
      .then(res => setList(res.data))
      .catch(err => console.log("err", err));
  }, []);

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-center">게시판 목록</h2>
      <table className=" table table-hover w-full  border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-center">글 번호</th>
          <th className="border border-gray-300 px-4 py-2 text-center">제목</th>
          <th className="border border-gray-300 px-4 py-2 text-center">작성자</th>
        </tr>
        </thead>
        <tbody>
        {Array.isArray(list?.list) && list.list.map((dto) => (
          <tr
            key={dto.bno}
            className="hover:bg-gray-50 cursor-pointer border border-gray-300 px-4 py-2"
            onClick={() => navigate(`/read?bno=${dto.bno}`)}
          >
            <td className="border border-gray-300 px-4 py-2 text-center">{dto.bno}</td>
            <td>
              {dto.title}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">{dto.writerName}</td>
          </tr>
        ))}
        </tbody>
        {/*<tfoot>*/}
        {/*<tr>*/}
        {/*  <td colSpan="3" className="text-center">*/}
        {/*    <button type="button"*/}
        {/*            onClick={() => navigate("/register")}*/}
        {/*            className="bg-gray-300 hover:bg-gray-400 text-white font-semibold rounded-xl px-4 py-2">*/}
        {/*      글 작성*/}
        {/*    </button>*/}
        {/*  </td>*/}
        {/*</tr>*/}
        {/*</tfoot>*/}
      </table>

      {/* 글 작성 버튼 */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigate("/register")}
          className="bg-gray-300 hover:bg-gray-400 text-white font-semibold rounded-xl px-4 py-2">
          글 작성
        </button>
      </div>
    </div>
  );
}
