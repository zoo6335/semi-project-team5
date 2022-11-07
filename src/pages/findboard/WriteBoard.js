import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import nbApi from "../../api/nbApi"
import Modal from "../../util/Modal";
// import ReactHtmlParser from "html-react-parser";

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

const WriteBoard = () => {

  // 뒤로가기 버튼
  const onCLickgoBack = (e) => {
    e.preventDefault();
    console.log("뒤로가기 버튼 클릭");
    window.location.replace("/TBoardList");
  };
  const gmb_user_id = window.localStorage.getItem("userId");

  // 로그인 상태가 아닐때는 글작성할 수 없게
  const isLogin = window.localStorage.getItem("isLogin");
  if(isLogin === "FALSE") window.location.replace("/");

  const [titleInput, setTitleInput] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [applyTotal, setApplyTotal] = useState("");

  const onChangeTitle = (titleInput) => setTitleInput(titleInput.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 세팅
  const onChangeContent = (contentSet) => setInputContent(contentSet);
  const onChangeApplyTotal = (applyTotal) => setApplyTotal(applyTotal.target.value);

  const onClick = (e) => {
    e.preventDefault(); // 모달이 자동으로 꺼지지 않게 설정
    setModalOpen(true);
  };

  // 작성완료 버튼이 눌려지면 동작하는 함수, 함수가 비동기 통신을 해야 하므로 async 키워드 추가
  const confirmModal = async () => {
    setModalOpen(false);
    // 서버에 대한 요청을 비동기로 처리 함
    const res = await nbApi.onWrite(gmb_user_id, titleInput, inputContent, applyTotal);
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
    <Box>
      <div style={{height:"100%"}}>
        <div style={{height:"20%"}}>
          <div style={{height:"130px"}}>
            <LogoBox>
              <div className="boardCategory">
                <h1>일 행 구 하 기</h1>
                <span>내 동료가 돼라!</span>
              </div>
            </LogoBox>
          </div>
        </div>
        <div style={{height:"80%"}}>
          <div style={{height:"100%", width:"100%"}}>
            <div style={{display:"flex", width:"100%"}}>
              <div style={{width:"10%"}}>
                <button className="goBackBtn" onClick={onCLickgoBack}>
                 뒤로가기⬅
                </button>
              </div>
              <div style={{width:"80%"}}>
                <h1 style={{ textAlign: "center" }}>새글쓰기</h1>
              </div>
            </div>
            <div style={{height:"900px"}} className="table">
            <table style={{width:"1000px", margin:"15px"}}>
              <thead>
                <col style={{width:"80px"}}/>
                <col style={{width:"*"}}/>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{textAlign:"center"}}>제목</th>
                  <td>
                  <input className="title-input" type="text" placeholder="제목을 입력하세요."
                    value={titleInput} onChange={onChangeTitle} style={{margin:"1px", width:"100%"}}/>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{textAlign:"center"}}>내용</th>
                  <td>
                  <SunEditor
                    // setContents="My contents"
                    showToolbar={true}
                    setDefaultStyle="height: 250px;"
                    onChange={(content) => {
                      onChangeContent(content);
                    }}
                    setContents ={inputContent}
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
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{textAlign:"center"}}>인원수</th>
                  <td>
                  <input className="number-input" type="number"
                    value={applyTotal} onChange={onChangeApplyTotal} min={1} max={6} style={{margin:"1px", width:"50%"}}/>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="submitBtn" onClick={onClick}>
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
          작성하시겠습니까?
          </Modal>
        )}
        </div>
    </Box>
  );
}

export default React.memo(WriteBoard);

