import { useEffect, useState } from "react";
import styled from "styled-components";
import DjApi from "../api/DjApi";
import Modal from "../util/Modal";


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

const UlTag = styled.ul`
  
  & > div {
    margin : 50px auto;
  }
`

const Button = styled.button`
width: 150px;
height: 50px;
border-radius: 20px;
border: 0.1px solid cornsilk;
background-color: cornsilk;

  & + & {
    margin-left : 50px;
    
  }
`;


const MyPage = () => {

  const localId = window.localStorage.getItem("userId");
  const isLogin = window.localStorage.getItem("isLogin");
  if(isLogin === "FALSE") window.replace("/");


  const [memberInfo, setMemberInfo] = useState("");

  useEffect(() => {

    const memberData = async () => {
      try {
        // memberInfo()는 전체 회원 정보를 필요로할 때 씀
        const response = await DjApi.memberInfo(localId); // 현재로그인된 아이디를 넘겨줌
        setMemberInfo(response.data);
        console.log(response.data);
      } catch(e) {
        console.log(e);
      }
    }
    memberData();
  }, [])




  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

const confirmModal = async() => {
    setModalOpen(false);
    const memberReg = await DjApi.memberDelete(localId);
    console.log(memberReg.data.result);
    if(memberReg.data.result === "OK") {
        window.location.replace("/");
    }
  }

const onClickMemberDelete = () => {
  setModalOpen(true);
}


const onClickUpdate = () => {
    setModalOpen(false);
    window.location.replace("/memberUpdate");
}
  
return (
  <Box>
    <div>
      <p>회원 정보</p>
      <div style={{margin : '50px auto'}}>
        {memberInfo && memberInfo.map(member => (
          <div key={member.id}>
            <UlTag>
              <div>ID : {member.id}</div>
              <div>NAME : {member.name}</div>
              <div>EMAIL : {member.email}</div>
              <div>JOIN : {member.join}</div>
            </UlTag>
          </div>
          ))}
      </div>
    </div>
    <div>
      <div>
        <Button onClick={onClickUpdate}>정보 수정</Button>
        <Button onClick={onClickMemberDelete}>회원 탈퇴</Button>
      </div>
    </div>
    {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="확인">정말 탈퇴하시겠습니까?</Modal>}
  </Box>

  )
}


export default MyPage;