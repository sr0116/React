import  {useState, useEffect} from "react";
import axios from 'axios';

export default function Sample2 () {
  const [data, setData] = useState(null);
  // `https://naver.com` 의도적으로 에러
  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/typicode/demo/posts`)
      .then(res => {
        console.log('Content-Type:', res.headers['content-type']);
        setData(res.data);// fetch랑 다른 점 (json형식을 따로 적어주지 않아도 됨)
      })
      .catch(err => {
        console.log("Error: ", err);
      })
  }, []);

  return (
    <div>
      <h1>API (AXIOS)</h1>
      {data && data.map ( d =>
      <p key={d.id}> {d.id} : {d.title}
      </p>)}
    </div>

  )
}