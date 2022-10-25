import { useState } from "react";
import { Link } from "react-router-dom";
import KhApi from "../api/KhApi";
import Modal from "../util/Modal";
import styled from "styled-components";
import mainLogo from "../images/logo.PNG"


const Logo = styled.div`
  margin-top: -100px;
  margin-bottom: 80px;
  
`

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

const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 20px;
  border: 0.1px solid white;
`;

const BtnSignUp = styled.button`
  width: 150px;
  height: 30px;
  margin: 0 0 0 25px;
  border-radius: 20px;
  border: 0.1px solid cornflowerblue;
  background-color: cornflowerblue;

`;

const SignUp = () => {

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputCheckPw, setInputCheckPw] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  // 입력 적합성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isCheckPw, setIsCheckPw] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  // 입력 오류 시 표시할 메세지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [checkPwMessage, setCheckPwMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const onChangeId = (e) => {
    setInputId(e.target.value);
    if(e.target.value.length <= 4 || e.target.value.length > 20){
      setIdMessage("5글자 이상 20글자 미만으로 입력해주세요.");
      setIsId(false);
  } else {
    setIdMessage("올바른 형식 입니다.");
    setIsId(true);
    }
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
  const onChangeCheckPw = (e) => {
    setInputCheckPw(e.target.value);

    if (e.target.value !== inputPw) {
        setCheckPwMessage('비밀 번호가 일치하지 않습니다.')
        setIsCheckPw(false);
    } else {
        setCheckPwMessage('비밀 번호가 일치 합니다.')
        setIsCheckPw(true);
    }      
  }

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);

    if( e.target.value.indexOf("@") === -1 ) {
      setEmailMessage("이메일 주소는 @가 필수적으로 들어가야합니다.")
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  }

  
  const onClickLogin = async() => {
    console.log("Click 회원가입");
    //let result = await EnnovaApi.userInfoCheckId(inputId);
    let result = await KhApi.userLogin(inputId, 1234);
    if (result.data.Code === "00") {
        console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.")
        window.location.replace("/SignupS2");
    } else {
        console.log("아이디 및 패스워드를 재확인해 주세요.")
        setModalOpen(true);
    } 
  }

  return (
    <Box>
        <div className="container">
        <Logo >
          <img src={mainLogo} alt="logo"/>
        </Logo>
            <div>
                <Input placeholder="아이디" value ={inputId} onChange={onChangeId}/>
            </div>
            <div>
              {inputId.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
            </div>
            <br />
            <div>
              <Input placeholder="패스워드" value ={inputPw} onChange={onChangePw}/>
            </div>
            <br />
            <div>
              {inputPw.length > 0 && (<span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
            </div>
            <div>
              <Input className="input" placeholder="패스워드 확인" value ={inputCheckPw} onChange={onChangeCheckPw}/>
            </div>
            <div>
              {inputPw.length > 0 && (<span className={`message ${isCheckPw ? 'success' : 'error'}`}>{checkPwMessage}</span>)}
            </div>
            <br /> 
            <div>
              <Input placeholder="이메일" value={inputEmail} onChange={onChangeEmail} />
            </div>
            <br />
            <div>
              {(isId && isPw && isCheckPw) ? 
              <BtnSignUp className="enable_button" onClick={onClickLogin}>SignUp</BtnSignUp> :
              <BtnSignUp className="disable_button" onClick={onClickLogin}>SignUp</BtnSignUp>}
              <Modal open={modalOpen} close={closeModal} header="오류">중복된 아이디 입니다.</Modal>
            </div>
        </div>
    </Box>
  );
}

export default SignUp;