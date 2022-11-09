import { useState, useEffect } from "react";
import JYApi from "../api/JYApi";
import styled from "styled-components";
import "../App.css";

const RoomRank = () => {
  const [roomRank, setRoomRank] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const rankData = async () => {
      setLoading(true);
      try {
        const response = await JYApi.roomRank("ALL"); // 제이슨객체로 받아오고
        setRoomRank(response.data); // 그걸 객체로 받아서
        console.log(response.data); // 그 객체 모음을 찍어보는거야
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
            <th width="200px">테마명</th>
            <th width="70px">좋아요</th>
          </tr>
        </thead>
        <tbody>
          {roomRank &&
            roomRank.map((room) => (
              // <tr key={room.postId} onClick={() => onClickRoomDetail(room.postId)}>
              <tr key={room.postId}>
                <td>{room.rank}위</td>
                <td>{room.category}</td>
                <td>{room.title}</td>
                <td>{room.like}</td>
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
  table,
  th,
  td {
    color: white;
    font-size: 17px;
    border-collapse: collapse;
    text-align: center;
    height: 29px;
  }
  tr {
    // 테이블 행 아래 보더 지정
    border-bottom: 2px dashed rgba(0, 0, 0, 0.5);
  }
  th {
    // 제목행
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

export default RoomRank;
