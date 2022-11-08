import './FreeBoardStyle.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState } from 'react';
import Api from "../../api/FbApi";
import Modal from '../../util/Modal';
import styled from 'styled-components';

const BoardBlock = styled.div`
  .buttonBox {
    width: 800;
    padding-right: 50px;
    text-align: center;
  }
  
  border: 4px solid #40BAAA;
  border-top: none;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
    
  &.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 500px;
  }
  
  .boardWriteCT{
    display: flex;
    justify-content:space-between;
  }
  `
  const BoardTitle = styled.div`
  display: flex;
  height:100px;
  padding: 30px;

    & p {
      font-size: 2.6em;
      font-family: "SFont";
      font-weight: bold;
      color: #40BAAA;
    }
  `

  const BoardCategory = styled.div`
  display: inline-block;
  margin: 0 auto;
    & select {
      height: 40px;
      color: gray;
    }
  `
  const Input = styled.input`
  width: 79%;
  height: 40px;
  margin: 10px 0px 10px 10px; 
  padding: 0 0 0 10px;
  `

  const Button = styled.button`
  display :inline-block;
  font-family: "Sfont";
  font-size: 1.4em;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 2px gray;
  width: 100px;
  height: 40px;
  background-color: #ed9dcc;
  border: none;
  border-radius: 6px;
  box-shadow: 3px 3px 2px gray;
  margin: 10px;
    &:hover {
    background-color: #dbdbdb;
    }
  `

const FreeBoardWrite = () => {
  
  // 모달 팝업
  const [modalOpen, setModalOpen] = useState(false);
  const [xModalOpen, setXModalOpen] = useState(false);
  // 에러 모달 팝업
  const [errModalOpen, setErrModalOpen] = useState(false);
  const [errModalText, setErrModelText] = useState("입력 사항을 다시 확인해주세요.");

  const [fb_category, setFb_Category] = useState("");
  const [fb_title, setFb_Title] = useState("");
  const [fb_content, setFb_Content] = useState("");
  const getFb_user_id = window.localStorage.getItem("userId")

  const onChangeCategory = (e) => setFb_Category(e.target.value);
  const onChangeTitle = (e) => setFb_Title(e.target.value);
  const onChangeContent = (e, editor) => {
    const data = editor.getData();
    console.log(data);
    setFb_Content(data);
  }
  
  // 게시글 등록 취소 버튼 모달
  const closeModal = (e) => {
    setModalOpen(false);
  };

  // 게시글 등록 확인 버튼 모달
  const confirmModal = async() => {
    setModalOpen(false);
    const res = await Api.fBoardCreate(fb_category, getFb_user_id, fb_title, fb_content);
    console.log(res.data.result);
    if(res.data.result === "OK") {
        window.location.replace("/totalBoard");
        // 에러 모달
    } else {
      if (fb_category === "" || fb_category === "none") {
        setErrModalOpen(true);
        setErrModelText("말머리를 선택하세요.");
      } else if (fb_title === "") {
        setErrModalOpen(true);
        setErrModelText("제목을 입력하세요.");
      } else if (fb_content === "") {
        setErrModalOpen(true);
        setErrModelText("내용을 입력하세요.");
      } else {
        setErrModalOpen(true);
        setErrModelText("게시글 업로드 실패");
      }  
      }
    };

  // 게시글 등록 모달 띄우기
  function onClickCreate(e) {
    e.preventDefault();
    setModalOpen(true);
  }

  // 게시글 취소 취소 버튼 모달
  const xCloseModal = (e) => {
    setXModalOpen(false);

  };

  // 게시글 취소 확인 버튼 모달
  const xConfirmModal = async() => {
    setXModalOpen(false);
    window.location.replace("/totalBoard");
  };

  // 게시글 취소 모달 띄우기
  const onClickCancel = (e) => {
    e.preventDefault();
    setXModalOpen(true);
  }

  // 에러 모달
  const errCloseModal = () => {
    setErrModalOpen(false);
  };

  return (
    <BoardBlock>
      <BoardTitle>
        <p>게시글 작성</p>
      </BoardTitle>
      <form>
        <div className='boardWriteCT'>
          <BoardCategory>
              <select  value={fb_category} onChange={onChangeCategory}>
                <option value="none" defaultValue>=== 선택 ===</option>
                <option value="[자유글]">[자유글]</option>
                <option value="[양도/교환]">[양도/교환]</option>
                <option value="[테마추천]">[테마추천]</option>
                <option value="[방탈출팁]">[방탈출팁]</option>
              </select>
          </BoardCategory>
            <Input  type='text' value={fb_title}  onChange={onChangeTitle} placeholder='제목을 입력해주세요.' />
          </div>
          <CKEditor
            editor={ClassicEditor}
            config={{placeholder:"자유롭게 작성해주세요😊"}}
            data="" 
            onChange={onChangeContent}
          />
          <div className='buttonBox'>
            <Button onClick={onClickCancel}>취소</Button>
            <Button onClick={onClickCreate}>등록</Button>
          </div>
      </form>
      {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="확인">등록하시겠습니까?</Modal>}
      {xModalOpen && <Modal open={xModalOpen} confirm={xConfirmModal} close={xCloseModal} type={true} header="확인">정말 취소하시겠습니까?</Modal>}
      <Modal open={errModalOpen} close={errCloseModal} header="미입력">{errModalText}</Modal>
    </BoardBlock>
  );
};
export default FreeBoardWrite;