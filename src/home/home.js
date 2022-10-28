import { useState } from "react";
import styled from "styled-components";
import KhApi from "../api/KhApi";
import mainLogo from "../images/logo.PNG"
import Modal from "../util/Modal";


const GoHome = () => {

    
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

  const ButtonLogin = styled.button`
  width: 150px;
  height: 30px;
  margin: 0 0 0 25px;
  border-radius: 20px;
  border: 0.1px solid cornflowerblue;
  background-color: cornflowerblue;
  `;



  const localId = window.localStorage.getItem("userId");
  const localPw = window.localStorage.getItem("userPw");
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
};
// const confirmModal = async() => {
//     setModalOpen(false);
//     const memberReg = await KhApi.memberDelete(localId);
//     console.log(memberReg.data.result);
//     if(memberReg.data.result === "OK") {
//         window.location.replace("/");
//     }
// };

const onClickDelete = async() => {
    // setModalOpen(true);
    const memberDel = await KhApi.memberDelete(localId);
    console.log(memberDel.data.result);
    if(memberDel.data.result === "OK") {
        window.location.replace("/");
    }
}

const onClickMember = () => {
    console.log("회원정보로 이동");
    window.location.replace("/myinfo");
}
  
return (
  <Box>
    <div>
      <Logo >
        <img src={mainLogo} alt="logo"/>
      </Logo>
    </div>
    <div>
      <div>
      <span onClick={onClickMember}>회원정보 조회</span>
      </div>
      <div>
        <span>아이디 : {localId} </span>
        <span>패스워드 : {localPw}</span>
      </div>
    </div>
    <div>
      <span onClick={onClickDelete}>회원 탈퇴</span>
    </div>
    {modalOpen && <Modal open={modalOpen}  close={closeModal} type={true} header="확인">정말 탈퇴하시겠습니까?</Modal>}
  </Box>

)
}

export default GoHome;