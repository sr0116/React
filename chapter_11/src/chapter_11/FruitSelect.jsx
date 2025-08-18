import {useState} from "react";

function FruitSelect(props) {
  const [value, setValue] = useState('grape');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    alert('선택한 과일 : ' + e.target.elements[0].selectedOptions[0].text);
    // value == e.target.elements[0].selectedOptions[0].text;
    // 4가지만 요소, input, textarea, select, button
    // value = e.target.value
    // 내용을 출력하고 싶다 -> text
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요 :
        <select  onChange={handleChange} value={value} >
          <option value="apple">apple</option>
          <option value="banana">banana</option>
          <option value="grape">grape</option>
          <option value="watermelon">watermelon</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}

 export default FruitSelect;