import Form from "react-bootstrap/Form";
import "suneditor/dist/css/suneditor.min.css";
import nbApi from "../api/nbApi";
import Modal from "../Util/Modal";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BoardDetail = () => {
  const getDetail = window.localStorage.getItem("Detail");
  const [boardDetail, setBoardDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const LogoBox = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 1024px;
  margin: auto;
  margin-top: 2rem;
  font-family: "DungGeunMo";
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const DetailBox = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 1024px;
    margin: auto;
    margin-top: 5rem;
    font-family: "DungGeunMo";
    @media screen and (max-width: 768px) {
      width: 100%;
      padding-left: 1em;
      padding-right: 1em;
    }
  `;

  //목록가기 버튼 클릭
  const onClickgoBack = (e) => {
    console.log("목록가기 버튼 클릭");
    e.preventDefault();
    window.location.replace("/tBoardList");
  };

  const onClickDelete = (e) => {
    e.preventDefault(); // 모달이 자동으로 꺼지지 않게 설정
    setModalOpen(true);
  };

  const onClickEdit = (e) => {
    console.log("수정하기 버튼 클릭");
    e.preventDefault();
    window.location.replace("/EditBoard");
  };

  // 삭제버튼 클릭시 모달
  const confirmModal = async () => {
    setModalOpen(false);
    const res = await nbApi.onDelete(getDetail);
    console.log("삭제 버튼 클릭");
    console.log(res.data.result);
    if (res.data.result === "OK") {
      window.location.replace("/tBoardList");
    } else {
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const BoardData = async () => {
      setLoading(true);
      try {
        const response = await nbApi.onDetail(getDetail);
        setBoardDetail(response.data);
        console.log(BoardDetail);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    BoardData();
  }, []);

  if (loading) {
    return <h5>대기 중...</h5>;
  }

  return (
    <form className="boardWrite-form">
      <LogoBox>
      <div className="boardCategory">
        <h1>일 행 구 하 기</h1>
        <span>내 동료가 돼라!</span>
      </div>
      </LogoBox>
      <DetailBox>
        <h1 style={{ textAlign: "center" }}>게시물 내용</h1>
        <div>
          {boardDetail &&
            boardDetail.map((detail) => (
              <Form className="detailForm" key={detail.id}>
                <Form.Group className="detailTitle">
                  <Form.Control type="text" value={detail.title} readOnly />
                </Form.Group>
                <Form.Group className="detailContent" controlName = "detailContent1">
                  <Form.Control type="text" value={(detail.content).replace(/<[^>]*>?/g,'')} readOnly />
                </Form.Group>
                <div className="setButton">
                  <button className="listBtn" onClick={onClickgoBack}>
                    목록
                  </button>
                  <button className="deleteBtn" onClick={onClickDelete}>
                    삭제
                  </button>
                  <button className="editBtn" onClick={onClickEdit}>
                    수정
                    </button>
                </div>
              </Form>
            ))}
          {modalOpen && (
            <Modal
              open={modalOpen}
              confirm={confirmModal}
              close={closeModal}
              type={true}
              header="확인"
            >
              삭제하시겠습니까?
            </Modal>
          )}
        </div>
        </DetailBox>
    </form>
  );
};

export default BoardDetail;
