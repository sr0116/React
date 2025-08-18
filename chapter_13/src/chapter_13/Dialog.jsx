import FancyBorder from "./FancyBorder";

// Specialization
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="dialog-title">
        {props.title}
      </h1>
      <p className="dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

export default Dialog;