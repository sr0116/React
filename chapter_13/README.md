# 소플의 처음 만난 리액트 (정리)

---

✔ Chapter 1 — 리액트 소개  
리액트는 UI 라이브러리 → 컴포넌트 기반 개발, 단방향 데이터 흐름, 가상 DOM 특징.  
왜 리액트를 쓰는지 감 잡음.

---

✔ Chapter 2 — 리액트 시작하기  
CRA(create-react-app)으로 프로젝트 생성 후 실행.  
기본 구조(App.js, index.js) 확인하고 첫 화면 띄움.

---

✔ Chapter 3 — JSX 소개  
JS 안에서 HTML처럼 쓸 수 있는 JSX 문법 배움.  
실제로는 `React.createElement`로 변환됨.

---

✔ Chapter 4 — 엘리먼트 렌더링  
엘리먼트는 UI의 최소 단위.  
state 바뀌면 가상 DOM 비교 후 바뀐 부분만 업데이트.

---

✔ Chapter 5 — 컴포넌트와 Props  
컴포넌트 쪼개서 재사용 → props로 부모 → 자식 데이터 전달.  
props는 읽기 전용이라 직접 수정 불가.

---

✔ Chapter 6 — State와 생명주기  
state는 내부 데이터, 바뀌면 자동 렌더링됨.  
클래스는 라이프사이클 메서드, 함수형은 `useEffect`로 대체.

---

✔ Chapter 7 — 훅(Hooks)  
함수형 컴포넌트에서 state/효과 관리 가능.  
`useState`, `useEffect`, `useRef`, `useContext` 같은 기본 훅 사용.

---

✔ Chapter 8 — 이벤트 핸들링  
onClick 등 이벤트는 카멜 표기법으로 작성.  
핸들러 안에서 state 변경 → UI 반응.

---

✔ Chapter 9 — 조건부 렌더링  
조건에 따라 다른 UI 보여주기.  
if문, 삼항 연산자, && 연산자 다양하게 사용.

---

✔ Chapter 10 — 리스트와 Key  
배열을 map으로 렌더링.  
`key` 속성을 꼭 줘야 성능 최적화되고 경고 안 뜸.

---

✔ Chapter 11 — 폼(Form)  
입력값을 state와 연결하는 제어 컴포넌트 방식.  
onChange 이벤트로 입력값과 state 동기화.

---

✔ Chapter 12 — State 끌어올리기  
여러 컴포넌트에서 쓰는 값은 부모로 올려 관리.  
온도 변환 예제로 데이터 일관성 유지 확인.

---

✔ Chapter 13 — 합성 vs 상속  
리액트는 상속보다 합성을 권장.  
Containment(포함), Specialization(특수화) 방식으로 컴포넌트 조합.
