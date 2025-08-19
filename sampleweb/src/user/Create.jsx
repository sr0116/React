export default function Create(props) {
  return (
    <div>
      <h2> Create</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        console.log(title, content);
        props.onCreate(title, content);
      }}>
        <p><input type="title" name="title" placeholder="title"/></p>
        <p><textarea name="content" placeholder="content"/></p>
        <p><button type="submit">Create</button></p>
      </form>
    </div>
  );
}