import { useState, useEffect } from "react";
import Api from "../../api/FbApi";
import "./FreeBoardStyle.css";
import Modal from "../../util/Modal";
import styled from "styled-components";
import Comment from "../../components/comment/CommentList";
import BoardTitleHeader from './BoardMain/Components/BoardTitle';

const BoardBlock = styled.div`
border: 4px solid #40BAAA;
border-top: none;
width: 1024px;
height: 100%;
margin: 0 auto;
background-color: rgb(0, 0, 0);
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
@media screen and (max-width: 768px) {
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
}
.buttonBox {
  width: 1024px;
  padding-right: 110px;
  margin: 10px;
  text-align: right;
}
`

const Button = styled.button`
display :inline-block;
font-family: "Sfont";
font-size: 1.4em;
font-weight: bold;
color: white;
text-shadow: 2px 2px 2px gray;
width: 100px;
height: 40px;
background-color: #ed9dcc;
border: none;
border-radius: 8px;
margin: 10px;
  &:hover {
  background-color: #dbdbdb;
  }
`

const ReadTitle = styled.div `
border: 2px solid #8DC0F1;
border-radius: 20px;
width: 800px;
padding: 5px;
margin: 3px;
padding: 10px;
font-size: 1.5em;
color: #cdc298;
`

const ReadInfo = styled.div `
border: 2px solid #8DC0F1;
border-radius: 20px;
width: 800px;
padding: 10px;
margin: 5px;
// display: flex;
// align-items: center;
// justify-content: space-between;
.fb_id{
  display: none;

`

const ReadContents = styled.div `
border: 2px solid #8DC0F1;
border-radius: 20px;
width: 800px;
height: 400px;
padding: 10px;
margin: 5px;
`
const BoardDetail = () => {

  const getFb_id = window.localStorage.getItem("fb_id");
  const getUserId = window.localStorage.getItem("userId");
  const getFb_user_id = window.localStorage.getItem("fb_user_id");

  // const [boardComment, setBoardComment] = useState("");
  const [boardDetail, setBoardDetail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
 
  // 게시글 목록으로 이동
  function onClickMain() {
    window.location.replace("/totalBoard");
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  // 게시글 삭제 모달
  const confirmModal = async () => {
    setModalOpen(false);
    const boardReg = await Api.fBoardDelete(getFb_id);
    console.log(boardReg.data.result);
    if (boardReg.data.result === "OK") {
      window.location.replace("/totalBoard");
    } else {
    }
  };

  // 게시글 수정
  const onClickUpdate = (val) => {
      console.log("게시글 수정페이지로 이동 : " + val);
      window.location.replace("/boardUpdate");
  }
  
  // 게시글 삭제
  function onClickDelete() {
      setModalOpen(true);
  }

  // FB_ID로 DB 조회 후 가져오기
  useEffect(() => {
    const boardData = async () => {
      try {
        const response = await Api.boardDetail(getFb_id);
        setBoardDetail(response.data);
        console.log(response.data)
        // 댓글수(구현중)
        // await Api.fBoardComment(getFb_id);
        // setBoardComment(response.data);
        // console.log(response.data)
        // 조회수
        await Api.fBoardHit(response.data[0].fb_id, response.data[0].fb_hit);
      } catch (e) {
        console.log(e);
      }
    };
    boardData();
  }, []);

  return (
    <BoardBlock>
      <BoardTitleHeader />
        <div className="buttonBox">
          <Button onClick={onClickMain}>글목록</Button>
        </div>
        <div>
          {boardDetail && boardDetail.map(list => (
            <div key={list.fb_id}>
              {/* html 태그 안 보이도록 정규식 적용 */}
              <ReadTitle className="read-title">{list.fb_category} {(list.fb_title).replace(/<[^>]*>?/g,'')}</ReadTitle>
              <ReadInfo className="read-info">
                {/* fb_id는 display: none으로 숨겨놓음 */}
                <div className="fb_id">글번호 : {list.fb_id}</div>
                <div className="user_id">작성자 : {list.fb_user_id}</div>
                <div className="date">작성일 : {list.fb_c_date}</div>
              </ReadInfo>
              {/* html 태그 안 보이도록 정규식 적용 */}
              <ReadContents className="read-contents">{(list.fb_content).replace(/<[^>]*>?/g,'')}</ReadContents>
            </div>
          ))}
        </div>
        {getFb_user_id === getUserId && (
          <div className="UD-ButtonBox">
            <Button onClick={()=>onClickUpdate(getFb_id)}>수정</Button>
            <Button onClick={onClickDelete}>삭제</Button>
          </div>
        )}
        {/* 댓글 컴포넌트 위치 <- 주연: 댓글 컴포넌트 달았습니다! 일단은 하늘님 페이지 색상이랑 통일감 주려고 같은 색상을 차용했는데, 수정사항 있으면 말씀해주세요 :)  */}
        <Comment />
        {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="확인">정말 삭제하시겠습니까?</Modal>}
      </BoardBlock>
  )
}
export default BoardDetail