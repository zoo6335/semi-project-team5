import { Link } from "react-router-dom";
import "./About.css";
import styled from "styled-components";
import team5 from "./images/teamPic.png";

// const Box = styled.div`
//   border: 4px solid #40BAAA;
//   border-top: none;
//   width: 1024px;
//   height: 900px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// const IntoTable = styled.table`

// margin: auto;
// text-align: center;
// justify-content: center;
// border-bottom: 1xp dashed gray;

// padding-block: var(--padding-lg);

// `
// const Tabletd = styled.td`

// margin: auto;
// border-bottom: 1px dashed gray;

// `
const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const Intro = () => {
  return (
    <>
      <div className="container-About2 ">
        <div className="text-center">
          <h2 className="member-title" style={{color:"black"}}>안녕하세요 나가방입니다.</h2>

          <div className="intromebers">
            <h3 style={{color:"black"}}>조원 : 조동주,정재이,박하늘,이주연,이정운 </h3>
            <h4 style={{color:"black"}}>프로젝트 기간 : 10/18 ~ 11/10 </h4>
            <h4 style={{color:"black"}}>
              노션주소 :{" "}
              <a href="https://www.notion.so/KH-18d971a0d4c34e5386998cddfa75b701">
                5조 노션
              </a>
            </h4>
          </div>
          <Box>
            <img className="imgescapeabout3" alt="logo2" src={team5} />
          </Box>
          <br />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">팀원</th>
                <th scope="col">구현부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">조동주</th>
                <td>로그인, 마이페이지, 보드판 자랑하기 게시판</td>
              </tr>
              <tr>
                <th scope="row">이주연 </th>
                <td>메인 페이지, 댓글</td>
              </tr>
              <tr>
                <th scope="row">이정운 </th>
                <td>방탈출 소개 페이지(지도 api) </td>
              </tr>
              <tr>
                <th scope="row">박하늘</th>
                <td>자유게시판 </td>
              </tr>
              <tr>
                <th scope="row">정재이</th>
                <td>일행 구하기 게시판</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Link to="/">
          <button className="btnn page2">홈가기</button>
        </Link>
      </div>
    </>
  );
};
export default Intro;
