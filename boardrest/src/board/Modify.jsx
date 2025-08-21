import React, {useEffect, useState} from "react";
import {useNavigate, useLocation, useParams} from "react-router-dom";
import axios from "axios";

export default function Modify() {
  const navigate = useNavigate();
  const [dto, setDto] = useState(null);
  const {bno} = useParams();
  let initDto = null;

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
    axios.get(`/boardrest/read?${bno}`)
      .then( res => {
        setDto(res.data);
        initDto = res.data;
      })
      .catch((e) => console.log('error: ', e));
  }, [dto]);

  // 글수정
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/boardrest/modify?bno=${dto.bno}`, dto)
      .then((res) => {
        setDto(res.data);
        alert(res.data + ' 번 글 수정이 완료되었습니다');
        navigate('/');
      })
      .catch((e) => console.log('error: ', e));
  };

  // 입력값 변경
  const handleChange2 = (e) => {
    const {name, value} = e.target;
    setDto(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="mx-auto ">
      <form onSubmit={handleSubmit}>
        {dto &&
          <div>
            <h1 className="my-3">Board Modify</h1>

            <div className="form-group">
              <label htmlFor="bno">bno</label>
              <input type="text" className="form-control" id="bno" name="bno" value={dto.bno} readOnly/>
            </div>

            <div className="form-group">
              <label htmlFor="title">title</label>
              <input
                onChange={handleChange2}
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={dto.title}
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">content</label>
              <textarea
                onChange={handleChange2}
                className="form-control"
                id="content"
                name="content"
                value={dto.content }
              />
            </div>

            <div className="form-group">
              <label htmlFor="writer">writer</label>
              <input type="text" className="form-control" id="writer" name="writer"
                     value={dto.writerName} readOnly/>
            </div>

            <div className="form-group">
              <label htmlFor="regDate">regDate</label>
              <input type="text" className="form-control" id="regDate" name="regDate"
                     value={formatDate(dto.regDate)} readOnly/>
            </div>

            <div className="form-group my-4">
              <label htmlFor="modDate">modDate</label>
              <input type="text" className="form-control" id="modDate" name="modDate"
                     value={formatDate(dto.modDate)} readOnly/>
            </div>
          </div>
        }

        {/* 버튼 영역 */}
        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={() => { setDto(initDto);}} className="bg-gray-300 hover:bg-gray-400 text-white font-semibold rounded-xl px-4 py-2">
           다시 작성
          </button>
          <button
            type="submit"
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-xl px-4 py-2">
            글 수정
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-white font-semibold rounded-xl px-4 py-2">
            메인
          </button>
        </div>
      </form>
    </div>
  );
}
