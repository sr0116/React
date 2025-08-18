
import {useState} from "react";

export default function RequestForm () {
  const [value, setValue] = useState('요청 사항을 입력하세요');
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    alert(name + '입력한 요청 사항 : ' + value);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label">
        이름 :
        <input type="text"
               value={name}
               onChange={handleChangeName} />
      </label>
      <button type="submit">제출</button>
      <label >
        <br />
        요청 사항 :
        <textarea value={value} onChange={handleChange}/>
      </label>
    </form>
  )
}