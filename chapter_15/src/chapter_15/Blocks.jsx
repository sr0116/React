import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background-color: lightgrey;
  justify-content: flex-start;
  display: flex;
  gap : 5px;
  flex-direction: row;
  align-items: flex-start;
`;
const Block = styled.div`
  padding: ${props => props.padding};
  border: 3px solid green;
  
  background-color: ${props => props.backgroundColor};
  justify-content: flex-start;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const blockItems = [
  {
    label: "1",
    padding: " 1rem",
    backgroundColor: "red",
  },
  {
    label: "2",
    padding: " 3rem",
    backgroundColor: "purple",
  },
  {
    label: "3",
    padding: " 2rem",
    backgroundColor: "blue",
  },

];

export default function Blocks() {
  return (
    <Wrapper>
      {blockItems.map((blockItems) => {
        return (
          <Block
            padding={blockItems.padding}
            backgroundColor={blockItems.backgroundColor}
          >
            {blockItems.label}
          </Block>
        );
      })}
    </Wrapper>
  );
}

