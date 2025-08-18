import React from "react";

export default function Article(props) {
 // list 만 가능하고
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}