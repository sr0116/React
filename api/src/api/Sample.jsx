import {useState, useEffect} from "react";

export default function Sample() {
  // API 호출을 통해서 받아올 데이터 저장
  const [data, setData] = useState(null);
  useEffect(() => {
    // useEffect 의 첫 번째는 렌더링 이후에 실행할 함수
    // 두번째의 의존성 배열
    // 두번째 인자가 없으면 렌더링 할 때마다 실행
    // 비어있는 [] 로 들어가면 실행 될 때 실행
    // [no] no가 생성될 때 + no가 변경될 때 실행

    // 외부 API 호출 방법
    // fetch : 자바 스크립트 내장 함수 - 그냥 사용 가능
    // axios : 외부 라이브러리 사용 - 설치 필요
    window
      .fetch(`https://my-json-server.typicode.com/typicode/demo/posts`)
      .then(res => { // then 성공했을 때
        console.log('Content-Type:', res.headers.get('content-type'));
        return res.json();
      })
      .then(d => {
        setData(d);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }, [] ); // 반드시 배열에다 , 넣어줘야 함
return (
  <div>
    <h1> API DATA</h1>
    {data && data.map (d => {
     return <p key={d.id}>{d.id} : {d.title}</p>
    })}
  </div>
)


}