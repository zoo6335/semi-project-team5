import { useEffect, useState } from "react";
import styled from "styled-components";
import DjApi from "../../api/DjApi";
import Modal from "../../util/Modal";
import { faIdCard, faUser, faEnvelope, faCalendarDay, faUserTag } from "@fortawesome/free-solid-svg-icons";
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

const InfoBox = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 40px 80px / 80px 40px;
  border: 3px dotted #40BAAA;
  margin: -50px 0 50px 0;
  padding-top: 20px;
`

const UlTag = styled.ul`
  
  & > div {
    margin : 50px auto;
  }
`

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
    
    <InfoBox>
      <div style={{textAlign: "center"}}>
        <FontAwesomeIcon icon={faIdCard} size="3x"
                                  style={{"marginRight": 10}}/> 
      </div>
      <div style={{margin : '50px auto'}}>
        {memberInfo && memberInfo.map(member => (
          <div key={member.id}>
            <UlTag  >
              <div style={{ "marginLeft": "-40px"}}>
                <FontAwesomeIcon icon={faUser}
                                  style={{"marginRight": 10}}/>
                                  {member.id}
              </div>
              <div style={{ "marginLeft": "-30px"}}>
                <FontAwesomeIcon icon={faUserTag}
                                  style={{"marginRight": 10}}/>
                                  {member.name}
              </div>
              <div style={{ "marginLeft": "-30px"}}>
                <FontAwesomeIcon icon={faEnvelope}
                                  style={{"marginRight": 10}}/>
                                  {member.email}
              </div>
              <div style={{ "marginLeft": "-30px"}}>
                <FontAwesomeIcon icon={faCalendarDay}
                                  style={{"marginRight": 10}}/>
                                  {member.join}
              </div>
            </UlTag>
          </div>
          ))}
      </div>
    </InfoBox>
    <div>
      <div>
        <ButtonOk onClick={onClickUpdate}>정보 수정</ButtonOk>
        <ButtonOk onClick={onClickMemberDelete}>회원 탈퇴</ButtonOk>
      </div>
    </div>
    {modalOpen && <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="확인">정말 탈퇴하시겠습니까?</Modal>}
  </Box>

  )
}


export default MyPage;