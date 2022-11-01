import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import kakaoImage from "../images/kakao_login.png";
import Modal from "../util/Modal";
import KhApi from "../api/KhApi";

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

const InputLogin = styled.input`
width: 350px;
height: 50px;
border-radius: 20px;
border: 0.1px solid white;
align-items: center;
`;

const ButtonLogin = styled.button`
width: 150px;
height: 50px;
margin: 0 auto;
border-radius: 20px;
border: 0.1px solid cornsilk;
background-color: cornsilk;
align-items: center;

  & + & {
    margin-left : 50px;
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

  useEffect(() => {
  });


  const REST_API_KEY = "60ef127fd63a8c35d27940735ce12e74";
  const REDIRECT_URI = "https://localhost:3000/oauth";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onChangeId = (e) => {
    setInputId(e.target.value);
    if (e.target.value.length <= 4 || e.target.value.length > 20) {
      setIdMessage("5글자 이상 20글자 미만으로 입력해주세요.");
      setIsId(false);
    }
    else setIsId(true);
  }

  const onChangePw = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/

    setInputPw(e.target.value);
    //  a.test(b)  => b가 a와 매칭되면 true
    if (!passwordRegex.test(e.target.value)) {
      setPwMessage("비밀번호는 글자, 숫자, 특수문자 조합으로 8자 이상 20자 이하로 구성해주세요.");
      setIsPw(false);
    }
    else setIsPw(true);
  }

  const onClickLogin = async () => {
    try {
      // 로그인을 위한 axios 호출
      const res = await KhApi.userLogin(inputId, inputPw);
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
  }

  return (
    <Box>
      <InputLogin placeholder="아이디" value={inputId} onChange={onChangeId} />
      <div>
        {/* span 태그의 class에 다른 props 넣어서 false일 때 메세지가 나오도록 수정해야함 */}
        {/* <span className={`message ${isId ? 'success' : 'error'}`}></span> */}
        {inputId > 0 && { isId } ? null : <span>{idMessage}</span>}
      </div>
      <br />
      <div>
        <InputLogin placeholder="패스워드" value={inputPw} onChange={onChangePw} />
      </div>
      <br />
      <div>
        <ButtonLogin onClick={onClickLogin}>Login</ButtonLogin>
        <ButtonLogin onClick={onClickCancel}>Cancel</ButtonLogin>
      </div>
      <br />
      <br />
      <a href={KAKAO_AUTH_URL} target="_blank" rel="noreferrer noopener">
        <img src={kakaoImage} alt="kakao login" />
      </a>
      <br />
      <br />
      <div>
        <Link to={"/findId"} style={{ textDecoration: 'none', margin: '0 50px' }}>아이디 찾기</Link>
        <Link to={"/findPwd"} style={{ textDecoration: 'none', margin: '0 50px' }}>비밀번호 찾기</Link>
      </div>
      <br />
      <br />
      <div>
        <Link to={"/signUp"} style={{ textDecoration: 'none' }}>아이디가 없으신가요?</Link>
      </div>
      <Modal open={modalOpen} close={closeModal} header="오류">아이디 및 패스워드를 재확인해 주세요.</Modal>
    </Box>
  )
}

export default Login;