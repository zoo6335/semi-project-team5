import styled from "styled-components";

const BoardNav = styled.div `
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 20px 0;
// margin: auto 200px;
.category {
  display: inline;
  padding: 10px 20px;
  font-family: "MFont";
  font-size: 1.4em;
  font-weight: bold;
  margin:0;
  color: #8DC0F1;
  text-shadow: 2px 2px #958888;
    &:hover {
      background-color: #dbdbdb77;
      border-radius: 5px;
    }
  }
`
const BoardCategory = () => {
  function onClickMain() {
    window.location.replace("/totalBoard");
  };

  function onClickFree() {
    window.location.replace("/BoardFree");
  }

  function onClickTrade() {
    window.location.replace("/BoardTrade");
  }

  function onClickRecommend() {
    window.location.replace("/BoardRecommend");
  }

  function onClickTip() {
    window.location.replace("/BoardTip");
  }

  return (
    <BoardNav>
      <p className='category' onClick={onClickMain}>전체글</p>
      <p className='category' onClick={onClickFree}>자유글</p>
      <p className='category' onClick={onClickTrade}>양도/교환</p>
      <p className='category' onClick={onClickRecommend}>테마추천</p>
      <p className='category' onClick={onClickTip}>방탈출팁</p>
    </BoardNav>
  )
}
export default BoardCategory;