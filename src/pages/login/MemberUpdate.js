
import { useState } from "react";
import DjApi from "../../api/DjApi";
import Modal from "../../util/Modal";
import styled from "styled-components";

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


const Input = styled.input`
width: 350px;
height: 50px;
border-radius: 40px 80px / 80px 40px;
border: 3px dotted #40BAAA;
background-color: rgb(0, 0, 0);
  align-items: center;
  ::placeholder {
    color: cornsilk;
  }
`;

const Button = styled.button`
width: 150px;
height: 50px;
border-radius: 40px 80px / 80px 40px;
border: 3px dotted #40BAAA;
background-color: rgb(0, 0, 0);
  align-items: center;

  & + & {
    margin-left : 50px;
  }
`;

const InputContainer = styled.div`
  width: 400px;
  height: 50px;
  text-align: center;
`

const MsgContainer = styled.div`
  width: 600px;
  height: 30px;
  text-align: right;
`


const MemberUpdate = () => {

  const localId = window.localStorage.getItem("userId");
  const isLogin = window.localStorage.getItem("isLogin");
  if (isLogin === "FALSE") window.location.replace("/");

  const [inputPw, setInputPw] = useState("");
  const [inputCheckPw, setInputCheckPw] = useState("");
  const [inputName, setInputName] = useState("");
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


  const closeModal = () => {
    setModalOpen(false);
  };

  const onClickUpdate = async () => {
    const memberUpdate = await DjApi.memberUpdate(localId, inputPw, inputName, inputEmail);
    console.log(memberUpdate.data.result);

    if (memberUpdate.data.result === "OK") {
      window.location.replace("/");
    } else {
      setModalOpen(true);
      setModalText("회원 정보 수정에 실패 했습니다.");
    }
  }

  const onClickCancel = () => {
    window.location.replace("/");
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

    if (e.target.value.indexOf("@") === -1) {
      setEmailMessage("이메일 주소는 @가 필수적으로 들어가야합니다.")
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  }

  const onChangeName = (e) => {
    setInputName(e.target.value);
  }


  return (
    <Box>
        <InputContainer>
          <Input placeholder={`  ${localId}`} disabled />
        </InputContainer>
        <MsgContainer></MsgContainer>
        <InputContainer>
          <Input placeholder="  패스워드" value={inputPw} onChange={onChangePw} />
        </InputContainer>
        <MsgContainer>
          {inputPw.length > 0 && (<span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
        </MsgContainer>
          <Input className="input" placeholder="  패스워드 확인" value={inputCheckPw} onChange={onChangeCheckPw} />
        <MsgContainer>
          {inputPw.length > 0 && (<span className={`message ${isCheckPw ? 'success' : 'error'}`}>{checkPwMessage}</span>)}
        </MsgContainer>
        <InputContainer>
          <Input placeholder="  닉네임" value={inputName} onChange={onChangeName} />
        </InputContainer>
        <MsgContainer></MsgContainer>
        <InputContainer>
          <Input placeholder="  EMAIL" value={inputEmail} onChange={onChangeEmail} />
        </InputContainer>
        <MsgContainer></MsgContainer>
        <div>
          {(isId && isPw && isCheckPw) ?
            <Button onClick={onClickUpdate}>Change</Button> :
            <Button disabled onClick={onClickUpdate}>Change</Button>}
          <Button onClick={onClickCancel}>Cancel</Button>
          <Modal open={modalOpen} close={closeModal} header="오류">중복된 아이디 입니다.</Modal>
        </div>
    </Box>
  );
}

export default MemberUpdate;
