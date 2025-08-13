import React, {useState, useEffect} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(0);
  useEffect(() => {
    document.title = ` 총 ${minus} 번 클릭했습니다.`;
   setMinus(minus - 1)
  }, [count]);
//   const mode = useState(0)
// ;
//   console.log(mode);
  return ( 
    <div>
      <p> 총 {count} 번 클릭했습니다.</p>
      <button onClick={ () => setCount(count+1)}>
        클릭
      </button>
        <p>{minus}</p>
    </div>
  );
}
 export default Counter;