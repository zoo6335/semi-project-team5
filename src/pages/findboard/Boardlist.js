import { useState, useEffect } from "react";
import nbApi from "../../api/nbApi"
import "../../fonts/Font.css";
import styled from "styled-components";
import "../../App.css";

const TBoardList = () => {
  const [TBoardList, setTboardList] = useState("");
  const [loading, setLoading] = useState(false);

  const onClickBoardList = (val) => {
    console.log("상세 게시판으로 이동 : " + val);
    window.localStorage.setItem("BoardDetail", val);
    window.location.replace("/tBoardDetail");
  };

  const LogoBox = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 1024px;
    margin: auto;
    margin-top: 2rem;
    font-family: "DungGeunMo";
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
    height : 900px;
    margin: auto;
    margin-top: 2rem;
    font-family: "DungGeunMo";
    @media screen and (max-width: 768px) {
      width: 100%;
      padding-left: 1em;
      padding-right: 1em;
    }
  `;

  const BoardList = styled.table`
    border-collapse: collapse;
    width: 1024px;
    margin: auto;
    font-size: 1.125em;
    text-align: center;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    th,
    td {
      border: 1px solid #ccc;
      padding: 2px;
      color: black;
    }
    th {
      background-color: #40baaa;
    }
  `;

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

  const onClickWrite = (e) => {
    e.preventDefault();
    console.log("글쓰기 페이지로 이동");
    window.location.replace("/tWriteBoard");
  };

  return (
    <form className="board-form">
      <LogoBox>
      <div className="boardCategory">
        <h1>일 행 구 하 기</h1>
        <span>내 동료가 돼라!</span>
        </div>
      </LogoBox>
      <div>
        <BoardListBlock>
          <button className="WriteBtn" onClick={onClickWrite}>
            📝
          </button>
          <BoardList>
            <thead>
              <tr>
                <th>글번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
            {TBoardList &&
              TBoardList.map((list) => (
                <tr key={list.gmb_id} onClick={() => onClickBoardList(list.gmb_id)}>
                  <td>{list.gmb_id}</td>
                  <td>{list.gmb_title}</td>
                  <td>{list.gmb_user_id}</td>
                  <td>{list.gmb_c_date}</td>
                  <td>{list.gmb_hit}</td>
                </tr>
              ))}
              </tbody>
          </BoardList>
        </BoardListBlock>
      </div>
      {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} currentPage={currentPage} paginate={paginate}></Pagination> */}
    </form>
  );
};
export default TBoardList;
