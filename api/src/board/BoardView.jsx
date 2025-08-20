import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function BoardView() {
  const [data, setData] = useState(null);
  const {bno} = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`/boardrest/read?bno=${bno}`)
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
    <div className=" m-3  ">
      <h1 className="text-2xl"> 게시판 상세 보기</h1>
      <div className="border">
        {data && <h2>{data.title}</h2>}
        {data && <p>{data.content}</p>}
        {data && <p>{data.writerEmail}</p>}
        {data && <p>{data.writerName}</p>}
        {data && <p>{data.regDate}</p>}
        {data && <p>{data.modDate}</p>}
        {data && <p>{data.replyCount}</p>}
      </div>

      <button onClick={() => {
        navigate("/");
      }} className="bg-blue-500 text-white rounded-lg "
              onClick={() => {
                navigate("/");
              }}>글 수정
      </button>
      <button onClick={() => {
        navigate("/");
      }} className="bg-red-500 text-white rounded-lg "
              onClick={(e) => {
                e.preventDefault();
                setData(null);

              }}>글 삭제
      </button>
      <button onClick={() => {
        navigate("/");
      }} className="bg-green-500 text-white rounded-lg "
              onClick={() => {
                navigate("/");
              }}> 메인 페이지
      </button>
    </div>
  )
}