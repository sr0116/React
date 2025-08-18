

export default function NumberList(props) {
  const {numbers} = props; // { } props에 있는 numbers , props 한단계 아래, props.numbers와 동일
  // const numbers = props; // 이거랑 다름
  const listItems = numbers.map ((number) =>
    // 리스트를 표시랗 때 반드시 키값이 있어야 함
    // 키값은 중복 불가
  // { } 자바 스크립트
  <li key={number}>{number}</li>); // 맵이라는 내장함수를 사용해서 출력을 한다

  return (
    <ul>{listItems}</ul>

  );
}