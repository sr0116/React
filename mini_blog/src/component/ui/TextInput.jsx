import styled from "styled-components";


const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${p =>
    p.height &&
    `
    height: ${p.height}px;
    `}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

export default function TextInput(props) {
  const {height, value, onChange} = props;
  return (
    <StyledTextarea height={height} value={value} onChange={onChange} />
  )
}
