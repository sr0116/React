import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.dark ? "white" : "black")};
  background: ${(props) => (props.dark ? "black" : "white")};
  border: 1px solid black;
`;

function Sample() {
  return (
    <div>
      <Button>Normal</Button>
      <Button dark>Dark</Button> {/* boolean true */}
    </div>
  );
}

export default Sample;
