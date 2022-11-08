import { useState } from "react";
import DjApi from "../../api/DjApi";
import Modal from "../../util/Modal";
import styled from "styled-components";
import { faLock, faUser, faEnvelope, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
  height: 50px;
  display: flex;
`

const MsgContainer = styled.div`
  width: 400px;
  height: 30px;
  text-align: right;
`

const Input = styled.input`
width: 350px;
height: 50px;
border-radius: 40px 80px / 80px 40px;
border: 3px dotted #40BAAA;
background-color: rgb(0, 0, 0);
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
    margin-left : 50px;
  }

`;


const SignUp = () => {


  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputCheckPw, setInputCheckPw] = useState("");
  const [inputName, setInputName] =useState("");
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
  const [modalText, setModalText] = useState("중복된 아이디 입니다.");

  const nullMessage = " ";
  
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

  const onChangeName = (e) => {
    setInputName(e.target.value);
  }

  const onClickCancle = () => {
    window.location.replace("/");
  }
  
  const onClickLogin = async() => {
    console.log("Click 회원가입");
   // 가입 여부 우선 확인
  const memberCheck = await DjApi.memberRegCheck(inputId);
  console.log(memberCheck.data);
   // 가입 여부 확인 후 가입 절차 진행

  if (memberCheck.data.result === "OK") {
      console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");
      const memberReg = await DjApi.memberReg(inputId, inputPw, inputName, inputEmail);
      console.log(memberReg.data.result);
      console.log()
      if(memberReg.data.result === "OK") {
          window.location.replace("/");
      } else {
          setModalOpen(true);
          setModalText("회원 가입에 실패 했습니다.");
      }

  } else {
      console.log("이미 가입된 회원 입니다.")
      setModalOpen(true);
      setModalText("이미 가입된 회원 입니다.");
  } 
}

  return (
    <Box>
        <div style={{ "marginTop" : "-50px"}}>
            <InputContainer>
            <FontAwesomeIcon icon={faUser} size="3x"
                                  style={{"marginRight": 10}}/> 
                <Input placeholder="아이디" value ={inputId} onChange={onChangeId}/>
            </InputContainer>
            <MsgContainer>
              { inputId.length > 0 && <span>{idMessage}</span>}
            </MsgContainer>
            <InputContainer>
            <FontAwesomeIcon icon={faLock} size="3x"
                                  style={{"marginRight": "10px"}}/> 
              <Input placeholder="패스워드" value ={inputPw} onChange={onChangePw}/>
            </InputContainer>
            <MsgContainer style={{ "width" : "470px"}}>
              {inputPw.length > 0 && (<span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
            </MsgContainer>
            <InputContainer>
            <FontAwesomeIcon icon={faLock} size="3x"
                                  style={{"marginRight": 10}}/> 
              <Input className="input" placeholder="패스워드 확인" value ={inputCheckPw} onChange={onChangeCheckPw}/>
            </InputContainer>
            <MsgContainer>
              {inputPw.length > 0 && (<span className={`message ${isCheckPw ? 'success' : 'error'}`}>{checkPwMessage}</span>)}
            </MsgContainer>
            <InputContainer>
            <FontAwesomeIcon icon={faUserTag} size="3x"
                                  style={{"marginRight": 10}}/> 
              <Input placeholder="name"value={inputName} onChange={onChangeName} />
            </InputContainer>
            <MsgContainer></MsgContainer>
            <InputContainer>
            <FontAwesomeIcon icon={faEnvelope} size="3x"
                                  style={{"marginRight": 10}}/> 
              <Input placeholder="email" value={inputEmail} onChange={onChangeEmail} />
            </InputContainer>
            <MsgContainer></MsgContainer>
            <MsgContainer>
              {(isId && isPw && isCheckPw) ? 
              <ButtonOk className="enable_button" onClick={onClickLogin}>SignUp</ButtonOk> :
              <ButtonOk className="disable_button" onClick={onClickLogin}>SignUp</ButtonOk>}
              <ButtonOk onClick={onClickCancle}>Cancle</ButtonOk>
            </MsgContainer>
        </div>
        <Modal open={modalOpen} close={closeModal} header="오류">중복된 아이디 입니다.</Modal>
    </Box>
  );
}

export default SignUp;