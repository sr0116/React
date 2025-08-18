import {useState} from "react";

function NameForm(props) {
  const [value, setValue] = useState('');
 // set은 변경할 때 사용하는 함수
  const handleChange = (e) => {
    return setValue(e.target.value);
  }

  const handleClick = (e) => {
    setValue("");
  }

  const handleSubmit = (e) => {
    alert('입력한 이름: ' + value);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">
      이름 :
        <input type="text"
        value={value}
        onChange={handleChange} />
      </label>
      <button type="submit" className="form-button ">제출</button>
      <button type="reset" onClick={handleClick}>다시쓰기</button>
    </form>
  )
}
export default NameForm;