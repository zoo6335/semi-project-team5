import styled from "styled-components";
import logo from "../images/nagabang_logo_w.png";
import '../home/Home.css';
import Categories from "./Categories";

const Header = () => {
  const isLogin = window.localStorage.getItem("isLogin");
  return (
    <HeaderBlock>
      <img className="logo" src={logo} alt="나가방 로고" onClick={onClickLogo}></img>
      {isLogin === "TRUE" ?
        <div className="member">
          <p className="signIn" onClick={onClickMyPage}>마이페이지</p>
          <p className="logIn" onClick={onClickLogOut}>로그아웃</p>
        </div>
        :
        <div className="member">
          <p className="signIn" onClick={onClickSignin}>회원가입</p>
          <p className="logIn" onClick={onClickLogin}>로그인</p>
        </div>
      }
      <Categories />
    </HeaderBlock>
  );
};
// 로고 click -> 홈화면
const onClickLogo = () => {
  window.location.replace("/");
}
const onClickSignin = () => {
  window.location.replace("/signup");
}
const onClickLogin = () => {
  window.location.replace("/login");
}

const onClickLogOut = () => {
  window.localStorage.setItem("isLogin", "FALSE");
  window.location.replace("/");
}
const onClickMyPage = () => {
  window.location.replace("/myPage");
}

const HeaderBlock = styled.div`
    background-color: rgb(0, 0, 0);
    margin: 0 auto;  
    width: 1024px;
    height: 140px;
    border: 4px solid #40BAAA;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0px;
    z-index: 10;

    .logo {
        margin: 0 auto;
        width: 100px;
        height: 80px;
        &:hover{
            cursor: pointer;
        }
    }
    .member {
        display: flex;
        position: relative;
        left: 870px;
        bottom: 65px;
        & > p {
            margin: 0 5px;
            &:hover {
                font-weight: 600;
                border-bottom: 3px dashed #F99090;
                cursor: pointer;
            }
            &:active {
                font-weight: 600;
                border-bottom: 3px dashed #3bc9db;
                color: black;
                &:hover {
                    color: blue;
                    /* #3bc9db; */
                }
            }
            & + & {
                margin-left: 1rem;
            }
        }

        .signIn {
            color : cornsilk;
        }
        
        .logIn {
            color : cornsilk;
        }
    }
`;

export default Header;