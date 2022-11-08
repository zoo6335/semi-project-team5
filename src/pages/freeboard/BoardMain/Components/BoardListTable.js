import { useState, useEffect } from 'react';
import Api from '../../../../api/FbApi';
import '../../FreeBoardStyle.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';

const FBoardList = () => {

  const [fBoardList, setFBoardList] = useState('');
  const [loading, setLoading] = useState(false);

  const onClickBoardDetail = (val, val2) => {
    window.localStorage.setItem("fb_id", val);  
    window.localStorage.setItem("fb_user_id", val2);
    window.location.replace("/BoardDetail");
  } 

  useEffect(() => {
    const BoardData = async () => {
      setLoading(true);
      try {
        const response = await Api.fBoardList();
        setFBoardList(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    BoardData();
  }, []);

  // 로딩 중 화면 gif로 변경하였으나 안 됨..
  if (loading) {
    return <p>로딩 중 입니다.... 조금만 기다려 주세요.</p>
    // <div><img src="../images/pacmanLoading.gif" alt="loading..."/></div>
  }

  return (
    <div className="BoardListTable">
      <Table className="table table">
        <thead>
          <tr>
            <th>글번호</th>
            <th>분류</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {console.log(fBoardList)}
          {fBoardList && fBoardList.map((list) => (
            <tr className='boardListTd' key={list.fb_id} onClick={()=>onClickBoardDetail(list.fb_id, list.fb_user_id)}>
              <td>{list.fb_id}</td>
              <td>{list.fb_category}</td>
              {/* html 태그 안 보이도록 정규식 적용 */}
              <td>{(list.fb_title).replace(/<[^>]*>?/g,'')} [{list.fb_comment_count}]</td>
              <td>{list.fb_user_id}</td>
              <td>{list.fb_c_date}</td>
              <td>{list.fb_hit}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FBoardList;