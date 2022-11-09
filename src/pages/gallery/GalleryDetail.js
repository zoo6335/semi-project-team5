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
const Button = styled.button`
width: 150px;
height: 50px;
margin: 0 auto;
border-radius: 40px 80px / 80px 40px;
border: 3px dotted #40BAAA;
background-color: rgb(0, 0, 0);
align-items: center;

  & + & {
    margin-left : 100px;
  }
`;
const ButtonContainer = styled.div`
  width: 400px;

  flex-wrap: wrap reverse;
`
const ReadTitle = styled.div`
  border: 3px dotted #40BAAA;
  border-radius: 40px 80px / 80px 40px;
  width: 800px;
  height: 80px;
  padding: 10px;
  margin: 5px 55px;
`;

const ReadContents = styled.div`
  border: 3px dotted #40BAAA;
  border-radius: 40px 80px / 80px 40px;
  width: 800px;
  height: 550px;
  padding: 10px;
  margin: 5px 55px;
`;
const GalleryDetail = () => {
  const isLogin = window.localStorage.getItem("isLogin");
  const loginId = window.localStorage.getItem("userId");
  const getDetail = window.localStorage.getItem("Detail");
  const [galleryDetail, setGalleryDetail] = useState("");
  const [content, setContent] = useState("");
  const [image_url, setImg_url] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const BoardData = async () => {
      try {
        const response = await DjApi.galleryDetail(getDetail);
        console.log(response.data);
        setGalleryDetail(response.data[0]);
        setContent(response.data[0].content.replace(/<[^>]*>?/g, ""));
        console.log(galleryDetail)
      } catch (e) {
        console.log(e);
      }
    };
    BoardData();
  }, []);


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

  const confirmModal = async () => {
    setModalOpen(false);
    const res = await DjApi.galleryDelete(getDetail);
    console.log("삭제 버튼 클릭");
    console.log(res.data.result);
    if (res.data.result === "OK") {
      window.location.replace("/gallery");
    } else {
    }
  };

  // 버튼 누를 시 삭제 기능 끝
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
      <Box>
        <table
            style={{
              width: "900px",
              marginLeft: "50px",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <ReadTitle>
                <tr class="tableTitle">
                  <th
                    rowSpan={2}
                    style={{
                      width: "90%",
                      fontSize: "1.5rem",
                      verticalAlign: "middle",
                    }}
                  >
                    {galleryDetail.title}
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "30%",
                      fontSize: "1.2rem",
                    }}
                  >
                    {galleryDetail.user_id}
                    <br />
                    {galleryDetail.create_date}
                  </th>
                </tr>
              </ReadTitle>
            </thead>

              <ReadContents style={{"textAlign" : "center", "alignContent": "center"}}>
                  <img src={`${galleryDetail.image_url}`} alt = "" style={{ "width":"400px", "height":"400px" , "marginTop" : "20px"}}/>
                  <p style={{"margin": "50px auto"}}>{content}</p>
              </ReadContents>
          </table>
        <ButtonContainer>
        {isLogin === "TRUE" && loginId === galleryDetail.user_id ? (
          <>
            <Button onClick={onClickDelete}>삭제하기</Button>
            <Button onClick={onClickEdit}>수정하기</Button>
            </> )
          : (<></>)}
        {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="삭제">정말 삭제하시겠습니까?</Modal>}
        </ButtonContainer>
      </Box>
  )
};

export default GalleryDetail;
