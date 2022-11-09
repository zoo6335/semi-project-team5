import { useState, useEffect } from "react";
import JYApi from "../api/JYApi";
import styled from "styled-components";
import "../App.css";

const BoardRank = () => {
  const [boardRank, setBoardRank] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const rankData = async () => {
      setLoading(true);
      try {
        const response = await JYApi.boardRank("ALL");
        setBoardRank(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    rankData();
  }, []);
  if (loading) {
    return <RankingBlock>조금만 기다려주세요...👩‍💻</RankingBlock>;
  }
  return (
    <RankingBlock>
      <table>
        <thead>
          <tr className="row-title">
            <th width="50px">순위</th>
            <th width="100px">분류</th>
            <th width="230px">제목</th>
            <th width="60px">조회수</th>
          </tr>
        </thead>
        <tbody>
          {boardRank &&
            boardRank.map((board) => (
              // <tr key={board.postId} onClick={() => onClickBoardDetail(board.postId)}>
              <tr key={board.postId}>
                <td>{board.rank}위</td>
                <td>{board.category}</td>
                <td>{board.title.replace(/<[^>]*>?/g, "")}</td>
                <td>{board.view}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </RankingBlock>
  );
};

const RankingBlock = styled.div`
  box-sizing: border-box;
  table {
    width: 100%;
    table-layout: fixed;
  }
  * {
    text-decoration: none;
  }
  table,
  th,
  td {
    color: white;
    font-size: 17px;
    border-collapse: collapse;
    text-align: center;
    height: 29px;
  }
  // 테이블 행 아래 보더 지정
  tr {
    border-bottom: 2px dashed rgba(0, 0, 0, 0.5);
  }
  // 제목행
  th {
    color: white;
    text-shadow: -4px 0 #000, -4px 1px #000, 1px 0 #000, 0 -1px #000;
  }
  td {
    font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export default BoardRank;
