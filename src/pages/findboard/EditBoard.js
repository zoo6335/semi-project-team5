import Form from "react-bootstrap/Form";
import nbApi from "../api/nbApi";
import Modal from "../Util/Modal";
import React, { useState, useEffect } from "react";

const EditBoard = () => {
  const getDetail = window.localStorage.getItem("Detail");
  const [boardDetail, setBoardDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  // 수정완료 버튼 클릭시 모달
  const confirmModal = async () => {
    setModalOpen(false);
    const res = await nbApi.onDelete(getDetail);
    console.log("수정완료 버튼 클릭");
    console.log(res.data.result);
    if (res.data.result === "OK") {
      window.location.replace("/BoardDetail");
    } else {
    }
  };

  const onEditConfirm = (e) => {
    e.preventDefault(); // 모달이 자동으로 꺼지지 않게 설정
    setModalOpen(true);
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
    <div className="Boardcontainer">
    <div className="boardCategory">
      <h1>일 행 구 하 기</h1>
      <span>내 동료가 돼라!</span>
    </div>
    <div className="App2">
      <h1 style={{ textAlign: "center" }}>게시물 내용</h1>
      <div>
        {boardDetail &&
          boardDetail.map((detail) => (
            <Form key={detail.id}>
              <Form.Group className="detailTitle">
                <Form.Control type="text" value={detail.title}  />
              </Form.Group>
              <Form.Group className="detailContent" controlName = "detailContent1">
                <Form.Control type="text" value={detail.content}  />
              </Form.Group>
              <div className="setButton">
                <button className="listBtn" onClick={onEditConfirm}>
                  수정완료
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
    </div>
  </div>
);
}
export default EditBoard;