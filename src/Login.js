import { useState, useEffect } from "react";
import styled from "styled-components";
import kakaoImage from "./images/kakao_login.png";

const Box = styled.div`
  
  background-color: cornsilk;
  margin: 100px auto;
  padding: 1rem;
  height: 700px;
  width: 400px;
  display: flex;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  
`;

const InputLogin = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 20px;
  border: 0.1px solid white;
`;

const ButtonLogin = styled.button`
  width: 150px;
  height: 30px;
  margin: 0 0 0 25px;
  border-radius: 20px;
  border: 0.1px solid cornflowerblue;
  background-color: cornflowerblue;

`

const Login = () => {

  // const KAKAO_AUTH_URL = `/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code` 
  // const onClickKakao = () => {
  //   window.location.href = KAKAO_AUTH_URL;
  // }

  // 로그인 id, pw 입력 요소 
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 입력 적합성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  // 입력 오류 시 표시할 메세지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  
  const REST_API_KEY = "60ef127fd63a8c35d27940735ce12e74";
  const REDIRECT_URI = "https://localhost:3000/oauth";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onChangeId = (e) => {
    setInputId(e.target.value);
    if(e.target.value.length <= 4 || e.target.value.length > 20){
      setIdMessage("5글자 이상 20글자 미만으로 입력해주세요.");
      setIsId(false);
    }
    else setIsId(true);
  }

  const onChangePw = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/

    setInputPw(e.target.value);
    //  a.test(b)  => b가 a와 매칭되면 true
    if(!passwordRegex.test(e.target.value)) {
      setPwMessage("비밀번호는 글자, 숫자, 특수문자 조합으로 8자 이상 20자 이하로 구성해주세요.");
      setIsPw(false);
    }
    else setIsPw(true);
  }

  const onClickLogin = () => {
    
  }

  return (
    <Box>
    
    <div>
      
      <div>
        <InputLogin value={inputId} onChange={onChangeId} />
        <div>
          {/* span 태그의 class에 다른 props 넣어서 false일 때 메세지가 나오도록 수정해야함 */}
          {inputId > 0 && {isId} ? null : <span>{idMessage}</span>} 
        </div>
        <br />
        <div>  
          <InputLogin value={inputPw} onChange={onChangePw} />
        </div>
        <br />
        <ButtonLogin onClick={onClickLogin}>Login</ButtonLogin>
        <ButtonLogin>Cancle</ButtonLogin>
        <br />
        <br />
        <div>
          <a href={KAKAO_AUTH_URL} target="_blank" rel="noreferrer noopener">
            <img src={kakaoImage} alt="kakao login" />
          </a>
        </div>
      </div>
    </div>
    </Box>
  ) 
}

export default Login;