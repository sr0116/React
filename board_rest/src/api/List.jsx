import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function List() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [pageList, setPageList] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // URL에서 검색 조건 읽어오기
  const [type, setType] = useState(query.get("type") || "");
  const [keyword, setKeyword] = useState(query.get("keyword") || "");
  const currentPage = parseInt(query.get("page") || "1", 10);

  // 리스트 불러오기
  useEffect(() => {
    const type = query.get("type") || "";
    const keyword = query.get("keyword") || "";
    const page = parseInt(query.get("page") || "1", 10);

    axios
      .get("http://localhost:8080/boardrest/list", {
        params: { page, size, type, keyword },
      })
      .then((res) => {
        const data = res.data;
        setList(data.list);
        setPage(data.page);
        setStart(data.start);
        setEnd(data.end);
        setPrev(data.prev);
        setNext(data.next);
        setTotalPage(data.totalPage);
        setPageList(data.pageList);
      })
      .catch((err) => console.log("err", err));
  }, [size, location.search]); // URL 쿼리 바뀔 때마다 다시 실행

  // 검색 실행 → URL 바꾸기
  const handleSearch = (e) => {
    e.preventDefault();
    const query = [];
    if (type) query.push(`type=${type}`);
    if (keyword) query.push(`keyword=${keyword}`);
    query.push(`page=1`);
    navigate(`?${query.join("&")}`);
  };

  // 검색 초기화
  const handleClear = () => {
    setType("");
    setKeyword("");
    navigate(""); // 쿼리스트링 제거
  };

  return (
    <div className="m-6 bg-white rounded-2xl shadow-md p-6 max-w-4xl mx-auto border border-gray-500">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        📋 게시판 목록
      </h2>

      {/* 검색 창 */}
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 mb-4 justify-center"
      >
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="form-select border rounded-lg px-2 py-1"
        >
          <option value="">------------</option>
          <option value="t">제목</option>
          <option value="c">내용</option>
          <option value="w">작성자</option>
          <option value="tc">제목 + 내용</option>
          <option value="tcw">제목 + 내용 + 작성자</option>
        </select>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="form-control border px-3 py-1 rounded-lg w-1/2"
          placeholder="검색어 입력"
        />
        <button
          type="submit"
          className="btn btn-outline-secondary border px-3 py-1 rounded-lg"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="btn btn-outline-secondary border px-3 py-1 rounded-lg"
        >
          Clear
        </button>
      </form>

      {/* 게시글 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden table-fixed">
          <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
            <th className="w-20 px-6 py-3 text-center border-b">글 번호</th>
            <th className="w-[300px] px-6 py-3 text-left border-b">제목</th>
            <th className="w-32 px-6 py-3 text-center border-b">작성자</th>
            <th className="w-24 px-6 py-3 text-center border-b">댓글 수</th>
          </tr>
          </thead>
          <tbody className="text-gray-700">
          {Array.isArray(list) && list.length > 0 ? (
            list.map((dto) => (
              <tr
                key={dto.bno}
                className="hover:bg-blue-50 transition-colors cursor-pointer"
                onClick={() => {
                  const query = [];
                  if (type) query.push(`type=${type}`);
                  if (keyword) query.push(`keyword=${keyword}`);
                  navigate(`/read/${dto.bno}`);
                }}
              >
                <td className="px-6 py-3 text-center border-b">{dto.bno}</td>
                <td className="px-6 py-3 border-b font-medium truncate overflow-hidden whitespace-nowrap">
                  {dto.title}
                </td>
                <td className="px-6 py-3 text-center border-b">{dto.writerName}</td>
                <td className="px-6 py-3 text-center border-b ">
                 <p className="text-red-700">{dto.replyCount > 0 ? dto.replyCount : 0}</p>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                데이터가 없습니다.
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 처리 */}
      <div className="mt-6 flex justify-center items-center gap-2">
        {prev && (
          <button
            onClick={() => {
              navigate(`?type=${type}&keyword=${keyword}&page=${start - 1}`);
            }}
            className="px-3 py-1 bg-gray-200 rounded-lg"
          >
            이전
          </button>
        )}
        {Array.isArray(pageList) &&
          pageList.map((num) => (
            <button
              key={num}
              onClick={() => {
                navigate(`?type=${type}&keyword=${keyword}&page=${num}`);
              }}
              className={`px-3 py-1 rounded-lg ${
                currentPage === num ? "bg-blue-400 text-white" : "bg-gray-200"
              }`}
            >
              {num}
            </button>
          ))}
        {next && (
          <button
            onClick={() => {
              navigate(`?type=${type}&keyword=${keyword}&page=${end + 1}`);
            }}
            className="px-3 py-1 bg-gray-200 rounded-lg"
          >
            다음
          </button>
        )}
      </div>

      {/* 글 작성 버튼 */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-xl px-5 py-2 shadow-md transition-all"
        >
          글 작성
        </button>
      </div>
    </div>
  );
}
