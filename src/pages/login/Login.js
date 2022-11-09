import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import kakaoImage from "../../images/kakao_login_2.png";
import Modal from "../../util/Modal";
import DjApi from "../../api/DjApi";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";

const Box = styled.div`
  border: 4px solid #40BAAA;
  border-top: none;
  width: 1024px;
  height: 720px;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputContainer = styled.div`
  width: 400px;
  height: 130px;
  padding: 0 0 20px;
  text-align: center;
`

const LoginContainer = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
`

const ImgContainer = styled.img`
  width: 200px;
  height: 80px;
`

const MsgContainer = styled.div`
  width: 400px;
  height: 30px;
  text-align: right;
`

const ButtonContainer = styled.div`
  width: 400px;

  flex-wrap: wrap reverse;
`


const InputLogin = styled.input`
width: 350px;
height: 50px;
border-radius: 40px 80px / 80px 40px;
border: 3px dotted #40BAAA;
background-color: rgb(0, 0, 0);
::placeholder {
  color: cornsilk;
}
`;

const ButtonOk = styled.button`
width: 150px;
height: 50px;
margin: 0 auto;
border-radius: 40px 80px / 80px 40px;
border: 3px dotted #40BAAA;
background-color: rgb(0, 0, 0);
align-items: center;

  & + & {
    margin-left : 100px;
  }

`;


const Login = () => {


  // const KAKAO_AUTH_URL = `/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code` 
  // const onClickKakao = () => {
  //   window.location.href = KAKAO_AUTH_URL;
  // }

  window.localStorage.setItem("isLogin", "FALSE");
  // 로그인 id, pw 입력 요소 
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 입력 적합성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  // 입력 오류 시 표시할 메세지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  //팝업
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onClickCancel = () => {
    window.location.replace("/");
  }

  const REST_API_KEY = "333ec9a36164c328f0d63277ae88f9df";
  const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onChangeId = (e) => {
    setInputId(e.target.value);
    if (e.target.value.length <= 4 || e.target.value.length > 20) {
      setIdMessage("5글자 이상 20글자 미만으로 입력해주세요.");
      setIsId(false);
      console.log(isId);
    }
    else {
      setIsId(true);
      setIdMessage("잘 입력하셨습니다.");
      console.log(isId);
    }
  }



  const onChangePw = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/

    setInputPw(e.target.value);
    //  a.test(b)  => b가 a와 매칭되면 true
    if (!passwordRegex.test(e.target.value)) {
      setPwMessage("비밀번호는 글자, 숫자, 특수문자 조합으로 8자 이상 20자 이하로 구성해주세요.");
      setIsPw(false);
      console.log(isPw);
    }
    else {
      setIsPw(true);
      setPwMessage("잘 입력하셨습니다.");
      console.log(isPw);
    }
  }

  const onClickLogin = async () => {
    try {
      // 로그인을 위한 axios 호출
      const res = await DjApi.userLogin(inputId, inputPw);
      console.log(res.data);

      if (res.data.result === "OK") {
        window.localStorage.setItem("userId", inputId);
        window.localStorage.setItem("userPw", inputPw);
        window.localStorage.setItem("isLogin", "TRUE");
        window.location.replace("/mypage");
      } else {
        setModalOpen(true);
      }

    } catch (e) {
      setModalOpen(true);
      console.log("로그인 에러..");
    }
  };

  return (
    <>
    <Box>
      <InputContainer>
      <MsgContainer></MsgContainer>
        <LoginContainer>
          {inputId > 0 && isId ? <FontAwesomeIcon icon={faUserCheck} size="3x"
            style={{ "marginRight": 10 }} /> :
            <FontAwesomeIcon icon={faUser} size="3x" style={{ "marginRight": 10 }} />}
          <InputLogin placeholder="  아이디" value={inputId} onChange={onChangeId} />
        </LoginContainer>
        <MsgContainer style={{ width: '400px' }}>
          {idMessage}
        </MsgContainer>
        <LoginContainer>
          {inputPw > 0 && isPw ? <FontAwesomeIcon icon={faLockOpen} size="3x" style={{ "marginRight": 10 }} /> :
            <FontAwesomeIcon icon={faLock} size="3x" style={{ "marginRight": 10 }} />}
          <InputLogin type="password" placeholder="  패스워드" value={inputPw} onChange={onChangePw} />
        </LoginContainer>
        <MsgContainer>
          {pwMessage}
        </MsgContainer>
      </InputContainer>
      <br/>
      <br/>
      <br/>
      <br/>
      <ButtonContainer>
        <ButtonOk onClick={onClickLogin}>Login</ButtonOk>
        <ButtonOk onClick={onClickCancel}>Cancel</ButtonOk>
      </ButtonContainer>
      
      <a href={KAKAO_AUTH_URL} target="_blank" rel="noreferrer noopener">
        <ImgContainer src={kakaoImage} alt="kakao login" />
      </a>
      <br/>
      <div>
        <Link to={"/findId"} style={{ textDecoration: 'none', margin: '0 50px', color: '#40BAAA' }}>아이디 찾기</Link>
        <Link to={"/findPwd"} style={{ textDecoration: 'none', margin: '0 50px', color: '#40BAAA' }}>비밀번호 찾기</Link>
      </div>
      <br/>
      <div>
        <Link to={"/signUp"} style={{ textDecoration: 'none', color: '#40BAAA' }}>아이디가 없으신가요?</Link>
      </div>
      <Modal open={modalOpen} close={closeModal} header="오류">아이디 및 패스워드를 재확인해 주세요.</Modal>
    </Box>
    <Footer />
    </>
  );
};

export default Login;