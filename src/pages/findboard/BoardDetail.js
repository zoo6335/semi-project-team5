import "suneditor/dist/css/suneditor.min.css";
import nbApi from "../../api/nbApi";
import Modal from "../../util/Modal";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  margin: auto;
  margin-top: 2rem;
  font-family: "DungGeunMo";
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const TBoardDetail = () => {
  // 현재 로그인한 아이디 정보 가져오기
  const loginId = window.localStorage.getItem("userId");
  const getDetail = window.localStorage.getItem("Detail");
  const [boardDetail, setBoardDetail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  useEffect(() => {
    const BoardData = async () => {
      setLoading(true);
      try {
        const response = await nbApi.onDetail(getDetail);
        setBoardDetail(response.data[0]);
        setContent(response.data[0].gmb_content.replace(/<[^>]*>?/g, ""));
        // eslint-disable-next-line no-unused-expressions
        await nbApi.onUpdateHit(
          response.data[0].gmb_id,
          response.data[0].gmb_hit
        );
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    BoardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h5>대기 중...</h5>;
  }

  //목록가기 버튼 클릭
  const onClickgoBack = (e) => {
    console.log("목록가기 버튼 클릭");
    e.preventDefault();
    window.location.replace("/tBoardList");
  };

  // 버튼 누를 시 게시물 수정 화면으로 이동
  const onClickEdit = (e) => {
    e.preventDefault();
    window.location.replace("/tEditBoard");
  };

  // 버튼 누를 시 삭제 기능 시작
  const onClickDelete = (e) => {
    e.preventDefault(); // 모달이 자동으로 꺼지지 않게 설정
    setModalOpen(true);
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

  // 버튼 누를 시 삭제 기능 끝
  const closeModal = () => {
    setModalOpen(false);
  };

  // 신청하기 버튼 누를 시 시작
  const onClickApply = (e) => {
    if (boardDetail.gmb_done === "1") {
      window.alert("모집완료되었습니다");
      return;
    }
    e.preventDefault(); // 모달이 자동으로 꺼지지 않게 설정
    setApplyModalOpen(true);
  };

  const applyConfirmModal = async () => {
    setApplyModalOpen(false);
    const res = await nbApi.onApply(boardDetail.gmb_id, boardDetail.gmb_apply);
    console.log("신청하기 버튼 클릭");
    console.log(res.data.result);
    if (res.data.result === "OK") {
      window.location.replace("/tBoardDetail");
    } else {
    }
  };

  // 버튼 누를 시 신청 끝
  const applyModalclose = () => {
    setApplyModalOpen(false);
  };

  return (
    <Box>
      <div style={{ height: "100%" }}>
        <div style={{ height: "20%" }}>
          <div style={{ height: "130px" }}>
            <LogoBox>
              <div className="boardCategory">
                <h1>일 행 구 하 기</h1>
                <span>내 동료가 돼라!</span>
              </div>
            </LogoBox>
          </div>
        </div>
        <div style={{ height: "80%" }}>
          <div style={{ height: "100%", width: "100%" }}>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "100%" }}>
                <h1 style={{ textAlign: "center" }}>게시물 상세</h1>
              </div>
            </div>
            <div style={{ height: "900px" }} className="table">
              <table style={{ width: "900px", marginLeft: "50px" }}>
                <thead>
                  <tr class="table-active">
                    <th scope="col" style={{ width: "60%" }}>
                      {boardDetail.gmb_done === "1" ? (
                        <span class="badge rounded-pill bg-danger">
                          모집완료
                        </span>
                      ) : (
                        <span class="badge rounded-pill bg-success">
                          모집중
                        </span>
                      )}
                      <br />
                      제목 : {boardDetail.gmb_title}
                    </th>
                    <th
                      scope="col"
                      style={{ width: "40%", textAlign: "right" }}
                    >
                      작성자 : {boardDetail.gmb_user_id}
                      <br />
                      작성일 : {boardDetail.gmb_c_date}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <pre>{content}</pre>
                    </td>
                  </tr>
                  <tr class="table-active">
                    <td>
                      모집현황 : {boardDetail.gmb_apply}/
                      {boardDetail.gmb_apply_total}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="setButton">
                <button className="listBtn" onClick={onClickgoBack}>
                  목록
                </button>
                {loginId === boardDetail.gmb_user_id ? (
                  <>
                    <button className="deleteBtn" onClick={onClickDelete}>
                      삭제
                    </button>
                    {boardDetail.gmb_done !== "1" && (
                      <button className="editBtn" onClick={onClickEdit}>
                        수정
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <button className="applyBtn" onClick={onClickApply}>
                      모집신청
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
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
        {applyModalOpen && (
          <Modal
            open={applyModalOpen}
            confirm={applyConfirmModal}
            close={applyModalclose}
            type={true}
            header="확인"
          >
            신청하시겠습니까?
          </Modal>
        )}
      </div>
    </Box>
  );
};

export default TBoardDetail;
