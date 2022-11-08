import styled from "styled-components";
import TitleImg from '../../images/boardTitleImg.png';

const BoardTitle = styled.div`
.titleImg{
  display:flex;
  position:relative;
  width: 800px
}
.titleText{
  display:flex;
  position:absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
}
& img {
  width: 800px
}
& h2 {
  font-family: "LFont";
  text-align: center;
  font-size: 3em;
}
`

const BoardTitleHeader = () => {

  return(
    <BoardTitle>
      <div className='titleImg'><img src={TitleImg} alt="board-title-img"/>
        <div className='titleText'><h2>자유게시판</h2></div>
      </div>
    </BoardTitle>
  )
}
export default BoardTitleHeader;