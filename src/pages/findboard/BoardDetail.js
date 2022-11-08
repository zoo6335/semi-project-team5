import React, { useEffect, useState } from "react";

import Modal from "../../util/Modal";
import nbApi from "../../api/nbApi";
import styled from "styled-components";

const Box = styled.div`
  border: 4px solid #40baaa;
  border-top: 200px;
  width: 1024px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
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
const ReadTitle = styled.div`
  border: 2px solid #8dc0f1;
  border-radius: 20px;
  width: 800px;
  height: 80px;
  padding: 10px;
  margin: 5px 55px;
`;
const ReadContents = styled.div`
  border: 2px solid #8dc0f1;
  border-radius: 20px;
  width: 800px;
  height: 300px;
  padding: 10px;
  margin: 5px 55px;
`;
const ReadNumber = styled.div`
  border: 2px solid #8dc0f1;
  border-radius: 20px;
  width: 800px;
  height: 50px;
  padding: 10px;
  margin: 5px 55px;
`;

const TBoardDetail = () => {
  const isLogin = window.localStorage.getItem("isLogin");
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
      window.alert("모집 완료되었습니다!");
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
      <div style={{ height: "130px" }}>
        <LogoBox>
          <div className="boardCategory">
            <h1>일 행 구 하 기</h1>
            <span>내 동료가 돼라!</span>
          </div>
        </LogoBox>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          marginTop: "30px",
          backgroundColor: "black",
          zIndex: "1",
        }}
      >
        <div style={{ height: "100%", width: "100%" }}>
          <div style={{ width: "100%" }}>
            <h2 style={{ textAlign: "center" }}>게시물 상세</h2>
          </div>
        </div>
        <div
          className="badgeDiv"
          style={{
            textAlign: "left",
            marginLeft: "110px",
            fontSize: "1.3rem",
          }}
        >
          {boardDetail.gmb_done === "1" ? (
            <span class="badge rounded-pill bg-danger">모집완료</span>
          ) : (
            <span class="badge rounded-pill bg-success">모집중</span>
          )}
        </div>
        <div style={{ height: "900px" }} className="write_table">
          <table
            style={{
              width: "900px",
              marginLeft: "50px",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <ReadTitle>
                <tr class="tableTitle">
                  <th
                    rowSpan={2}
                    style={{
                      width: "90%",
                      fontSize: "1.5rem",
                      verticalAlign: "middle",
                    }}
                  >
                    {boardDetail.gmb_title}
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "30%",
                      fontSize: "1.2rem",
                    }}
                  >
                    {boardDetail.gmb_user_id}
                    <br />
                    {boardDetail.gmb_c_date}
                  </th>
                </tr>
              </ReadTitle>
            </thead>

            <tbody>
              <ReadContents>
                <tr>
                  <td>
                    <pre style={{ fontSize: "1.2rem", fontFamily: "unset" }}>
                      {content}
                    </pre>
                  </td>
                </tr>
              </ReadContents>
              <tr class="table-active">
                <ReadNumber>
                  <td style={{ fontSize: "1.2rem" }}>
                    모집현황 : {boardDetail.gmb_apply}/
                    {boardDetail.gmb_apply_total}
                  </td>
                </ReadNumber>
              </tr>
            </tbody>
          </table>
          <div className="setButton">
            <button className="listBtn" onClick={onClickgoBack}>
              목록
            </button>
            {isLogin === "TRUE" && loginId === boardDetail.gmb_user_id ? (
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
    </Box>
  );
};

export default TBoardDetail;
