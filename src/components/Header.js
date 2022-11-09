import styled from "styled-components";
import logo from "../images/nagabang_logo_w.png";
import "../home/Home.css";
import Categories from "./Categories";
// import Logo from "../images/NAGABANG.png";

const LOGO = styled.p`
  transform: skewX(7deg);
  font-size: 4em;
  color: #ed77bc;
  margin: 0 auto;
  margin-top: 10px;
  text-shadow: -4px 0 #222, -4px 1px #999, 1px 0 #000, 0 -1px #999;
  &:hover {
    cursor: pointer;
  }
`;
const HeaderBlock = styled.div`
  background-color: rgb(0, 0, 0);
  margin: 0 auto;
  width: 1024px;
  height: 180px;
  border: 4px solid #40baaa;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0px;
  z-index: 10;

  .member {
    display: flex;
    position: relative;
    // left: 830px;
    // bottom: 85px;

    & > p {
      margin: 0 5px;
      &:hover {
        font-weight: 600;
        border-bottom: 3px dashed #f99090;
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
      color: cornsilk;
    }

    .logIn {
      color: cornsilk;
    }
  }
`;

const Header = () => {
  const isLogin = window.localStorage.getItem("isLogin");
  return (
    <HeaderBlock>
      <LOGO className="logo" onClick={onClickLogo}>
        NagaBang
      </LOGO>
      {isLogin === "TRUE" ? (
        <div className="member" style={{ left: "835px", bottom: "95px" }}>
          <p className="signIn" onClick={onClickMyPage}>
            마이페이지
          </p>
          <p className="logIn" onClick={onClickLogOut}>
            로그아웃
          </p>
        </div>
      ) : (
        <div className="member" style={{ left: "870px", bottom: "95px" }}>
          <p className="signIn" onClick={onClickSignin}>
            회원가입
          </p>
          <p className="logIn" onClick={onClickLogin}>
            로그인
          </p>
        </div>
      )}
      <Categories />
    </HeaderBlock>
  );
};

// 로고 click -> 홈화면
const onClickLogo = () => {
  window.location.replace("/");
};
const onClickSignin = () => {
  window.location.replace("/signup");
};
const onClickLogin = () => {
  window.location.replace("/login");
};
const onClickLogOut = () => {
  window.localStorage.setItem("isLogin", "FALSE");
  window.location.replace("/");
};
const onClickMyPage = () => {
  window.location.replace("/myPage");
};

export default Header;
