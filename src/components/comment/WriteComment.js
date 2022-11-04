import styled from "styled-components";

const WriteContent = () => {
  return (
    <WriteBlock>
      <textarea name="writer" placeholder="👉 댓글을 입력하세요 !" />
    </WriteBlock>
  )
}
const WriteBlock = styled.div`
  margin: 0 auto;
  & > textarea {
    width: 800px;
    height: 70px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    resize: vertical;
  }
`;
export default WriteContent;