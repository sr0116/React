import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {content} from "../../tailwind.config";

export default function Read() {
  const [dto, setDto] = useState(null
      // bno: '', title: '', content: '',

  );
  const location = useLocation();
  // 바로 이동
  const navigate = useNavigate();

  // 데이터 날짜 가져오기
  const formatDate = dataString => {
    if(!dataString) return '';

    const data= new Date(dataString)
    // 유효 날짜인지 확인 ;
    if (isNaN(data.getTime())) return '';
// 시간 정보
    const year = data.getFullYear(); // 연도가 리턴
    const month = String(data.getMonth() + 1 ).padStart(2, '0') ; // 두자리 수이고 없으면 0으로 채워라
    const day = data.getDate();

    // 시간 정보(시간, 분  , 초)
    const hour = String(data.getHours()).padStart(2, '0');
    const minute = String(data.getMinutes()).padStart(2, '0');
    const second = String(data.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    // 자바스크립트에서 월은 0~11 을 리턴 -> 1 더해줘야 함
    // padstart 두자리로 변경하는데비어있는 곳은 두번째 파라미터
  };

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
      {dto &&
      <div>
        <h1 className="my-3">Guestbook Read Page</h1>
        <div className="form-group">
          <label htmlFor="bno">bno</label>
          <input type="text" className="form-control" id="bno" name="bno" placeholder="bno" value={dto.bno} readOnly/>
        </div>

        <div className="form-group">
          <label htmlFor="title">title</label>
          <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={dto.title}
                 readOnly/>
        </div>

        <div className="form-group">
          <label htmlFor="content">content</label>
          <textarea className="form-control" id="content" name="content" placeholder="Content"
                    readOnly>{dto.content}</textarea>
        </div>

        <div className="form-group">
          <label htmlFor="writer">writer</label>
          <input type="text" className="form-control" id="writer" name="writer" placeholder="Writer"
                 value={dto.writerName}
                 readOnly/>
        </div>

        <div className="form-group">
          <label htmlFor="regDate">regDate</label>
          <input type="text" className="form-control" id="regDate" name="regDate" placeholder="regDate"
                 value={formatDate(dto.regDate)}
                 readOnly/>
        </div>

        <div className="form-group my-4">
          <label htmlFor="modDate">modDate</label>

          <input type="text" className="form-control" id="modDate" name="modDate" placeholder="modDate"
                 value= {formatDate( dto.modDate)}
                 readOnly/>
        </div>
      </div>
      }
      <div className="gap-4 flex justify-end">
        <button onClick={() => {
          navigate(`/modify/${dto.bno}`);}}
                className="bg-blue-400 text-white rounded-lg p-2 "> 글 수정
        </button>
        <button onClick={() => {
          navigate("/");}}
                className="bg-gray-400 text-white rounded-lg p-2"> 메인 페이지
        </button>
      </div>
    </div>
  )
}