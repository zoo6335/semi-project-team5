import { useEffect, useState } from "react";
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


const FindId = () => {


  const [loading, setLoading] = useState(false);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [findId, setFindId] = useState("");

  const onChangeName = (e) => {
    setInputName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  }

  const onClickCancel = () => {
    window.location.replace("/login");
  }

  const onClickFind = () => {

    const memberData = async () => {
      setLoading(true);
      try {
        const response = await DjApi.findMember();
        const infoId = response.data.map(e => [e.id, e.pwd, e.name, e.email]);  // 아이디 비밀번호

        infoId.forEach(element => {
          console.log(element[2]);
          if (element[2] === inputName &&
            element[3] === inputEmail) {
            setFindId(element[0]);
          }
        });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    memberData();
    setModalOpen(true);
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
            <FontAwesomeIcon icon={faUserTag} size="3x"
              style={{ "marginRight": 10 }} />
            <Input placeholder="  닉네임"
              value={inputName}
              onChange={onChangeName}
            />
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
          <MsgContainer>

          </MsgContainer>
          <div>
            <Button onClick={onClickFind}>ID ?</Button>
            <Button onClick={onClickCancel}>Cancel</Button>
          </div>
        </div>
      </div>
      {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="아이디 찾기">ID : {findId}</Modal>}
    </Box>
  );
}

export default FindId;