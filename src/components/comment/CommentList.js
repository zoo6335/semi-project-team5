import { useState, useEffect } from "react";
import JYApi from "../../api/JYApi";
import styled from "styled-components";
import WriteContent from "./WriteComment";

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
  .deleteBt {
    border: none;
    border-radius: 5px;
    padding: 0px 7px;
    position: relative;
    left: 730px;
    bottom: 95px;
    color: white;
    background-color: red;
    font-size: 0.9em;
    box-shadow: 2px 2px 5px #000000;
    &:hover {
      color: red;
      background-color: white;
    }
  }
`;

const CommentList = () => {
  const getBoardid = window.localStorage.getItem("fb_id");
  const getUserId = window.localStorage.getItem("userId"); // 삭제시 현 유저아이디 대조용
  console.log("자유게시판 게시물 ID : " + getBoardid);
  const [commentDetail, setCommentDetail] = useState("");
  const [inputContent, setInputContent] = useState(""); // 댓글 내용 입력 받을 객체

  // 댓글 조회
  useEffect(() => {
    const CommentData = async () => {
      try {
        const response = await JYApi.commentList(getBoardid);
        setCommentDetail(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    CommentData();
  }, [inputContent]);

  // 삭제 버튼 클릭 시
  const onClickButton = async (postId) => {
    console.log("댓글 삭제 버튼 클릭");
    console.log("postid: " + postId);
    const res = await JYApi.deleteComment(postId);
    console.log(res.data.result);
    if (res.data.result === "OK") {
    }
  };

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
            {getUserId === comment.id && (
              <button
                className="deleteBt"
                onClick={() => onClickButton(comment.postid)}
              >
                삭제
              </button>
            )}
          </CommentBlock>
        ))}
    </div>
  );
};

export default CommentList;
