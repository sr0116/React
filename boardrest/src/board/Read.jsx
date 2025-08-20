import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function Read() {
  const [dto, setDto] = useState(null);
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    console.log(location)
    console.log(queryParams.toString()); // queryParams.toString() == bno=${bno} 둘다 같음
    const bno = queryParams.get('bno'); //  쿼리스트링에서 bno 값 저장해서
    axios.get(`/boardrest/read?${queryParams.toString()}`)
      .then((res) => {
        setDto(res.data);
      })
      .catch((e) => {
        console.log('error: ', e);
      });
  }, []);




  return (
    <div className=" m-3  ">
      <h1 className="text-2xl"> 게시판 상세 보기</h1>
      <div className="border">
        {dto && <h2>{dto.title}</h2>}
        {dto && <p>{dto.content}</p>}
        {dto && <p>{dto.writerEmail}</p>}
      </div>

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