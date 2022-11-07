import React, { useState } from 'react';
import '../../FreeBoardStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TradeBoardList from '../Components/TradeBoardList';
import Modal from '../../../../util/Modal';
import styled from 'styled-components';
import TitleImg from '../images/boardTitleImg-text.png';

const FreeBoardTrade = () => {

  const getisLogin = window.localStorage.getItem("isLogin");
  const [ModalOpen, setModalOpen] = useState(false);

  const CloseModal = () => {
    setModalOpen(false);
  };

  // 글 작성 권한 설정  //모달창 안뜸.. 수정 필요
  const onClickWrite = (e) => {
    if(getisLogin !== "TRUE") {
      e.preventDefault();
      setModalOpen(true);
      window.location.replace("/login")
    } else {
    window.location.replace("/BoardWrite")
    }
  };

  function onClickMain() {
    window.location.replace("totalBoard");
  };

  function onClickFree() {
    window.location.replace("/BoardFree");
  };

  function onClickTrade() {
    window.location.replace("/BoardTrade");
  };

  function onClickRecommend() {
    window.location.replace("/BoardRecommend");
  };

  function onClickTip() {
    window.location.replace("/BoardTip");
  };

  return (
    <BoardBlock>
      <BoardTitle>
          {/* <p><h2>게시판</h2></p> */}
          <div><img src={TitleImg} alt="board-title-img"/></div>
          <div></div>
      </BoardTitle>
      <BoardNav>
          <p className='category' onClick={onClickMain}>전체글</p>
          <p className='category' onClick={onClickFree}>자유글</p>
          <p className='category' onClick={onClickTrade}>양도/교환</p>
          <p className='category' onClick={onClickRecommend}>테마추천</p>
          <p className='category' onClick={onClickTip}>방탈출팁</p>
      </BoardNav>
        <div>
          <Button onClick={onClickWrite}>작성하기</Button>
        </div>
          <TradeBoardList />
        {/* <Paging /> */}
        <Modal open={ModalOpen} close={CloseModal}>로그인 후 이용 부탁드립니다.</Modal>
    </BoardBlock>
  );
};
const BoardBlock = styled.div`
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
  }
`
const BoardTitle = styled.div`
    & img {
      width: 800px
    }
    & p {
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    & h2 {
      font-family: "LFont";
      text-align: center;
      font-size: 3em;
    }
`
const BoardNav = styled.div `
display: flex;
align-items: center;
justify-content: space-evenly;
margin: auto 200px;
  .category {
    display: inline;
    padding: 10px 20px;
    font-family: "MFont";
    font-size: 1.4em;
    font-weight: bold;
    color: #8DC0F1;
      &:hover {
        background-color: #dbdbdb77;
        border-radius: 5px;
      }
    }
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
  border-radius: 8px;
    &:hover {
      background-color: #dbdbdb;
    }
`
export default FreeBoardTrade