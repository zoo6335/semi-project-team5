import { useEffect, useState } from "react";
import styled from "styled-components";
import KhApi from "../api/KhApi";
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
border: 0.1px solid cornflowerblue;
background-color: cornflowerblue;

  & + & {
    margin-left : 50px;
    
  }
`;


const MyPage = () => {

  const localId = window.localStorage.getItem("userId");
  const localPw = window.localStorage.getItem("userPw");
  const isLogin = window.localStorage.getItem("isLogin");
  if(isLogin === "FALSE") window.replace("/");


  const [memberInfo, setMemberInfo] = useState("");

  useEffect(() => {

    const memberData = async () => {
      try {
        // memberInfo()는 전체 회원 정보를 필요로할 때 씀
        const response = await KhApi.memberInfo(localId); // 현재로그인된 아이디를 넘겨줌
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
    window.location.replace("/memberInfo");
}
  
return (
  <Box>
    <div>
      <div>
        <span onClick={onClickMember}>회원정보 조회</span>
      </div>
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
      <Button onClick={onClickDelete}>회원 탈퇴</Button>
    </div>
    {modalOpen && <Modal open={modalOpen}  close={closeModal} type={true} header="확인">정말 탈퇴하시겠습니까?</Modal>}
  </Box>

)
}

export default MyPage;