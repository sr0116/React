import {useState} from "react";

export default function Create(props) {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  return (
    <div>
      <h2>Update</h2>
      <h4>id : {props.id}</h4>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title_1 = e.target.title.value;
        const content_1 = e.target.content.value;
        console.log(title_1, content_1);
        props.onUpdate(title_1, content_1);
      }}>
        {/*<p><input type="id" name="id" value={id}/></p>*/}
        <p><input value={title} name="title" placeholder="title" onChange={(e) =>
          setTitle(e.target.value)}/></p>
        <p><textarea value={content} name="content" placeholder="content"
                     onChange={(e) =>
                       setContent(e.target.value)}/></p>
        <p>
          <button type="submit">Update</button>
        </p>
      </form>
    </div>
  );
}