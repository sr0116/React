

export default function Header(props) {
  return (
    <div>
      <h1><a  href="/" onClick={(e) => {
        e.preventDefault();
        // handleShow(t.content );
        props.onChangeMode();
      }}>{props.title}</a> </h1>
    </div>
  )
}