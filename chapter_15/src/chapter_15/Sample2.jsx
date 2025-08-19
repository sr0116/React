import styled from "styled-components";

const Button = styled.button`
  background-color: lightpink;
  border: 2px solid palevioletred;
  text-color: #222;
  display: flex;
  margin: 5px auto;
  gap: 2px;
  &:hover {
    background-color: white;
  }
`;

const RoundedButton = styled(Button)`
border-radius: 15px`;

function Sample2() {
  return (
    <div>
      <Button type="button">Normal</Button>
      <RoundedButton >RoundedButton</RoundedButton> {/* boolean true */}
    </div>
  );
}

export default Sample2;
