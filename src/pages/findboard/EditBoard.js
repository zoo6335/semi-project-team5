import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import nbApi from "../../api/nbApi";
import Modal from "../../util/Modal";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";


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

const TEditBoard = () => {

  const localBoardId = window.localStorage.getItem ("Detail");
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  

  const onChangeTitle = (e) => setInputTitle(e.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 세팅
  const onChangeContent = (contentSet) => setInputContent(contentSet);

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
    const res = await nbApi.TBoardListUpdate(inputTitle,inputContent,id);
    console.log("수정완료 버튼 클릭");
    console.log(res.data.result);
    if (res.data.result === "OK") {
      window.location.replace("/tBoardDetail");
    } else {
      console.log("NOK");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  
  useEffect(() => {
    const BoardData = async () => {
      setLoading(true);
      try {
        const response = await nbApi.onDetail(localBoardId);
        console.log(response.data);
        setInputTitle(response.data[0].gmb_title);
        setInputContent(response.data[0].gmb_content);
        setId(response.data[0].gmb_id);

      } catch (e) {
        console.log(e);
      }
      setLoading(false)  
    };
    BoardData();
  },[]);

  if (loading) {
    return <h5>대기 중...</h5>;
  }

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
                <h1 style={{ textAlign: "center" }}>수정하기</h1>
              </div>
            </div>
            <div style={{height:"900px"}} className="table">
            {/* {boardDetail &&
          boardDetail.map((detail) => ( */}
            <table style={{width:"1000px", margin:"15px"}}>
              <thead>
                <col style={{width:"85px"}}/>
                <col style={{width:"*"}}/>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">제목</th>
                  <td>
                  <input className="title-input" type="text" placeholder="제목을 입력하세요."
                    value={inputTitle} onChange={onChangeTitle} style={{margin:"1px", width:"100%"}}/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">내용</th>
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
              </tbody>
            </table>
            {/* ))} */}
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
          작성하시겠습니까?
          </Modal>
        )}
        </div>
    </Box>
    // <Box>
    // <div className="boardWrite-form">
    //   <LogoBox>
    //     <div className="boardCategory">
    //       <h1>일 행 구 하 기</h1>
    //       <span>내 동료가 돼라!</span>
    //     </div>
    //   </LogoBox>
    //   <h1 style={{ textAlign: "center", color : "cornsilk" }}>수정하기</h1>
    //   <div>
    //     {boardDetail &&
    //       boardDetail.map((detail) => (
    //         <Form className="detailForm" key={detail.gmb_id}>
    //           <Form.Group className="detailTitle">
    //           <Form.Control type="text" defaultValue={detail.gmb_title}/>
    //             {/* <span value={detail.gmb_user_id}></span> */}
    //             </Form.Group>
    //           <Form.Group className="detailContent">
    //       <SunEditor
    //         // setContents="My contents"
    //         showToolbar={true}
    //         setDefaultStyle="height: 250px;"
    //         value="<p>The editor's default value</p>"
    //         // default={detail.gmb_content}
    //         onChange={(content) => {
    //           onChangeContent(content);
    //         }}
    //         setContents ={inputContent}
    //         height="500px"
    //         setOptions={{
    //           buttonList: [
    //             [
    //               "bold",
    //               "underline",
    //               "italic",
    //               "strike",
    //               "list",
    //               "align",
    //               "fontSize",
    //               "formatBlock",
    //               "table",
    //               "image",
    //             ],
    //           ],
    //         }}
    //       />
    //       </Form.Group>
    //     <button className="submitBtn" onClick={onClickEdit}>
    //       작성완료
    //     </button>
    //     </Form>
    //           ))}
    //     </div>
    //     <div>

    //        {modalOpen && (
    //       <Modal
    //         open={modalOpen}
    //         confirm={confirmModal}
    //         close={closeModal}
    //         type={true}
    //         header="확인"
    //       >
    //         수정하시겠습니까?
    //       </Modal>
    //     )}
    //     </div>
    //     </div>
    // </Box>
);
};

export default TEditBoard;
