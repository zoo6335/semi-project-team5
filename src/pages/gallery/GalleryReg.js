import { useRef, useState } from "react";
import DjApi from "../../api/DjApi";
import styled from "styled-components";
import React, { Component } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import Modal from "../../util/Modal";
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

const GalleryReg = () => {



  const [title, setTitle] = useState("");
  // const [img_url, setImg_url] = useState("");
  const [inputContent, setInputContent] = useState("");

  // const [imageFile, setImageFile] = useState<UploadImage | null>(null);
  const [resData, setResData] = useState("");

  const loginId = window.localStorage.getItem("userId");
  const isLogin = window.localStorage.getItem("isLogin")
  // if(isLogin === "FALSE") window.location.replace("/");


  const onChangeTitle = e => setTitle(e.target.value);

  const onChangeContent = (e) => setInputContent(e);

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  // 임시로 이미지 주소 넣어줌
  const img_url = '/assets/gallery1.jpg';

  const confirmModal = async () => {
    setModalOpen(false);
    // 서버에 대한 요청을 비동기로 처리 함
    const res = await DjApi.galleryReg(title, inputContent, img_url, loginId);
    console.log("작성완료 버튼 클릭");
    console.log(res.data.result);

    if (res.data.result === "OK") {
      window.location.replace("/gallery");
    }
  };


  const onSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  }


  return (
      <Box>
        {/* {showImage} */}
        <div style={{ marginTop: 50 }}>
          <Input placeholder="  제목을 입력하세요." onChange={onChangeTitle} />
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
        <Button onClick={onSubmit}>등록</Button>
        {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="갤러리 작성">글을 등록하시겠습니까?</Modal>}
      </Box>
  );
}

export default GalleryReg;