import { useState, useEffect } from 'react';
import Api from "../../api/FbApi"
import './style.css'
import Modal from '../../util/Modal';
import CommentList from "../../components/comment/CommentList";

const BoardDetail = () => {
  const getDetail = window.localStorage.getItem("Detail");
  const [boardDetail, setBoardDetail] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  const confirmModal = async () => {
    setModalOpen(false);
    const memberReg = await Api.fBoardDelete(getDetail);
    console.log(memberReg.data.result);
    if (memberReg.data.result === "OK") {
      window.location.replace("/");
    } else {

    }
  };

  // 게시글 목록으로 이동
  function onClickMain() {
    window.location.replace("/");
  }

  // 게시글 공유
  function onClickShare() {
    return (
      <></>
    )
  }

  // 게시글 수정
  const onClickUpdate = (val) => {
    console.log("게시글 수정페이지로 이동 : " + val);
    window.location.replace("/BoardUpdate");
  }

  // 게시글 삭제(삭제 확인 모달)
  function onClickDelete() {
    setModalOpen(true);
  }

  useEffect(() => {
    const boardData = async () => {

      try {
        const response = await Api.boardDetail(getDetail); // 전체 회원 조회
        setBoardDetail(response.data);
        console.log(response.data)
      } catch (e) {
        console.log(e);
      }
    };
    boardData();
  }, []);

  return (
    <>
      <body className='container'>
        <div className="board-read-body">
          <div className='board-title'>
            <h2>게시판</h2>
          </div>
          <div className="board-read-top-button">
            <button className="share-button" onClick={onClickShare}>공유</button>
            <button className="read-main-button" onClick={onClickMain}>글목록</button>
          </div>
          <div>
            {boardDetail && boardDetail.map(list => (
              <div key={list.fb_id}>
                {/* <p className="read-category">{list.fb_category}</p> */}
                <div className="read-title">{list.fb_category} {list.fb_title}</div>
                <div className="read-info">
                  {/* fb_id는 display:none으로 숨겨 놓을 예정 */}
                  <div className="user_id">작성자 : {list.fb_user_id}</div>
                  <div className="date">작성일 : {list.fb_c_date}</div>
                  <div className="viewNum">조회수 : {list.fb_hit}</div>
                  <p className="fb_id">{list.fb_id}</p>
                </div>
                <div className="read-contents">{list.fb_content}</div>
              </div>
            ))}
          </div>

          <div className="read-contents-UD">
            <button className="update" onClick={() => onClickUpdate(getDetail)}>수정</button>
            <button className="delete" onClick={onClickDelete}>삭제</button>
          </div>
          {/* 댓글 컴포넌트 입니다! */}
          <CommentList /> 

          {/* 댓글 컴포넌트로 분리 예정 */}
          {/* <div className="comment">
            <div className="comment-read-box">
              <div>작성자</div>
              <div>작성 날짜</div>
              <div>댓글 내용</div>
              visibility:hidden 로그인id와 댓글 작성자id가 일치하는 경우에만 hidden 해제
              <div className="comment-UD">
                <button className="comment-update" onClick={onClickUpdate}>수정</button>
                <button className="comment-delete" onClick={onClickDelete}>삭제</button>
              </div>
            </div>
              <div className="comment-write-box">
                <p>작성자</p>
                <p>댓글 내용</p>
                <div className="comment-create">
                  <button>등록</button>
                </div>
              </div>
          </div> */}
        </div>
        {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="확인">정말 삭제하시겠습니까?</Modal>}
      </body>
    </>
  )
}
export default BoardDetail
