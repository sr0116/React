import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Reply(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`/reply/24`)
  .then((res) => {
      console.log("Content-Type : ", res.headers['content-type']);
      console.log("data : ", res.data);
      setData(res.data);
    })
      .catch((e) => {
        console.log('error: ', e);
      });
  }, []);


  return (
    <div>
      <h1>BoardReply Data</h1>
      <ul>
        {data && data.map ((d) => {
          return <li>{d.text}</li>
        })}
      </ul>
    </div>
  )
}