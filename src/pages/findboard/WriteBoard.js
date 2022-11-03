import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import nbApi from "../../api/nbApi"
import Modal from "../../util/Modal";
// import ReactHtmlParser from "html-react-parser";

const WriteBoard = () => {

  // 뒤로가기 버튼
  const onCLickgoBack = (e) => {
    e.preventDefault();
    console.log("뒤로가기 버튼 클릭");
    window.location.replace("/TBoardList");
  };
  const gmb_user_id = window.localStorage.getItem("userId");
  const [gmb_title, setGmb_title] = useState("");
  const [gmb_content, setGmb_content] = useState("");
  const [resData, setResData] = useState(""); // 서버에서 받는 결과 데이터
  const [modalOpen, setModalOpen] = useState(false);

  const onChangeTitle = (e) => setGmb_title(e.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 세팅
  const onChangeContent = (contentSet) => setGmb_content(contentSet);

  // const LogoBox2 = styled.div`
  //   box-sizing: border-box;
  //   padding-bottom: 3em;
  //   width: 1024px;
  //   margin: auto;
  //   margin-top: 2rem;
  //   font-family: "DungGeunMo";
  //   @media screen and (max-width: 768px) {
  //     width: 100%;
  //     padding-left: 1em;
  //     padding-right: 1em;
  //   }
  // `;

  // const WriteBox2 = styled.div`
  //   box-sizing: border-box;
  //   padding-bottom: 3em;
  //   width: 1024px;
  //   margin: auto;
  //   margin-top: 2rem;
  //   font-family: "DungGeunMo";
  //   @media screen and (max-width: 768px) {
  //     width: 100%;
  //     padding-left: 1em;
  //     padding-right: 1em;
  //   }
  // `;

  const onClick = (e) => {
    e.preventDefault(); // 모달이 자동으로 꺼지지 않게 설정
    setModalOpen(true);
  };

  // 작성완료 버튼이 눌려지면 동작하는 함수, 함수가 비동기 통신을 해야 하므로 async 키워드 추가
  const confirmModal = async () => {
    setModalOpen(false);
    // 서버에 대한 요청을 비동기로 처리 함
    const res = await nbApi.onWrite(gmb_user_id, gmb_title, gmb_content);
    setResData(res.data);
    console.log("작성완료 버튼 클릭");
    console.log(res.data.result);
    if (res.data.result === "OK") {
      window.location.replace("/tBoardList");
    } else {
    }
  };

  // 모달 닫힘
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Form className="boardWrite-form">
      <div className="boardCategory">
        <h1>일 행 구 하 기</h1>
        <span>내 동료가 돼라!</span>
      </div>
      <button className="goBackBtn" onClick={onCLickgoBack}>
        ⬅
      </button>
      <h1 style={{ textAlign: "center" }}>새글쓰기</h1>
      <div>
          <input 
            className="title-input"
            type="text"
            placeholder="제목을 입력하세요."
            value={gmb_title}
            onChange={onChangeTitle}
          />
          </div>
          <SunEditor
            // setContents="My contents"
            showToolbar={true}
            setDefaultStyle="height: auto"
            onChange={(content) => {
              onChangeContent(content);
            }}
            setContents ={gmb_content}
            height="500px"
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
        <button className="submitBtn" onClick={onClick}>
          작성완료
        </button>
      {resData &&
        resData.map((list) => (
          <>
            <p>
              key={list.index}제목 : {list.title}
            </p>
            <p>
              key={list.index}내용 : {list.content}
            </p>
          </>
        ))}
      {modalOpen && (
        <Modal
          open={modalOpen}
          confirm={confirmModal}
          close={closeModal}
          type={true}
          header="확인"
        >
          작성하시겠습니까?
        </Modal>
      )}
    </Form>
  );
}

export default React.memo(WriteBoard);

