import { useState } from "react";
import styled from "styled-components";
import DjApi from "../../api/DjApi";
import Modal from "../../util/Modal";
import Footer from "../../components/Footer";
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
::placeholder {
  color: cornsilk;
}
`;

const Button = styled.button`
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

const FindPwd = () => {


  const [findPwd, setFindPwd] = useState("");

  const [idMessage, setIdMessage] = useState("");
  const [isId, setIsId] = useState(false);

  const [inputId, setInputId] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");


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

  const onChangeName = (e) => {
    setInputName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  }

  const onClickFindPwd = () => {

    const memberData = async () => {
      try {
        const response = await DjApi.findMember();
        const infoPwd = response.data.map(e => [e.id, e.pwd, e.name, e.email]);  // 아이디 비밀번호

        infoPwd.forEach(element => {
          console.log(element[2]);
          if (element[0] === inputId &&
            element[2] === inputName &&
            element[3] === inputEmail) {
            setFindPwd(element[1]);
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
    memberData();
    setModalOpen(true);
  }

  const onClickCancel = () => {
    window.location.replace("/login");
  }

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);

  };

  const confirmModal = () => {
    window.location.replace("/login");
  }



  return (
    <Box>
      <div>
        <div>
          <InputContainer>
            <FontAwesomeIcon icon={faUser} size="3x"
              style={{ "marginRight": 10 }} />
            <Input placeholder="  아이디" value={inputId} onChange={onChangeId} />
          </InputContainer>
          <MsgContainer>
            {inputId.length > 0 && <span>{idMessage}</span>}
          </MsgContainer>
          <InputContainer>
            <FontAwesomeIcon icon={faUserTag} size="3x"
              style={{ "marginRight": 10 }} />
            <Input placeholder="  닉네임" value={inputName} onChange={onChangeName} />
          </InputContainer>
          <MsgContainer>
            {/* span 태그의 class에 다른 props 넣어서 false일 때 메세지가 나오도록 수정해야함 */}
            {/* <span className={`message ${isId ? 'success' : 'error'}`}></span> */}
            {/* {inputId > 0 && {isId} ? null : <span>{idMessage}</span>}  */}
          </MsgContainer>
          <InputContainer>
            <FontAwesomeIcon icon={faEnvelope} size="3x"
              style={{ "marginRight": 10 }} />
            <Input placeholder="  EMAIL" value={inputEmail} onChange={onChangeEmail} />
          </InputContainer>
          <MsgContainer></MsgContainer>
          <div>
            <Button onClick={onClickFindPwd}>PASSWORD ?</Button>
            <Button onClick={onClickCancel}>Cancel</Button>
          </div>
        </div>
      </div>
      {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="비밀번호 찾기">PWD : {findPwd}</Modal>}
    </Box>
  )
}

export default FindPwd;