import { useState } from "react";

export default function Reservation() {
  const [haveBreakfast, setHaveBreakfast] = useState(true); // 체크박스 상태
  const [numberOfGuest, setNumberOfGuest] = useState(2);    // 숫자 상태

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 새로고침 방지
    alert(`아침 식사 여부 : ${haveBreakfast}, 방문자 수 : ${numberOfGuest}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아침 식사 여부:
        <input
          type="checkbox" // ✅ 소문자로!
          checked={haveBreakfast}
          onChange={(e) => setHaveBreakfast(e.target.checked)}
        />
      </label>
      <br />
      <label>
        방문객 수 :
        <input
          type="number"
          value={numberOfGuest}
          onChange={(e) => setNumberOfGuest(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
