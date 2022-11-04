import { useState, useEffect } from "react";

import styled from "styled-components";
import npApi from "../../api/npApi";
import { Link } from "react-router-dom";
import './review.css';
import ReactHtmlParser from 'html-react-parser';

const RBoardList = () => {
    const [RBoardList, setRboardList] = useState("");
    const [loading, setLoading] = useState(false);

    // const onClickBoardList = (val) => {
    //     console.log("상세 게시판으로 이동 : " + val);
    //     window.location.replace("/Review");
    // }

    const BoardList = styled.table`
    border-collapse: collapse;
    width: 900px;
    margin: 0 auto;
    font-size: 1.3em;
    text-align: center;
    @media screen and (max-width: 768px) {
      width: 100%;
    
    }
    th,
    td {
      border: 1px solid #ccc;
      padding: 2px;
      color: grey;
    }
    th {
      background-color: #40BAAA;
      color: black;
    }

   
  `;


    const BoardListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 900px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding-left: 1em;
      padding-right: 1em;
      
    }
  `;

    const onClickWrite = () => {
        console.log("리뷰 페이지로 이동");
        window.location.replace("/review");
    }

    useEffect(() => {

        const BoardData = async () => {
            setLoading(true);
            try {
                const response = await npApi.RBoardList("ALL");
                setRboardList(response.data);
                console.log(response.data)
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

    return (
        <div className="contatiner">
            <div>
                <BoardListBlock>
                    <button className="btnn page2" onClick={onClickWrite} >리뷰쓰기</button>
                    <BoardList>
                        <thead>
                            <tr>
                                <th className="Reviewtitle">제목</th>
                                <th className="Reviewcontent">내용</th>

                            </tr>
                        </thead>
                        {console.log(RBoardList)}
                        {RBoardList &&
                            RBoardList.map((list) => (
                                <tr>
                                    <td>{list.title}</td>
                                    <td>{ReactHtmlParser(list.content)}</td>
                                </tr>
                            ))}
                    </BoardList>
                    <Link to={"/"}><button className="btnn intro">홈가기</button></Link>
                </BoardListBlock>



            </div>
        </div>

    )
};
export default RBoardList;