import React, {useState} from 'react';

function Toggle(props) {
  const[isToggleOn, setIsToggleOn] = useState(false);

  // 이벤트
  // 방법 1 : 함수로 구현
  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }
  // 방법 2. arrow function 을 사용하여 정의

  const handleClick2 = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }
  return (
    <button onClick={handleClick2}>
      {isToggleOn ? '켜짐' : '꺼짐'}
      </button>
  );
}
export default Toggle;