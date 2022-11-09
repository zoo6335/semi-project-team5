import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import DjApi from "../../api/DjApi";
import Modal from "../../util/Modal";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

const Box = styled.div`
  border: 4px solid #40BAAA;
  border-top: none;
  width: 1024px;
  height: 720px;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;

  .photo {
    display: none;
  }
`


const Input = styled.input`
width: 500px;
height: 50px;
border-radius: 40px 80px / 80px 40px;
border: 3px dotted #40BAAA;
background-color: rgb(0, 0, 0);
::placeholder {
  color: cornsilk;
}
`;

const Button = styled.button`
width: 150px;
height: 50px;
margin: 0 auto;
border-radius: 40px 80px / 80px 40px;
border: 3px dotted #40BAAA;
background-color: rgb(0, 0, 0);
align-items: center;

  & + & {
    margin-left : 50px;
  }
`;

const EditGallery = () => {
  const localBoardId = window.localStorage.getItem("Detail");
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [id, setId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onChangeTitle = (e) => setInputTitle(e.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 세팅
  const onChangeContent = (contentSet) => setInputContent(contentSet);
  // 수정완료 버튼 클릭시 모달
  const onClickEdit = (e) => {
    e.preventDefault(); // 모달이 자동으로 꺼지지 않게 설정
    setModalOpen(true);
  };

  // 모달 확인버튼 클릭시 동작
  const confirmModal = async () => {
    setModalOpen(false);
    const res = await DjApi.galleryUpdate(
      id,
      inputTitle,
      inputContent,
    );
    console.log("수정완료 버튼 클릭");
    console.log(res.data.result);
    if (res.data.result === "OK") {
      window.location.replace("/galleryDetail");
    } else {
      console.log("NOK");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const BoardData = async () => {
      try {
        const response = await DjApi.galleryDetail(localBoardId);
        setInputTitle(response.data[0].title);
        setInputContent(response.data[0].content);
        setId(response.data[0].id);
      } catch (e) {
        console.log(e);
      }
    };
    BoardData();
  }, []);

  return (
      <Box>
        {/* {showImage} */}
        <div style={{ marginTop: 50 }}>
          <Input value={`${inputTitle}`} onChange={onChangeTitle} />
        </div>
        <div id="editor" style={{ marginTop: 50, minHeight: 400 }}>
          <SunEditor
            // setContents="My contents"
            showToolbar={true}
            setDefaultStyle="height: 300px;"
            onChange={(content) => {
              onChangeContent(content);
            }}
            setContents={inputContent}
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
        </div>
        <Button onClick={onClickEdit}>수정</Button>
        {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="갤러리 수정">글을 수정하시겠습니까?</Modal>}
      </Box>
  )
};

export default EditGallery;
