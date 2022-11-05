import { useState, useEffect } from 'react';
import RankingApi from '../../api/rankingApi';
import styled from 'styled-components';
import WriteContent from "./WriteComment";

const CommentList = () => {
  const getDetail = window.localStorage.getItem("Detail");
  console.log("게시글 번호 : " + getDetail);
  const [commentDetail, setCommentDetail] = useState("");

  useEffect(() => {
    const CommentData = async () => {
      try {
        const response = await RankingApi.commentList(getDetail); // 전체 회원 조회
        setCommentDetail(response.data);
        console.log(response.data)
      } catch (e) {
        console.log(e);
      }
    };
    CommentData();
  }, []);

  return (
    <div>
      <WriteContent />
      {commentDetail && commentDetail.map(comment => (
        <CommentBlock key={comment.postId}>
          <p>게시글 번호 : {comment.boardId}</p>
          <p>댓글 번호 : {comment.postId}  회원Id : {comment.id}  게시일 : {comment.postDate}</p>
          <p>내용 : {comment.content}</p>
        </CommentBlock>
      ))}
    </div>
  )
}
const CommentBlock = styled.div`
    width: 1024px;
    margin: 0 auto;
    padding: 20px;
`;

export default CommentList;