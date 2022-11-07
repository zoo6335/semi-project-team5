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
        const response = await RankingApi.commentList(getDetail);
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
      <div className='box'>
        {commentDetail && commentDetail.map(comment => (
          <CommentBlock key={comment.postId}>
            {/* <p>게시글 번호 : {comment.boardId}</p> */}
            {/* <p>No. {comment.postId}</p> */}
            <p className='comment' style={{ fontSize: "1.2em" }}>{comment.id} </p>
            <p className='comment' style={{ fontSize: "0.9em" }}>{comment.postDate}</p>
            <hr />
            <p className='comment' style={{ fontSize: "1.15em" }}>{comment.content}</p>
          </CommentBlock>
        ))}
      </div>
    </div>
  )
}
const CommentBlock = styled.div`
  margin: 5px auto;
  padding: 5px 10px;
  border-top: 2px solid black;
  // border-bottom: 1px solid black;
  & > .comment{
    margin: 2px 0;
    color : black;
  }
  & > hr{
    color: grey;
    margin: 5px auto;
    // border: 1px dashed grey;
  }

`;

export default CommentList;