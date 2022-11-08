import { useState, useEffect } from "react";
import JYApi from "../../api/JYApi";
import styled from "styled-components";
import WriteContent from "./WriteComment";

const CommentList = () => {
  const getDetail = window.localStorage.getItem("Detail");
  console.log("자유게시판 게시물 ID : " + getDetail);
  const [commentDetail, setCommentDetail] = useState("");
  const [inputContent, setInputContent] = useState(""); // 댓글 내용 입력 받을 객체

  useEffect(() => {
    const CommentData = async () => {
      try {
        const response = await JYApi.commentList(getDetail);
        setCommentDetail(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    CommentData();
  }, [inputContent]);

  return (
    <div>
      <WriteContent
        inputContent={inputContent}
        setInputContent={setInputContent}
      />
      {commentDetail &&
        commentDetail.map((comment) => (
          <CommentBlock key={comment.postId}>
            {/* <p className="comment">게시글 번호 test : {comment.boardId}</p>
              <p className="comment">댓글 번호 test : {comment.postId}</p> */}
            <p className="comment" style={{ fontSize: "1.2em" }}>
              {comment.id}💨
            </p>
            <p className="comment" style={{ fontSize: "0.9em" }}>
              ✔{comment.postDate}
            </p>
            <hr />
            <p className="comment" style={{ fontSize: "1.15em" }}>
              {comment.content}
            </p>
          </CommentBlock>
        ))}
    </div>
  );
};
const CommentBlock = styled.div`
  width: 800px;
  margin: 5px auto;
  padding: 5px 10px;
  // background-color: #8dc0f1;
  background-color: #ed9dcc;
  // background-color: rgba(237, 157, 204, 0.9);
  // border-top: 8px solid #ed9dcc;
  border-top: 5px solid #8dc0f1;
  border-radius: 3px;

  & > .comment {
    margin: 2px 0;
    color: black;
  }

  & > hr {
    margin: 5px auto;
    border: 1px dashed white;
  }
`;

export default CommentList;
