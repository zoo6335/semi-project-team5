import { Link } from "react-router-dom";
import './About.css';
import introImg12 from "./images/12.png";
import styled from "styled-components";

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





const Intro = () => {


    return (
        <>

            <div className="container-About ">
                <div className="text-center">
                    <h2 className="member-title">안녕하세요 나가방입니다.</h2>
                    <div className="aboutcol2">
                        <img className="imgescapeabout3" alt="logo2" src={introImg12} style={{ height: '60%', width: '60%' }} />
                    </div>
                    <h3>조원 : 조동주,정재이,박하늘,이주연,이정운 </h3>
                    <h4>프로젝트 기간 : 10/18 ~ 11/10  </h4>
                    <h4>노션주소 : <a href="https://www.notion.so/KH-18d971a0d4c34e5386998cddfa75b701">5조 노션</a></h4>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">팀원</th>
                                <th scope="col">구현부</th>
                                <th scope="col">옵션사항</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">조동주</th>
                                <td>로그인/회원가입/마이페이지(정보 수정)</td>
                                <td>좋아요 기능 / 다녀간 방탈출 리스트</td>

                            </tr>
                            <tr>
                                <th scope="row">이주연 </th>
                                <td>메인 페이지</td>
                                <td>검색기능(지역, 테마별 분류)</td>

                            </tr>
                            <tr>
                                <th scope="row">이정운 </th>
                                <td>방탈출 소개 페이지(지도 api) </td>
                                <td>후기게시판 만들기</td>
                            </tr>
                            <tr>
                                <th scope="row">박하늘</th>
                                <td >자유게시판 </td>
                                <td>보드판 꾸미기</td>
                            </tr>
                            <tr>
                                <th scope="row">정재이</th>
                                <td >일행 구하기 게시판</td>
                                <td>보드판 꾸미기</td>
                            </tr>
                        </tbody>
                    </table>

                </div>


                <Link to="/"><button className="btnn page2">홈가기</button></Link>
            </div>




        </>
    );
}
export default Intro;