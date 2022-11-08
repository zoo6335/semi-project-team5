import "suneditor/dist/css/suneditor.min.css";

import React, { useEffect, useState } from "react";

import Modal from "../../util/Modal";
import SunEditor from "suneditor-react";
import nbApi from "../../api/nbApi";
import styled from "styled-components";

const Box = styled.div`
  border: 4px solid #40baaa;
  border-top: 200px;
  width: 1024px;
  height: auto;
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
  height: auto;
  margin-top: 2rem;
  font-family: "DungGeunMo";
  z-index: 10;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const TEditBoard = () => {
  const localBoardId = window.localStorage.getItem("Detail");
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [applyTotal, setApplyTotal] = useState("");

  const onChangeTitle = (e) => setInputTitle(e.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 세팅
  const onChangeContent = (contentSet) => setInputContent(contentSet);
  const onChangeApplyTotal = (applyTotal) =>
    setApplyTotal(applyTotal.target.value);

  useEffect(() => {
    const BoardData = async () => {
      setLoading(true);
      try {
        const response = await nbApi.onDetail(localBoardId);
        console.log(response.data);
        setInputTitle(response.data[0].gmb_title);
        setInputContent(response.data[0].gmb_content);
        setApplyTotal(response.data[0].gmb_apply_total);
        setId(response.data[0].gmb_id);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    BoardData();
  }, []);

  // 뒤로가기 버튼
  const onCLickgoBack = (e) => {
    e.preventDefault();
    console.log("뒤로가기 버튼 클릭");
    window.location.replace("/TBoardList");
  };

  // 수정완료 버튼 클릭시 모달
  const onClickEdit = (e) => {
    e.preventDefault(); // 모달이 자동으로 꺼지지 않게 설정
    setModalOpen(true);
  };

  // 모달 확인버튼 클릭시 동작
  const confirmModal = async () => {
    setModalOpen(false);
    const res = await nbApi.TBoardListUpdate(
      inputTitle,
      inputContent,
      applyTotal,
      id
    );
    console.log("수정완료 버튼 클릭");
    console.log(res.data.result);
    if (res.data.result === "OK") {
      window.location.replace("/tBoardDetail");
    } else {
      console.log("NOK");
    }
  };

  // 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  if (loading) {
    return <h5>대기 중...</h5>;
  }

  return (
    <Box>
      <div style={{ height: "100%" }}>
        <div style={{ height: "20%" }}>
          <div style={{ height: "98px" }}>
            <LogoBox>
              <div className="boardCategory" style={{ position: "fixed" }}>
                <h1>일 행 구 하 기</h1>
                <span>내 동료가 돼라!</span>
              </div>
            </LogoBox>
          </div>
        </div>
        <div style={{ height: "80%", width: "100%" }}>
          <div style={{ height: "100%", width: "100%" }}>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "15%", margin: "15px" }}>
                <button className="goBackBtn" onClick={onCLickgoBack}>
                  뒤로가기⬅
                </button>
              </div>
              <div style={{ width: "85%" }}>
                <h2
                  style={{
                    textAlign: "center",
                    marginTop: "30px",
                    marginRight: "100px",
                  }}
                >
                  수정하기
                </h2>
              </div>
            </div>
            <div style={{ height: "900px" }} className="write_table">
              <table style={{ width: "900px", margin: "2.8rem" }}>
                <thead>
                  <col style={{ width: "80px" }} />
                  <col style={{ width: "*" }} />
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{ textAlign: "center" }}>
                      제목
                    </th>
                    <td>
                      <input
                        className="title-input"
                        type="text"
                        placeholder="제목을 입력하세요."
                        value={inputTitle}
                        onChange={onChangeTitle}
                        style={{ margin: "2px", width: "100%" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ textAlign: "center" }}>
                      내용
                    </th>
                    <td>
                      <SunEditor
                        // setContents="My contents"
                        showToolbar={true}
                        setDefaultStyle="height: 250px;"
                        onChange={(content) => {
                          onChangeContent(content);
                        }}
                        setContents={inputContent}
                        height="200px"
                        setOptions={{
                          buttonList: [
                            [
                              "bold",
                              "underline",
                              "italic",
                              "strike",
                              "list",
                              "align",
                              "fontSize",
                              "formatBlock",
                              "table",
                              "image",
                            ],
                          ],
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ textAlign: "center" }}>
                      인원수
                    </th>
                    <td>
                      <input
                        className="number-input"
                        type="number"
                        value={applyTotal}
                        onChange={onChangeApplyTotal}
                        min={1}
                        max={6}
                        style={{ margin: "1px", width: "50%" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="submitBtn" onClick={onClickEdit}>
                작성완료
              </button>
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
            수정하시겠습니까?
          </Modal>
        )}
      </div>
    </Box>
  );
};

export default TEditBoard;
