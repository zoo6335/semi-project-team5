import React from 'react';
import '../FreeBoardStyle.css';
import FBoardList from './Components/BoardListTable';
import styled from 'styled-components';
import BoardTitleHeader from './Components/BoardTitle';
import BoardCategory from './Components/BoardNav';
import BoardWriteButton from './Components/BoardWriteButton';

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

const FreeBoardMain = () => {

  return (
    <BoardBlock>
      <BoardTitleHeader />
      <BoardCategory />
      <BoardWriteButton />
      <FBoardList />
    </BoardBlock>
  );
};
export default FreeBoardMain