import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FBoardList from './Components/BoardListTable';
// import Paging from '../Pagination/Pagination';

const FreeBoardMain = () => {

  function onClickWrite() {
    window.location.replace("/BoardWrite");
  };

  function onClickMain() {
    window.location.replace("/");
  };

  function onClickFree() {
    window.location.replace("/BoardFree");
  }

  function onClickTrade() {
    window.location.replace("/BoardTrade");
  }

  function onClickRecommend() {
    window.location.replace("/BoardRecommend");
  }

  function onClickTip() {
    window.location.replace("/BoardTip");
  }

  return (
    <div className="container">
      <div className='board-title'>
        <h2>게시판</h2>
      </div>
      <div className='board-nav'>
        <ul>
          <li onClick={onClickMain}>전체글</li>
          <li onClick={onClickFree}>자유글</li>
          <li onClick={onClickTrade}>양도/교환</li>
          <li onClick={onClickRecommend}>테마추천</li>
          <li onClick={onClickTip}>방탈출팁</li>
        </ul>
      </div>
      <div className="board-list">
        <div className='board-write-button'>
          {/* 로그인하지 않은 경우에는 작성 안되도록 모달창 띄우기 구현 예정 */}
          <button onClick={onClickWrite}>작성하기</button>
        </div>
        <div className="container-sm">
          <FBoardList />
        </div>
        {/* <Paging /> */}
      </div>
    </div>
  );
}
export default FreeBoardMain