import React from "react";


const ThemeContext = React.createContext();
ThemeContext.displayName = 'ThemeContext';


export default ThemeContext;


/*
1. 리액트 context를 생성
   const ThemeContext = React.createContext()

2. 리액트 context 사용할 수 있는 곳 지정
   <ThemeContext.Provider value={}>

   value 속성에 하위 컴포넌트가 사용할 수 있는 변수를 넣어줍니다.

3. 사용할 곳에 useContext
   const {} = useContext(ThemeContext);
*/