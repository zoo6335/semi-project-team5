import { useEffect, useState } from "react";
import styled from "styled-components";
import KhApi from "../api/KhApi";
import mainLogo from "../images/logo.PNG"
import Modal from "../util/Modal";

  
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
      <Logo >
        <img src={mainLogo} alt="logo"/>
      </Logo>
    </div>
    <div>
      <div>
        <span onClick={onClickMember}>회원정보 조회</span>
      </div>
      <div>
        {memberInfo && memberInfo.map(member => (
          <div key={member.user_id}>
            <p>{member.user_id}</p>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <p>{member.join}</p>
          </div>
          ))}
      </div>
    </div>
    <div>
      <span onClick={onClickDelete}>회원 탈퇴</span>
    </div>
    {modalOpen && <Modal open={modalOpen}  close={closeModal} type={true} header="확인">정말 탈퇴하시겠습니까?</Modal>}
  </Box>

)
}

export default MyPage;