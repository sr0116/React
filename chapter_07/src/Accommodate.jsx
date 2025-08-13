import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate() {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // count가 변할 때마다 실행
  useEffect(() => {
    console.log("==================================");
    console.log("useEffect() is called ...........");
    console.log(`count: ${count}, isFull: ${isFull}`);
  }, [count, isFull]); // 의존성 배열 추가

  // count 값이 바뀔 때 isFull 상태 업데이트
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count} 명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>
      {isFull && <p style={{ color: "red" }}>정원이 가득 찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
