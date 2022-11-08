import styled from "styled-components";

const ButtonBox = styled.div`
  width: 1024px;
  padding-right: 50px;
  text-align: right;
`
const Button = styled.button`
  display :inline-block;
  font-family: "Sfont";
  font-size: 1.4em;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 2px gray;
  width: 100px;
  height: 40px;
  margin-bottom: 20px;
  padding-right: 10px;
  background-color: #ed9dcc;
  border: none;
  border-radius: 8px;
    &:hover {
      background-color: #dbdbdb;
    }
`

const BoardWriteButton = () => {

  const getisLogin = window.localStorage.getItem("isLogin");

  const onClickWrite = () => {
    window.location.replace("/BoardWrite")
  };

  return (
    <ButtonBox>
      {getisLogin === "TRUE" && (
        <Button onClick={onClickWrite}>📝글쓰기</Button>
      )}
    </ButtonBox>
  )
}
export default BoardWriteButton;