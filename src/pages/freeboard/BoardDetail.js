import { useState, useEffect } from 'react';
import Api from '../../api/FbApi';
import './FreeBoardStyle.css'
import Modal from '../../util/Modal';
import styled from 'styled-components';

const BoardDetail = () => {
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
  // div < button 가운데 정렬 수정 필요
  // .buttonBox {
  //   align-items: center;
  // }
  `

  const BoardTitle = styled.div`
    display: flex;
    height:100px;
    padding: 30px;
      & p {
        font-size: 2.6em;
        font-family: "SFont";
        font-weight: bold;
        color: #40BAAA;
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
    padding: 3px;
    margin: 3px;
    padding: 10px;
  `

  const ReadInfo = styled.div `
    border: 2px solid #8DC0F1;
    border-radius: 20px;
    width: 800px;
    padding: 10px;
    margin: 3px;
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
    margin: 3px;
  `

  const getFb_id = window.localStorage.getItem("fb_id");
  const getUserId = window.localStorage.getItem("userId");
  const getFb_user_id = window.localStorage.getItem("fb_user_id");

  const [boardDetail, setBoardDetail] = useState("");
  // const [isWriter, setIsWriter] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [errModalOpen, setErrModalOpen] = useState(false);
  const [errModalText, setErrModelText] = useState("본인이 작성한 글만 가능합니다.");

  // 게시글 목록으로 이동
  function onClickMain() {
    window.location.replace("/totalBoard");
  }

  // 게시글 공유
  function onClickShare() {
    return (
      <></>
    )
  }

  const closeModal = () => {
    setModalOpen(false);
  };
  
  // 게시글 삭제 모달
  const confirmModal = async() => {
      setModalOpen(false);
      const boardReg = await Api.fBoardDelete(getFb_id);
      console.log(boardReg.data.result);
      if(boardReg.data.result === "OK") {
        window.location.replace("/totalBoard");
      } else {
      }
  };

    // 에러 모달 닫기 버튼
    const errCloseModal = () => {
      setErrModalOpen(false);
    };

  // 게시글 수정(본인글만 수정 가능)
  const onClickUpdate = (val) => {
    if(getUserId === getFb_user_id) {
      console.log("게시글 수정페이지로 이동 : " + val);
      window.location.replace("/boardUpdate");
    } else {
      setErrModalOpen(true);
      setErrModelText("본인이 작성한 글만 수정이 가능합니다.");
    }
  } 

  // 게시글 삭제(본인글만 삭제 가능)
  function onClickDelete() {
    if(getUserId === getFb_user_id) {
      setModalOpen(true);
    } else {
      setErrModalOpen(true);
      setErrModelText("본인이 작성한 글만 삭제가 가능합니다.");
    }
  }

  // FB_ID로 DB 조회 후 가져오기
  useEffect(() => {
    const boardData = async () => {
      try {
        const response = await Api.boardDetail(getFb_id);
        setBoardDetail(response.data);
        console.log(response.data)
        // 
        // if(getUserId !== getFb_user_id) {
        //   setIsWriter(false)
        // } else {
        //   setIsWriter(true)
        // }
        // 댓글수(구현중)
        await Api.fBoardComment(getFb_id);
        // 조회수
        await Api.fBoardHit(
        response.data[0].fb_id,
        response.data[0].fb_hit
        );
      } catch (e) {
        console.log(e);
      }
    };
    boardData();
  }, []);

  return (
      <BoardBlock>
        <BoardTitle>
            <p>게시판</p>
        </BoardTitle>
          <div className="button">
            <Button onClick={onClickShare}>공유</Button>
            <Button onClick={onClickMain}>글목록</Button>
          </div>
          <div>
            {boardDetail && boardDetail.map(list => (
              <div key={list.fb_id}>
                {/* html 태그 안 보이도록 정규식 적용 */}
                <ReadTitle className="read-title">{list.fb_category} {(list.fb_title).replace(/<[^>]*>?/g,'')}</ReadTitle>
                <ReadInfo className="read-info">
                  {/* fb_id는 display:none으로 숨겨 놓을 예정 */}
                  <div className="fb_id">글번호 : {list.fb_id}</div>
                  <div className="user_id">작성자 : {list.fb_user_id}</div>
                  <div className="date">작성일 : {list.fb_c_date}</div>
                  <div className="hit">조회수 : {list.fb_hit}</div>
                </ReadInfo>
                {/* html 태그 안 보이도록 정규식 적용 */}
                <ReadContents className="read-contents">{(list.fb_content).replace(/<[^>]*>?/g,'')}</ReadContents>
              </div>
            ))}
          </div>
          <div className="buttonBox">
            <Button onClick={()=>onClickUpdate(getFb_id)}>수정</Button>
            <Button onClick={onClickDelete}>삭제</Button>
          </div>
          {/* 댓글 컴포넌트 위치 */}
        {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="확인">정말 삭제하시겠습니까?</Modal>}
        <Modal open={errModalOpen} close={errCloseModal} header="작성자 불일치">{errModalText}</Modal>
      </BoardBlock>
  );
};


export default BoardDetail