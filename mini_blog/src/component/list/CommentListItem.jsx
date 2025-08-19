import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid grey;
  cursor: pointer;
  background-color:  white;
  :hover {
    background-color:  lightgrey;
  }
`;

const CommentText = styled.p`
font-size: 20px;
white-space: pre-wrap;`;

export default function CommentListItem(props) {
  const {comment} = props;
  return (
    <Wrapper >
      <CommentText>{comment.content}</CommentText>
    </Wrapper>
  )
}