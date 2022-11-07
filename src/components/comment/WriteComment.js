import styled from "styled-components";
import { useState, useEffect } from "react";
import JYApi from "../../api/JYApi";
import { render } from "@testing-library/react";

const WriteContent = ({ inputContent, setInputContent }) => {
  // 로그인 상태가 아닐때는 글 작성할 수 없게
  const isLogin = window.localStorage.getItem("isLogin");
  if (isLogin === "FALSE") window.location.replace("/login"); // 로그인 안 되어있으면 로그인 페이지로 이동

  const getUserId = window.localStorage.getItem("userId"); // 유저 아이디 값 가져오기
  const getDetail = window.localStorage.getItem("Detail"); // 게시판 아이디 값 가져오기

  let isSubmit = false;

  const onChangeContent = (e) => setInputContent(e.target.value);

  const onPressEnter = async (e) => {
    if (e.key === "Enter") {
      console.log("엔터 클릭");
      const res = await JYApi.insertComment(getUserId, inputContent, getDetail);
      console.log(res.data.result);
      // if (res.data.result === "OK") {
      //   setInputContent(inputContent);
      // }
    }
  };

  return (
    <WriteBlock>
      <textarea
        onChange={onChangeContent}
        onKeyPress={onPressEnter}
        name="writer"
        placeholder="👉 댓글을 입력하세요 !"
        // value={isSubmit ? "" : undefined}
      />
    </WriteBlock>
  );
};
const WriteBlock = styled.div`
  margin: 0 auto;
  & > textarea {
    width: 800px;
    // height: 70px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px dashed grey;
    resize: vertical;
  }
`;
export default WriteContent;
