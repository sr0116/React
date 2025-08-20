import React, {useState, useEffect, } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function BoardList(props) {
  const [data, setData] = useState(null);
const navigate = useNavigate();
  useEffect(() => {
    axios.get(`/boardrest/list`)
      .then((res) => {
        console.log("Content-Type : ", res.headers['content-type']);
        console.log("data : ", res.data);
        setData(res.data);
      })
      .catch((e) => {
        console.log('error: ', e);
      });
  }, []);

  return (
    <div className=" mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6"> Board List</h1>

      {/* 버튼*/}
      <div className="flex gap-4 m-2">
        <button
          onClick={() => navigate("/reply/24")}
          className="bg-blue-500 text-white rounded-xl p-2 ">
          페이지 이동 테스트 (댓글)
        </button>

        {/*글 작성*/}
        <button
          onClick={() => navigate("/board/register/")}
          className="bg-green-500 text-white rounded-xl p-2 ">
          글 작성
        </button>
      </div>

      {/* 리스트 */}
      <ul className="space-y-3">
        {Array.isArray(data?.list) &&
          data.list.map((d) => (
            <li
              key={d.bno}
              className="p-2 bg-white rounded-lg border border-gray-500 "
            >
              <a href="" onClick={() => navigate(`/board/${d.bno}`)} className="text-lg text-gray-800">{d.title}</a>
              <p className="text-sm text-gray-200"> 글번호: {d.bno}</p>
            </li>
          ))}
      </ul>

    </div>
  );
}