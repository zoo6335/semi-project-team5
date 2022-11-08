import "bootstrap/dist/css/bootstrap.css";
import "../../fonts/Font.css";
import "./TboardStyle.css";

import { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import nbApi from "../../api/nbApi";
import styled from "styled-components";

const Box = styled.div`
  border: 4px solid #40baaa;
  border-top: 200px;
  width: 1024px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  align-items: center;
  justify-content: center;
`;

const LogoBox = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 1024px;
  margin: auto;
  margin-top: 2rem;
  font-family: "DungGeunMo";
  z-index: 10;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const BoardListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 1024px;
  height: 900px;
  margin: auto;
  margin-top: 2rem;
  font-family: "DungGeunMo";
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const TBoardList = () => {
  const isLogin = window.localStorage.getItem("isLogin");
  const [TBoardList, setTboardList] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const BoardData = async () => {
      setLoading(true);
      try {
        const response = await nbApi.TBoardList();
        setTboardList(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    BoardData();
  }, []);

  if (loading) {
    return <BoardListBlock>대기 중...</BoardListBlock>;
  }

  // 상세페이지 이동
  const onClickBoardList = (val) => {
    console.log("상세 게시판으로 이동 : " + val);
    window.localStorage.setItem("Detail", val);
    window.location.replace("/tBoardDetail");
  };

  // 글쓰기 페이지로 이동
  const onClickWrite = (e) => {
    e.preventDefault();
    console.log("글쓰기 페이지로 이동");
    window.location.replace("/tWriteBoard");
  };

  return (
    <Box>
      <div style={{ height: "130px" }}>
        <LogoBox>
          <div className="boardCategory" style={{ position: "fixed" }}>
            <h1>일 행 구 하 기</h1>
            <span>내 동료가 돼라!</span>
          </div>
        </LogoBox>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          zIndex: "1",
        }}
      >
        <form className="board-form" style={{ width: "100%" }}>
          <div style={{ margin: "30px" }}>
            {isLogin === "TRUE" && (
              <button className="boardWriteBtn" onClick={onClickWrite}>
                글쓰기 📝
              </button>
            )}
            <div className="BoardListTable">
              <Table
                class="table table-striped"
                style={{ textAlign: "center" }}
              >
                <thead>
                  <tr>
                    <th width="100px">모집현황</th>
                    <th width="150px">글번호</th>
                    <th width="*">제목</th>
                    <th width="150px">작성자</th>
                    <th width="150px">작성일</th>
                    <th width="100px">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {TBoardList &&
                    TBoardList.map((list) => (
                      <tr key={list.gmb_id}>
                        <td>
                          <div
                            className="badgeDiv"
                            style={{ fontSize: "1rem" }}
                          >
                            {list.gmb_done === "1" ? (
                              <span class="badge rounded-pill bg-danger">
                                모집완료
                              </span>
                            ) : (
                              <span class="badge rounded-pill bg-success">
                                모집중
                              </span>
                            )}
                          </div>
                        </td>
                        <td>{list.gmb_id}</td>
                        <td onClick={() => onClickBoardList(list.gmb_id)}>
                          {list.gmb_title}
                        </td>
                        <td>{list.gmb_user_id}</td>
                        <td>{list.gmb_c_date}</td>
                        <td>{list.gmb_hit}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
            {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} currentPage={currentPage} paginate={paginate}></Pagination> */}
          </div>
        </form>
      </div>
    </Box>
  );
};
export default TBoardList;
