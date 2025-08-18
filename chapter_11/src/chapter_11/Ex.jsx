import {useState} from "react";

export default function  Ex() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  }
  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    alert('입력된 이름 : ' + name + '성별' + e.target.elements[1].selectedOptions[0].text);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label> 이름 입력 :
        <input onChange={handleChange} type="text" value={name} />
      </label>
      <label> 성별 :
        <select
          onChange={handleChangeGender} value={gender}>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
      </label>
      <button type="submit"> 제출</button>
    </form>
  )
}