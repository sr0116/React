import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";


// 물이 끓는지 표시
function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}

// 화씨 --> 섭씨 표기 바꿔주는 함수
function toCelsius(fahrenheit){
  return ((fahrenheit - 32) * 5) /9;
}

// 섭씨 --> 화씨 표기 바꿔주는 함수
function toFahrenheit(celsius){
  return (celsius * 9) / 5 + 32;
}

// 매개변수 ( 온도, 컨버트할 변수(섭씨, 화씨))
function tryConvert(temperature, convert) {
  // 입력받은 값은 전부 string으로 들어감. 숫자로 쓰고싶다면 변환해서 써야한다!
  const input =  parseFloat(temperature);
  // 숫자가 아니라면 비어있는 값 리턴.
  if(Number.isNaN(input)){
    return "";
  }
  // 변환 된 값 받을 변수 output, 소수 첫자리 반올림처리한 rounded를 string으로 반환
  const output = convert(input);

  //소수점 4번째자리에서 반올림, 3번째자리까지 보여줌
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


export default function Calcurator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  // 섭씨 <--> 화씨 값 지정
  const handleCelsiusChange = (t) => {
    setTemperature(t);
    setScale("c");
  }
  const handleFahrenheitChange = (t) => {
    setTemperature(t);
    setScale("f");
  }

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale = "c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale = "f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}