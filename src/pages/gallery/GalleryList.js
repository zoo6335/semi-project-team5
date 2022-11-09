import { useState, useEffect } from "react";
import styled from "styled-components";
import DjApi from "../../api/DjApi";
import Footer from "../../components/Footer";



const Box = styled.div`
  border: 4px solid #40BAAA;
  border-top: none;
  width: 1024px;
  height: 900px;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ImgContainer = styled.image`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 10px;
  column-gap: 10px;
  width: 720px;
  height: 800px;
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
    margin-left : 50px;
  }
`;


const GalleryList = () => {
  const isLogin = window.localStorage.getItem("isLogin");
  // if(isLogin === "FALSE") window.location.replace("/");


  const [galleryList, setGalleryList] = useState("");
  useEffect(() => {
    const BoardData = async () => {
      try {
        const response = await DjApi.galleryList("ALL");
        setGalleryList(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    BoardData();
  }, []);

  // 상세페이지 이동
  const onClickDetail = (val) => {
    console.log("상세 게시판으로 이동 : " + val);
    window.localStorage.setItem("Detail", val);
    window.location.replace("/galleryDetail");
  };

  // 글쓰기 페이지로 이동
  const onClickWrite = (e) => {
    e.preventDefault();
    console.log("글쓰기 페이지로 이동");
    window.location.replace("/galleryReg");
  };

  return (
    <>
      <Box>
        {/* 이미지 미리보기 형식으로 올라갈 예정 */}
        <ImgContainer>
          {galleryList && 
          galleryList.map((list) =>
          <div>
            <img src={`${list.image_url}`} alt="이미지!!!" onClick={() => onClickDetail(list.id)} style={{"width" : "220px", "height" : "240px"}} />
              </div>
          )}
        </ImgContainer>
        {isLogin != "FALSE" ? isLogin &&  (
        <>
          <Button onClick={onClickWrite}>
            갤러리 작성
          </Button>
        </>) 
        : <></>}
      </Box>
      </>
  )
}

export default GalleryList;