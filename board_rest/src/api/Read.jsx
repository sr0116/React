import React, {useEffect, useState} from "react";
import axios from "axios"; // 서버에서 데이터만 가져올 때 사용하는 객체
import {useNavigate, useParams} from "react-router-dom";
// use location 은 주소창의 값을 가져올 때 사용하는 훅
import dayjs from "dayjs";


export default function Read() {
  const [dto, setDto] = useState(null
      // bno: '', title: '', content: '',

  );

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
    const {bno} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/boardrest/read/${bno}`)
      .then((res) => {
        setDto(res.data);
      })
      .catch((e) => {
        console.log('error: ', e);
      });
  }, []);
  
  // 삭제 이벤트
  const handleRemove =  () => {
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

  const handleRemove2 =  () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return; // 먼저 질문 해보기
    axios.post(`http://localhost:8080/boardrest/remove`, { bno })
      .then((res) => {
        const d = res.data;
        alert(d + " 삭제되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("삭제 중 오류가 발생했습니다.");
      });

  };
  return (
    <div className="m-6 bg-white rounded-3xl shadow-md p-6 max-w-4xl mx-auto border border-gray-500">
      {dto && (
        <div>
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Guestbook Read Page
          </h1>
          <div className="space-y-4">
            {/* bno */}
            <div>
              <label htmlFor="bno" className="block text-sm font-medium text-gray-600 mb-1">글 번호</label>
              <input
                type="text" id="bno" name="bno" value={dto.bno} readOnly className="w-full rounded-lg border
               border-gray-300 bg-gray-50 px-3 py-2 text-gray-700"
              />
            </div>

            {/* title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-1">
                제목
              </label>
              <input type="text" id="title" name="title" value={dto.title} readOnly
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700"/>
            </div>

            {/* content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-600 mb-1">내용</label>
              <textarea id="content" name="content" value={dto.content} readOnly
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 min-h-[120px]"/>
            </div>

            {/* writer */}
            <div>
              <label htmlFor="writer" className="block text-sm font-medium text-gray-600 mb-1">작성자</label>
              <input type="text" id="writer" name="writer" value={dto.writerName} readOnly
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700"/>
            </div>

            {/* regDate */}
            <div>
              <label htmlFor="regDate" className="block text-sm font-medium text-gray-600 mb-1">
                등록일
              </label>
              <input
                type="text" id="regDate" name="regDate" value={dayjs(dto.regDate).format('YYYY-MM-DD')} readOnly
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700"
              />
            </div>

            {/* modDate */}
            <div>
              <label htmlFor="modDate" className="block text-sm font-medium text-gray-600 mb-1">수정일</label>
              <input type="text" id="modDate" name="modDate" value={formatDate(dto.modDate)} readOnly
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700"/>
            </div>
          </div>
        </div>
      )}

      {/* 버튼 영역 */}
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={() => navigate(`/modify/${dto.bno}`)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 shadow-md transition">
          글 수정
        </button>
        <button
          onClick={handleRemove2}
          className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 shadow-md transition">
          글 삭제
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg px-4 py-2 shadow-md transition">
          메인 페이지
        </button>
      </div>

    </div>

  )
}