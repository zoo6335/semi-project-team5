import Form from "react-bootstrap/Form";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import nbApi from "../../api/nbApi";
import Modal from "../../util/Modal";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TEditBoard = () => {

  const isLogin = window.localStorage.getItem("isLogin");
  if (isLogin === "FALSE") window.location.replace("/");

  const getDetail = window.localStorage.getItem("EditInfo");
  const [boardDetail, setBoardDetail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const onChangeTitle = (e) => setTitle(e.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 세팅
  const onChangeContent = (contentSet) => setContent(contentSet);

  // 수정완료 버튼 클릭시 모달
  const onClickEdit = (e) => {
    e.preventDefault(); // 모달이 자동으로 꺼지지 않게 설정
    setModalOpen(true);
  };

  // 모달 확인버튼 클릭시 동작
  const confirmModal = async () => {
    setModalOpen(false);
    const res = await nbApi.TBoardListUpdate(title,content);
    console.log("수정완료 버튼 클릭");
    console.log(res.data.result);
    if (res.data.result === "OK") {
      window.location.replace("/tBoardDetail");
    } else {
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  if (loading) {
    return <h5>대기 중...</h5>;
  }

  const Box = styled.div`
    border: 4px solid #40baaa;
    border-top: 200px;
    width: 1024px;
    height: 720px;
    margin: 0 auto;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const LogoBox = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 1024px;
    height : 140px;
    margin: auto;
    font-family: "DungGeunMo";
    @media screen and (max-width: 768px) {
      width: 100%;
      padding-left: 1em;
      padding-right: 1em;
    }
  `;

  return (
    <Box>
    <form className="boardWrite-form">
      <LogoBox>
        <div className="boardCategory">
          <h1>일 행 구 하 기</h1>
          <span>내 동료가 돼라!</span>
        </div>
      </LogoBox>
      <h1 style={{ textAlign: "center", color : "white" }}>수정하기</h1>
      <div>
            <Form className="detailForm">
              <Form.Group className="detailTitle">
                <Form.Control 
                type="text"
                placeholder="이전에 입력한 제목"
                />
              </Form.Group>
              <Form.Group
                className="detailContent"
                controlName="detailContent1"
              >
                <Form.Control
                  type="text"
                  placeholder="이전에 입력한 내용"
                />
              </Form.Group>
            </Form>
            <button className="EditBtn" onClick={onClickEdit}>
                  수정완료
                </button>
        {modalOpen && (
          <Modal
            open={modalOpen}
            confirm={confirmModal}
            close={closeModal}
            type={true}
            header="확인"
          >
            수정하시겠습니까?
          </Modal>
        )}
      </div>
    </form>
    </Box>
  );
};

export default TEditBoard;
