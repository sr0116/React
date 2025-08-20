import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import List from "./board/List";
import Reply from "./reply/Reply";
import Read from "./board/Read";
import Regiter from "./board/Regiter";
import BoardForm from "./board/BoardForm";
import BoardList from "./board/BoardList";
import BoardView from "./board/BoardView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<BoardList/>} />
          <Route path="reply/:bno" element={<Reply />} />
          <Route path="board/:bno" element={<BoardView />} />
          <Route path="board/register" element={<BoardForm />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
