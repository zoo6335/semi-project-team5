import styled from "styled-components";
import { useState, useEffect } from 'react';
import JYApi from '../../api/JYApi';

const WriteContent = () => {
  const getDetail = window.localStorage.getItem("Detail"); // 로컬스토리지 값 가져오기
  
  // 로그인 상태가 아닐때는 글작성할 수 없게
  const isLogin = window.localStorage.getItem("isLogin");
  if(isLogin === "FALSE") window.location.replace("/");

  const [inputContent, setInputContent] = useState(""); // 댓글 내용 입력 받을 객체
  
  useEffect(() => {
    const CommentData = async () => {
      try {
        
      } catch (e) {
        console.log(e);
      }
    };
    
  }, []);

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
    border: 2px dashed grey;
    resize: vertical;
  }
`;
export default WriteContent;