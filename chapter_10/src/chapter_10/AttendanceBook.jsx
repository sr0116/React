import React from "react";

const students = [
  {
    id: 1,
    name: "inge",
  },
  {
    id: 2,
    name: "스티브",
  },
  {
    id: 3,
    name: "빌",
  },
  {
    id: 4,
    name: "제프",
  },
];

/*
Javascript에서 화살표 함수

1. 표준형 : (파라미터) => { return ~~~; }
const sum = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
}

2. 파라미터가 1개 : 파라미터 => { return ~~~; }  : () 생략가능
3. 리턴문 1개만 존재한다 : (파라미터) => ~~~~ ; {} 과 return 예약어 생략
const sum = (num1, num2) => num1 + num2;
*/


export default function AttendanceBook() {
  return (
    // <ul>
    //   {students.map(student => {
    //     return <li key={student.id}>{student.name}</li>;
    //   })}
    // </ul>
    <ul>
      {/*id를 키값으로*/}
      {students.map(student => <li key={student.id}>{student.name}</li>)}
      {/*포맷팅 된 문자열을 키값으로 사용*/}
      {students.map((student, index) => (
        <li key={`student-id-${student.id}`}>{student.name}</li>
      ))}
      {/*  배열의 인덱스를 키값으로 사용*/}
      {students.map((student, index) => (
        <li key={index}>{student.name}</li>
      ))}
    </ul>
  );
}