import { useState } from "react";
import styled from "styled-components";
import DjApi from "../../api/DjApi";
import Modal from "../../util/Modal";

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
`;

const ButtonLogin = styled.button`
width: 150px;
height: 50px;
border-radius: 20px;
border: 0.1px solid cornsilk;
background-color: cornsilk;

  & + & {
    margin-left : 50px;
  }
`;

const FindPwd = () => {

  
  const [findPwd, setFindPwd] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [inputId, setInputId] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] =useState("");

  
  const onChangeId = (e) => {
    setInputId(e.target.value);
  }

  const onChangeName = (e) => {
    setInputName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  }

  const onClickFindPwd = ()=> {

    const memberData = async () => {
      setLoading(true);
      try {
        const response = await DjApi.findMember();
        const infoPwd = response.data.map(e => [e.id, e.pwd, e.name, e.email]);  // 아이디 비밀번호

        infoPwd.forEach(element => {
          console.log(element[2]);
          if(element[0] === inputId &&
              element[2] === inputName &&
              element[3] === inputEmail) {
              setFindPwd(element[1]);
          }
        });
      } catch(e) {
        console.log(e);
      }
      setLoading(false); 
    }
    memberData();
    setModalOpen(true);
  }

  const onClickCancel = () => {
    window.location.replace("/");
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
        <div>
          <InputLogin placeholder="아이디" value={inputId} onChange={onChangeId} />
        </div>
        <br />
          <InputLogin placeholder="이름" value={inputName} onChange={onChangeName} />
        <div>
          {/* span 태그의 class에 다른 props 넣어서 false일 때 메세지가 나오도록 수정해야함 */}
          {/* <span className={`message ${isId ? 'success' : 'error'}`}></span> */}
          {/* {inputId > 0 && {isId} ? null : <span>{idMessage}</span>}  */}
        </div>
        <br />
        <div>  
          <InputLogin placeholder="이메일" value={inputEmail} onChange={onChangeEmail} />
        </div>
        <br />
        <div>
          <ButtonLogin onClick={onClickFindPwd}>Find Pwd</ButtonLogin>
          <ButtonLogin onClick={onClickCancel}>Cancel</ButtonLogin>
        </div>
      </div>
    </div>
    {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="비밀번호 찾기">PWD : {findPwd}</Modal>}
  </Box>
  )
}

export default FindPwd;