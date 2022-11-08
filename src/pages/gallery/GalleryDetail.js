import "suneditor/dist/css/suneditor.min.css";
import DjApi from "../../api/DjApi";
import Modal from "../../util/Modal";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const GalleryDetail = () => {
  // 현재 로그인한 아이디 정보 가져오기
  const loginId = window.localStorage.getItem("userId");
  const getDetail = window.localStorage.getItem("Detail");
  const [galleryDetail, setGalleryDetail] = useState("");
  const [content, setContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const BoardData = async () => {
      try {
        const response = await DjApi.galleryDetail(getDetail);
        setGalleryDetail(response.data[0]);
        setContent(response.data[0].content.replace(/<[^>]*>?/g, ""));
      } catch (e) {
        console.log(e);
      }
    };
    BoardData();
  }, []);


  //목록가기 버튼 클릭
  const onClickgoBack = (e) => {
    console.log("목록가기 버튼 클릭");
    e.preventDefault();
    window.location.replace("/galleryList");
  };

  // 버튼 누를 시 게시물 수정 화면으로 이동
  const onClickEdit = (e) => {
    e.preventDefault();
    window.location.replace("/editGallery");
  };

  // 버튼 누를 시 삭제 기능 시작
  const onClickDelete = (e) => {
    e.preventDefault(); // 모달이 자동으로 꺼지지 않게 설정
    setModalOpen(true);
  };
  // 삭제버튼 클릭시 모달
  const confirmModal = async () => {
    setModalOpen(false);
    const res = await DjApi.galleryDelete(getDetail);
    console.log("삭제 버튼 클릭");
    console.log(res.data.result);
    if (res.data.result === "OK") {
      window.location.replace("/galleryList");
    } else {
    }
  };

  // 버튼 누를 시 삭제 기능 끝
  const closeModal = () => {
    setModalOpen(false);
  };



  return (
    <Box>
      <div style={{ height: "100%" }}>
        <div style={{ height: "80%" }}>
          <div style={{ height: "100%", width: "100%" }}>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "100%" }}>
                <h1 style={{ textAlign: "center" }}>게시물 상세</h1>
              </div>
            </div>
            <div style={{ height: "900px" }} className="table">
              <table style={{ width: "900px", marginLeft: "50px" }}>
                <thead>
                  <tr class="table-active">
                    <th scope="col" style={{ width: "60%" }}>
                      <br />
                      제목 : {galleryDetail.title}
                    </th>
                    <th
                      scope="col"
                      style={{ width: "40%", textAlign: "right" }}
                    >
                      작성자 : {galleryDetail.user_id}
                      <br />
                      작성일 : {galleryDetail.gal_c_date}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <pre>{content}</pre>
                    </td>
                  </tr>
                  <tr class="table-active">
                  </tr>
                </tbody>
              </table>
              <div className="setButton">
                <button className="listBtn" onClick={onClickgoBack}>
                  목록
                </button>
                {loginId === galleryDetail.user_id ? (
                  <>
                    <button className="deleteBtn" onClick={onClickDelete}>
                      삭제
                    </button>
                    <button className="editBtn" onClick={onClickEdit}>
                      수정
                    </button>
                    
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
          <Modal
            open={modalOpen}
            confirm={confirmModal}
            close={closeModal}
            type={true}
            header="갤러리 삭제">
            글을 삭제하시겠습니까?
          </Modal>
        )}
      </div>
    </Box>
  );
};

export default GalleryDetail;
