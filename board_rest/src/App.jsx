import List from "./api/List.jsx";
import Read from "./api/Read.jsx";
import Register from "./api/Register.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Modify from "./api/Modify.jsx";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<List />} />
        <Route path="read/:bno" element={<Read />} />
        <Route path="register" element={<Register />} />
        <Route path="modify/:bno" element={<Modify />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
